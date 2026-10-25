// Shared Vipps ePayment helpers for the Cloudflare Pages Functions in functions/api.
// Kept outside functions/ so Cloudflare doesn't treat it as a route.
// Keys live in Cloudflare (Settings > Variables and Secrets), never in the repo:
// test keys for Preview deployments, production keys for Production.

export interface Env {
  VIPPS_ENV: string; // 'test' or 'production'
  VIPPS_CLIENT_ID: string;
  VIPPS_CLIENT_SECRET: string;
  VIPPS_SUBSCRIPTION_KEY: string;
  VIPPS_MSN: string; // merchant serial number
  ASSETS: { fetch: (input: Request | string | URL) => Promise<Response> };
}

const baseUrl = (env: Env) =>
  env.VIPPS_ENV === 'production' ? 'https://api.vipps.no' : 'https://apitest.vipps.no';

const commonHeaders = (env: Env) => ({
  'Ocp-Apim-Subscription-Key': env.VIPPS_SUBSCRIPTION_KEY,
  'Merchant-Serial-Number': env.VIPPS_MSN,
  'Vipps-System-Name': 'rewild-website',
  'Vipps-System-Version': '1.0.0',
});

async function accessToken(env: Env): Promise<string> {
  const res = await fetch(`${baseUrl(env)}/accesstoken/get`, {
    method: 'POST',
    headers: {
      ...commonHeaders(env),
      client_id: env.VIPPS_CLIENT_ID,
      client_secret: env.VIPPS_CLIENT_SECRET,
    },
  });
  if (!res.ok) throw new Error(`Vipps access token failed: ${res.status}`);
  const { access_token } = await res.json() as { access_token: string };
  return access_token;
}

// Calls the ePayment API with a fresh token. Retries with the same Idempotency-Key are safe.
export async function vipps(env: Env, path: string, init: { method?: string; body?: unknown; idempotencyKey?: string } = {}) {
  const res = await fetch(`${baseUrl(env)}/epayment/v1/payments${path}`, {
    method: init.method ?? 'GET',
    headers: {
      ...commonHeaders(env),
      Authorization: `Bearer ${await accessToken(env)}`,
      'Content-Type': 'application/json',
      ...(init.idempotencyKey ? { 'Idempotency-Key': init.idempotencyKey } : {}),
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
  });
  const data = await res.json().catch(() => ({})) as any;
  if (!res.ok) throw new Error(`Vipps ${init.method ?? 'GET'} ${path} failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

// Vipps references: 8-64 chars of letters, digits and hyphens
export const isReference = (ref: string | null): ref is string => !!ref && /^rewild-[a-z0-9-]{8,50}$/.test(ref);
