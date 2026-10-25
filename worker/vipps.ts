// Shared Vipps ePayment helpers for the /api routes in worker/index.ts.
// Keys live in the rewild Worker (Settings > Variables and Secrets), never in the repo.
// Live Vipps is only ever used on re-wild.no itself: preview versions (*.workers.dev) and
// local testing always go to the Vipps test system, using VIPPS_TEST_* keys if they're set.

export interface Env {
  VIPPS_ENV?: string; // 'production' turns on live payments for re-wild.no
  VIPPS_CLIENT_ID?: string;
  VIPPS_CLIENT_SECRET?: string;
  VIPPS_SUBSCRIPTION_KEY?: string;
  VIPPS_MSN?: string; // merchant serial number
  VIPPS_TEST_CLIENT_ID?: string;
  VIPPS_TEST_CLIENT_SECRET?: string;
  VIPPS_TEST_SUBSCRIPTION_KEY?: string;
  VIPPS_TEST_MSN?: string;
  VIPPS_WEBHOOK_SECRET?: string; // from /api/setup-webhook; checks webhook calls really come from Vipps
  RESEND_API_KEY?: string; // booking emails; without it payments still work, just no email
  ASSETS: { fetch: (input: Request | string | URL) => Promise<Response> };
  BOOKINGS?: KV; // customer details between starting a payment and it going through
}

type KV = {
  get(key: string, type: 'json'): Promise<unknown>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
};

export type Config = { base: string; clientId: string; clientSecret: string; subscriptionKey: string; msn: string };

const LIVE_HOSTS = ['re-wild.no', 'www.re-wild.no'];

export function vippsConfig(env: Env, request: Request): Config {
  const live = env.VIPPS_ENV === 'production' && LIVE_HOSTS.includes(new URL(request.url).hostname);
  if (live) {
    return {
      base: 'https://api.vipps.no',
      clientId: env.VIPPS_CLIENT_ID ?? '',
      clientSecret: env.VIPPS_CLIENT_SECRET ?? '',
      subscriptionKey: env.VIPPS_SUBSCRIPTION_KEY ?? '',
      msn: env.VIPPS_MSN ?? '',
    };
  }
  return {
    base: 'https://apitest.vipps.no',
    clientId: env.VIPPS_TEST_CLIENT_ID ?? env.VIPPS_CLIENT_ID ?? '',
    clientSecret: env.VIPPS_TEST_CLIENT_SECRET ?? env.VIPPS_CLIENT_SECRET ?? '',
    subscriptionKey: env.VIPPS_TEST_SUBSCRIPTION_KEY ?? env.VIPPS_SUBSCRIPTION_KEY ?? '',
    msn: env.VIPPS_TEST_MSN ?? env.VIPPS_MSN ?? '',
  };
}

const commonHeaders = (cfg: Config) => ({
  'Ocp-Apim-Subscription-Key': cfg.subscriptionKey,
  'Merchant-Serial-Number': cfg.msn,
  'Vipps-System-Name': 'rewild-website',
  'Vipps-System-Version': '1.0.0',
});

async function accessToken(cfg: Config): Promise<string> {
  const res = await fetch(`${cfg.base}/accesstoken/get`, {
    method: 'POST',
    headers: {
      ...commonHeaders(cfg),
      client_id: cfg.clientId,
      client_secret: cfg.clientSecret,
    },
  });
  if (!res.ok) throw new Error(`Vipps access token failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
  const { access_token } = await res.json() as { access_token: string };
  return access_token;
}

type CallInit = { method?: string; body?: unknown; idempotencyKey?: string };

// Calls the ePayment API with a fresh token. Retries with the same Idempotency-Key are safe.
export const vipps = (cfg: Config, path: string, init: CallInit = {}) =>
  vippsApi(cfg, `/epayment/v1/payments${path}`, init);

// Any Vipps API, e.g. /webhooks/v1/webhooks
export async function vippsApi(cfg: Config, path: string, init: CallInit = {}) {
  const res = await fetch(`${cfg.base}${path}`, {
    method: init.method ?? 'GET',
    headers: {
      ...commonHeaders(cfg),
      Authorization: `Bearer ${await accessToken(cfg)}`,
      'Content-Type': 'application/json',
      ...(init.idempotencyKey ? { 'Idempotency-Key': init.idempotencyKey } : {}),
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
  });
  const data = await res.json().catch(() => ({})) as any;
  if (!res.ok) throw new Error(`Vipps ${init.method ?? 'GET'} ${path} failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

// Error body for a failed Vipps call: previews include Vipps' own message to help testing
// (plus which VIPPS_ variable names are set - names only, never values)
export const failure = (message: string, err: unknown, request: Request, env: Env) => {
  console.error(err);
  const live = LIVE_HOSTS.includes(new URL(request.url).hostname);
  const keysSet = Object.keys(env).filter(k => k.startsWith('VIPPS_') && env[k as keyof Env]);
  return json({ error: message, ...(live ? {} : { detail: String(err), keysSet }) }, 502);
};

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

// Vipps references: 8-64 chars of letters, digits and hyphens
export const isReference = (ref: string | null): ref is string => !!ref && /^rewild-[a-z0-9-]{8,50}$/.test(ref);
