// Vipps webhook: Vipps calls POST /api/vipps-webhook when a payment is reserved, so the
// payment is captured and the email sent even if the customer never comes back to /payment.
// The call is only a nudge - completeBooking() always asks Vipps for the real state.
import { vippsApi, vippsConfig, json, failure, isReference, isLive, type Env } from './vipps';
import { completeBooking } from './booking';

const EVENTS = ['epayments.payment.authorized.v1'];

const base64 = (bytes: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(bytes)));

// Vipps signs each call with HMAC-SHA256 over method, path, date, host and body hash
async function signedByVipps(request: Request, body: string, secret: string) {
  const url = new URL(request.url);
  const date = request.headers.get('x-ms-date') ?? '';
  const contentHash = request.headers.get('x-ms-content-sha256') ?? '';
  const signature = (request.headers.get('authorization') ?? '').split('Signature=')[1] ?? '';

  const bodyHash = base64(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(body)));
  if (bodyHash !== contentHash) return false;

  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const toSign = `POST\n${url.pathname}${url.search}\n${date};${url.host};${contentHash}`;
  const expected = base64(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(toSign)));
  return expected === signature;
}

export async function webhook(request: Request, env: Env) {
  const body = await request.text();
  if (env.VIPPS_WEBHOOK_SECRET && !(await signedByVipps(request, body, env.VIPPS_WEBHOOK_SECRET))) {
    return json({ error: 'Bad signature' }, 401);
  }

  const { reference } = JSON.parse(body || '{}') as { reference?: string };
  if (!isReference(reference ?? null)) return json({ ok: true }); // not one of ours

  try {
    await completeBooking(vippsConfig(env, request), env, reference!, request.url);
    return json({ ok: true });
  } catch (err) {
    return failure('Could not complete the booking', err, request, env); // Vipps retries
  }
}

// GET /api/setup-webhook - open once in the browser on re-wild.no (and once on a preview
// for the test system). Registers the webhook with Vipps and shows the secret to save as
// VIPPS_WEBHOOK_SECRET. Visiting it again just says it's already set up.
export async function setupWebhook(request: Request, env: Env) {
  const cfg = vippsConfig(env, request);
  const url = new URL('/api/vipps-webhook', request.url).toString();

  try {
    const { webhooks = [] } = await vippsApi(cfg, '/webhooks/v1/webhooks') as { webhooks?: { url: string }[] };
    if (webhooks.some(w => w.url === url)) return page('Already set up', `Vipps already sends payment updates to ${url}. Nothing more to do.`);

    const { secret } = await vippsApi(cfg, '/webhooks/v1/webhooks', { method: 'POST', body: { url, events: EVENTS } });
    return page(
      'Webhook registered',
      `Vipps will now send payment updates to ${url}.<br><br>Save this secret in Cloudflare as <strong>VIPPS_WEBHOOK_SECRET</strong> (tick Secret), then deploy. It is only shown once:<br><br><code style="font-size:18px;word-break:break-all">${secret}</code>`,
    );
  } catch (err) {
    return failure('Could not register the webhook', err, request, env);
  }
}

const page = (title: string, body: string) =>
  new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font-family:Helvetica,Arial,sans-serif;max-width:640px;margin:40px auto;padding:0 16px;line-height:1.6;color:#2f3a24;background:#fff"><h1>${title}</h1><p>${body}</p></body>`, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });

// GET /api/test-approve?ref=...&phone=... - previews only. Approves a test payment the way
// the Vipps MT app would (phone = a test user from the Vipps portal), then completes it.
export async function testApprove(request: Request, env: Env) {
  if (isLive(request)) return json({ error: 'Not found' }, 404);
  const params = new URL(request.url).searchParams;
  const ref = params.get('ref');
  if (!isReference(ref)) return json({ error: 'Invalid reference' }, 400);
  const cfg = vippsConfig(env, request);

  try {
    await vippsApi(cfg, `/epayment/v1/test/payments/${ref}/approve`, {
      method: 'POST',
      body: { customer: { phoneNumber: params.get('phone') ?? '' } },
    });
    return json({ status: await completeBooking(cfg, env, ref, request.url) });
  } catch (err) {
    return failure('Could not approve the test payment', err, request, env);
  }
}
