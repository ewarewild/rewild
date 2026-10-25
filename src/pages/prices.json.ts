// Built to /prices.json. The Vipps function (functions/api/pay.ts) reads it so the amount
// charged always comes from src/data/events.ts, never from the browser.
import { sessions, signupLabel, price } from '../data/events';

export function GET() {
  const prices = Object.fromEntries(
    sessions.map(s => [signupLabel(s), { date: s.date, nok: price(s) }]),
  );
  return new Response(JSON.stringify(prices), { headers: { 'Content-Type': 'application/json' } });
}
