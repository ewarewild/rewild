// GET /api/payment-status?ref=...  ->  { status: 'paid' | 'pending' | 'cancelled' }
// Called by /payment when the customer comes back from Vipps. A reserved (AUTHORIZED)
// payment is captured here, which completes the sale. Capturing twice is safe because
// the Idempotency-Key is tied to the reference.
import { vipps, json, isReference, type Env } from '../../lib/vipps';

export const onRequestGet = async ({ request, env }: { request: Request; env: Env }) => {
  const ref = new URL(request.url).searchParams.get('ref');
  if (!isReference(ref)) return json({ error: 'Invalid reference' }, 400);

  try {
    const payment = await vipps(env, `/${ref}`);
    const { state, amount, aggregate } = payment;

    if (state === 'AUTHORIZED') {
      if (aggregate.capturedAmount.value < amount.value) {
        await vipps(env, `/${ref}/capture`, {
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
};
