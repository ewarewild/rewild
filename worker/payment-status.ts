// GET /api/payment-status?ref=...  ->  { status: 'paid' | 'pending' | 'cancelled' }
// Called by /payment when the customer comes back from Vipps. A reserved payment is
// captured and the booking email sent here (see booking.ts).
import { vippsConfig, json, failure, isReference, type Env } from './vipps';
import { completeBooking } from './booking';

export async function paymentStatus(request: Request, env: Env) {
  const ref = new URL(request.url).searchParams.get('ref');
  if (!isReference(ref)) return json({ error: 'Invalid reference' }, 400);

  try {
    return json({ status: await completeBooking(vippsConfig(env, request), env, ref, request.url) });
  } catch (err) {
    return failure('Could not check the payment', err, request, env);
  }
}
