// Single source for calendar dates. Each session is one line in the calendar.
// Past dates are hidden automatically in the browser, so old ones can stay here.

export type EventId = 'evening-reset' | 'rewild-course' | 'deep-dive';

export const events: Record<EventId, { name: string; href: string; type: string; level: string }> = {
  'evening-reset': { name: 'Evening Reset', href: '/evening-reset', type: 'Evening hike', level: 'Easy-medium' },
  'rewild-course': { name: 'Rewild Course', href: '/day-course', type: 'Day hike', level: 'Easy-medium' },
  'deep-dive': { name: 'Rewild Deep Dive', href: '/weekend-course', type: 'Day hike', level: 'Easy-medium' },
};

export type Session = {
  event: EventId;
  date: string; // YYYY-MM-DD
  time: string;
  place: string;
  signup: string; // value of the matching option in the signup form
};

const eveningReset = (place: string, days: number[]): Session[] =>
  days.map(day => ({
    event: 'evening-reset',
    date: `2026-11-${String(day).padStart(2, '0')}`,
    time: '17:00',
    place,
    signup: `Evening Reset ${place}`,
  }));

export const sessions: Session[] = [
  ...eveningReset('Skien', [2, 9, 16, 23]),
  ...eveningReset('Porsgrunn', [3, 10, 17, 24]),
  ...eveningReset('Larvik', [4, 11, 18, 25]),
  ...eveningReset('Sandefjord', [5, 12, 19, 26]),
  { event: 'rewild-course', date: '2026-10-25', time: '10:00', place: 'Nordkollen', signup: 'Rewild Course' },
  { event: 'deep-dive', date: '2026-10-25', time: '10:00', place: 'Nordkollen', signup: 'Rewild Deep Dive' },
].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
