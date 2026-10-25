// Single source for trips. Each session is one card in the calendar and gets its own
// page at /<event>/<place>-<day>-<month>. Past dates are hidden from the calendar.
import type { ImageMetadata } from 'astro';
import skolapparn from '../images/skolapparn.webp';
import nordkollen2 from '../images/nordkollen2.webp';

export type EventId = 'evening-reset' | 'rewild-course';

type EventInfo = {
  name: string;
  href: string;
  image: ImageMetadata;
  alt: string;
  description: string;
  hours: number; // length, used for the end time on phone calendar cards
};

export const events: Record<EventId, EventInfo> = {
  'evening-reset': {
    name: 'Evening Reset',
    href: '/evening-reset',
    image: skolapparn,
    alt: 'Evening Reset - forest hike',
    hours: 1.5,
    description: 'Shake off the day and reconnect with your body on a fast-paced evening hike that supports stress release, mental balance and better sleep.',
  },
  'rewild-course': {
    name: 'Rewild Course',
    href: '/rewild-course',
    image: nordkollen2,
    alt: 'Rewild Course - full-day training',
    hours: 5,
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
  },
};

export type Session = {
  event: EventId;
  date: string; // YYYY-MM-DD
  time: string;
  place: string; // town, shown above the title on the calendar card
  spot?: string; // the hike's destination, used in titles instead of place
  meetingPoint?: string; // shown as "To be announced" until set
  intro?: string[]; // paragraphs replacing the event's shared intro on this trip's page (HTML allowed on course pages)
  description?: string; // replaces the event's shared description on this trip's calendar card
  difficulty?: string; // shown on phone calendar cards, e.g. 'Easy' or 'Moderate'
  mapUrl?: string;
  image?: ImageMetadata; // replaces the event's shared image on this trip's card and page
  duration?: string; // course pages only, replaces the shared duration
  price?: string; // course pages only, replaces the shared price
  meetUp?: string; // course pages only, replaces the Technical info meet-up paragraph (HTML allowed)
  routeInfo?: string; // course pages only, replaces the Technical info elevation/distance paragraph
};

export const sessions: Session[] = [
  {
    event: 'evening-reset', date: '2026-11-03', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  {
    event: 'evening-reset', date: '2026-11-10', time: '17:00', place: 'Larvik', spot: 'Brunlanes Sportskapellet', difficulty: 'Easy',
    meetingPoint: 'Ingri turparkering', mapUrl: 'https://maps.app.goo.gl/WS46sDBc4eG9Tg757',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy forest trail towards Brunlanes Sportskapellet (205m), a 3.1km round trip. It's a lovely, quiet spot just outside of town.",
    ],
  },
  {
    event: 'rewild-course', date: '2026-11-06', time: '10:00', place: 'Porsgrunn & Skien', spot: 'Østre Vealøs', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Østre Vealøs turområder', mapUrl: 'https://www.google.com/maps?q=59.20275,9.73157',
    price: '500 NOK',
    image: nordkollen2,
    intro: [
      'Welcome to hands-on, practical training in nature that gives you tools to take the strain off your joints while walking, build strength, balance and stability, and release mental and physical tension.',
      'We hike to <a href="https://ut.no/turforslag/113681/topptur-til-stre-veals" target="_blank" rel="noopener" class="underline hover:text-sage transition-colors duration-200">Østre Vealøs</a> (445.5m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.20275,9.73157" target="_blank" rel="noopener" class="underline hover:text-sage transition-colors duration-200">Parkering for Østre Vealøs turområder</a> and walk from there on a well-marked trail, mostly through forest.',
    routeInfo: 'The total distance both ways is 7.6km, a moderately demanding trail.',
    description: 'A hands-on course to learn how to take the strain off your joints while walking in terrain, simple methods to release stress, increase focus, build strength and stability.',
  },
  {
    event: 'rewild-course', date: '2026-11-15', time: '10:00', place: 'Porsgrunn & Skien', spot: 'Nordkollen', difficulty: 'Moderate',
    image: nordkollen2,
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    price: '500 NOK',
    intro: [
      'Welcome to hands-on, practical training in nature that gives you tools to take the strain off your joints while walking, build strength, balance and stability, and release mental and physical tension.',
      'We hike to <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> and walk from there on a gravel road, then on a forest trail.',
    description: 'A hands-on course to learn how to take the strain off your joints while walking in terrain, simple methods to release stress, increase focus, build strength and stability.',
  },
].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const day = (s: Session) => new Date(`${s.date}T12:00:00`);
// Uses only the first town, so "Porsgrunn & Skien" keeps the /porsgrunn-... link.
export const tripSlug = (s: Session) =>
  `${s.place.split(/,| & /)[0]}-${day(s).getDate()}-${months[day(s).getMonth()]}`.toLowerCase();

export const tripUrl = (s: Session) => `${events[s.event].href}/${tripSlug(s)}`;

// e.g. "Tuesday 3 November"
export const longDate = (s: Session) =>
  `${weekdays[day(s).getDay()]} ${day(s).getDate()} ${months[day(s).getMonth()]}`;

// e.g. "Evening Reset - Skolapparåsen, Tue 3 Nov" - the trip's option in the signup form
export const signupLabel = (s: Session) =>
  `${events[s.event].name} - ${s.spot ?? s.place}, ${weekdays[day(s).getDay()].slice(0, 3)} ${day(s).getDate()} ${months[day(s).getMonth()].slice(0, 3)}`;

// e.g. "17:00 - 18:30"
export const timeRange = (s: Session) => {
  const [h, m] = s.time.split(':').map(Number);
  const end = h * 60 + m + events[s.event].hours * 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${s.time} - ${pad(Math.floor(end / 60) % 24)}:${pad(end % 60)}`;
};

export const tripPaths = (event: EventId) =>
  sessions.filter(s => s.event === event).map(session => ({ params: { trip: tripSlug(session) }, props: { session } }));
