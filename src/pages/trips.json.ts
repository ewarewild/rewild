// Built to /trips.json. The Worker (worker/) reads it to look up a trip's price when a
// payment starts and its details for the booking email, so both always come from
// src/data/events.ts and never from the browser.
import { events, sessions, signupLabel, price, longDate, timeRange, courseDuration } from '../data/events';

export function GET() {
  const trips = Object.fromEntries(
    sessions.map(s => [signupLabel(s), {
      event: s.event,
      title: `${events[s.event].name} - ${s.spot ?? s.place}`,
      date: s.date,
      longDate: longDate(s),
      time: s.time,
      timeRange: timeRange(s),
      duration: s.event === 'rewild-course' ? courseDuration(s) : undefined,
      meetingPoint: s.meetingPoint,
      mapUrl: s.mapUrl,
      nok: price(s),
    }]),
  );
  return new Response(JSON.stringify(trips), { headers: { 'Content-Type': 'application/json' } });
}
