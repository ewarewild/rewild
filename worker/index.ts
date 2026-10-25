// The rewild Worker. The site itself is the static Astro build in dist/, served by
// Cloudflare as assets; only /api/* reaches this code (see run_worker_first in wrangler.jsonc).
import { pay } from './pay';
import { paymentStatus } from './payment-status';
import { webhook, setupWebhook, testApprove } from './webhook';
import { json, type Env } from './vipps';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/pay' && request.method === 'POST') return pay(request, env);
    if (pathname === '/api/payment-status' && request.method === 'GET') return paymentStatus(request, env);
    if (pathname === '/api/vipps-webhook' && request.method === 'POST') return webhook(request, env);
    if (pathname === '/api/setup-webhook' && request.method === 'GET') return setupWebhook(request, env);
    if (pathname === '/api/test-approve' && request.method === 'GET') return testApprove(request, env);
    if (pathname.startsWith('/api/')) return json({ error: 'Not found' }, 404);

    return env.ASSETS.fetch(request);
  },
};
