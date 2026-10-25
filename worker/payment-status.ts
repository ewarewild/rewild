// GET /api/payment-status?ref=...  ->  { status: 'paid' | 'pending' | 'cancelled' }
// Called by /payment when the customer comes back from Vipps. A reserved (AUTHORIZED)
// payment is captured here, which completes the sale. Capturing twice is safe because
// the Idempotency-Key is tied to the reference.
import { vipps, vippsConfig, json, isReference, type Env } from './vipps';

export async function paymentStatus(request: Request, env: Env) {
  const ref = new URL(request.url).searchParams.get('ref');
  if (!isReference(ref)) return json({ error: 'Invalid reference' }, 400);
  const cfg = vippsConfig(env, request);

  try {
    const payment = await vipps(cfg, `/${ref}`);
    const { state, amount, aggregate } = payment;

    if (state === 'AUTHORIZED') {
      if (aggregate.capturedAmount.value < amount.value) {
        await vipps(cfg, `/${ref}/capture`, {
          method: 'POST',
          idempotencyKey: `capture-${ref}`,
          body: { modificationAmount: amount },
        });
      }
      return json({ status: 'paid' });
    }
    if (state === 'CREATED') return json({ status: 'pending' });
    return json({ status: 'cancelled' }); // ABORTED, EXPIRED or TERMINATED
  } catch (err) {
    console.error(err);
    return json({ error: 'Could not check the payment' }, 502);
  }
}
