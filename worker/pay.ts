// POST /api/pay  { offering, name, email, phone }  ->  { reference, redirectUrl }
// Starts a Vipps payment for one trip. The price is looked up in /trips.json (built from
// src/data/events.ts), so the browser only says which trip, never how much.
import { vipps, vippsConfig, json, failure, type Env } from './vipps';
import { saveBooking, loadTrips } from './booking';

// Norwegian mobile numbers only; anything else just isn't prefilled in Vipps
const vippsPhone = (raw: string) => {
  const digits = raw.replace(/\D/g, '').replace(/^00/, '');
  if (/^[49]\d{7}$/.test(digits)) return `47${digits}`;
  if (/^47[49]\d{7}$/.test(digits)) return digits;
  return undefined;
};

export async function pay(request: Request, env: Env) {
  const { offering, name, email, phone } = await request.json().catch(() => ({})) as Record<string, string>;

  const trip = offering ? (await loadTrips(env, request.url))[offering] : undefined;
  const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Oslo' }); // YYYY-MM-DD
  if (!trip || trip.date < today) return json({ error: 'Unknown or past event' }, 400);

  const reference = `rewild-${trip.date}-${crypto.randomUUID().slice(0, 8)}`;
  const phoneNumber = vippsPhone(phone ?? '');

  try {
    // Kept so the booking email can go out once Vipps confirms the payment
    if (email) await saveBooking(env, reference, { offering, name: name ?? '', email });

    const payment = await vipps(vippsConfig(env, request), '', {
      method: 'POST',
      idempotencyKey: reference,
      body: {
        amount: { currency: 'NOK', value: trip.nok * 100 }, // in øre
        paymentMethod: { type: 'WALLET' },
        ...(phoneNumber ? { customer: { phoneNumber } } : {}),
        reference,
        userFlow: 'WEB_REDIRECT',
        returnUrl: new URL(`/payment?ref=${reference}`, request.url).toString(),
        paymentDescription: `${offering} - ${(name ?? '').slice(0, 40)}`.slice(0, 100),
      },
    });
    return json({ reference, redirectUrl: payment.redirectUrl });
  } catch (err) {
    return failure('Could not start the Vipps payment', err, request, env);
  }
}
