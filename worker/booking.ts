// What happens once Vipps says a payment is reserved: capture it (completing the sale)
// and send the booking email. Used by both /payment (when the customer comes back) and
// the Vipps webhook (in case they don't), so each step is safe to run twice.
import { vipps, type Config, type Env } from './vipps';
import { confirmationEmail, type Trip } from './emails';

export type Booking = { offering: string; name: string; email: string; emailed?: boolean };

const BOOKING_TTL = 60 * 60 * 24 * 30; // keep a booking 30 days, then KV forgets it
const FROM = 'Rewild <bookings@re-wild.no>';
const EWA = 'ewa@re-wild.no';

export const bookingKey = (ref: string) => `booking:${ref}`;

export async function saveBooking(env: Env, ref: string, booking: Booking) {
  await env.BOOKINGS?.put(bookingKey(ref), JSON.stringify(booking), { expirationTtl: BOOKING_TTL });
}

export const loadTrips = async (env: Env, origin: string) =>
  await (await env.ASSETS.fetch(new URL('/trips.json', origin))).json() as Record<string, Trip>;

// -> 'paid' | 'pending' | 'cancelled'
export async function completeBooking(cfg: Config, env: Env, ref: string, origin: string) {
  const { state, amount, aggregate } = await vipps(cfg, `/${ref}`);

  if (state === 'CREATED') return 'pending';
  if (state !== 'AUTHORIZED') return 'cancelled'; // ABORTED, EXPIRED or TERMINATED

  if (aggregate.capturedAmount.value < amount.value) {
    await vipps(cfg, `/${ref}/capture`, {
      method: 'POST',
      idempotencyKey: `capture-${ref}`,
      body: { modificationAmount: amount },
    });
  }

  // The payment is done either way; a failed email is logged, not shown to the customer
  try {
    await sendConfirmation(env, ref, origin);
  } catch (err) {
    console.error(err);
  }
  return 'paid';
}

async function sendConfirmation(env: Env, ref: string, origin: string) {
  if (!env.BOOKINGS || !env.RESEND_API_KEY) return;
  const booking = await env.BOOKINGS.get(bookingKey(ref), 'json') as Booking | null;
  if (!booking || booking.emailed) return;

  const trip = (await loadTrips(env, origin))[booking.offering];
  if (!trip) throw new Error(`No trip for ${booking.offering}`);
  const { subject, text, html } = confirmationEmail(trip, booking.name);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      // Resend drops a repeat with the same key, so the webhook and /payment can't both send it
      'Idempotency-Key': `confirm-${ref}`,
    },
    body: JSON.stringify({ from: FROM, to: [booking.email], bcc: [EWA], reply_to: EWA, subject, text, html }),
  });
  if (!res.ok) throw new Error(`Resend failed: ${res.status} ${await res.text()}`);

  await saveBooking(env, ref, { ...booking, emailed: true });
}
