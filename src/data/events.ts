// Single source for trips. Each session is one card in the calendar and gets its own
// page at /<event>/<place>-<day>-<month>. Past dates are hidden from the calendar.
import type { ImageMetadata } from 'astro';
import skolapparn from '../images/skolapparn.webp';
import nordkollen2 from '../images/nordkollen2.webp';
import rondane2 from '../images/rondane2.webp';

export type EventId = 'evening-reset' | 'rewild-course' | 'rewild-immersion';

type EventInfo = {
  name: string;
  href: string;
  image: ImageMetadata;
  alt: string;
  description: string;
};

export const events: Record<EventId, EventInfo> = {
  'evening-reset': {
    name: 'Evening Reset',
    href: '/evening-reset',
    image: skolapparn,
    alt: 'Evening Reset - forest hike',
    description: 'Shake off the day and reconnect with your body on a fast-paced evening hike that supports stress release, mental balance and better sleep.',
  },
  'rewild-course': {
    name: 'Rewild Course',
    href: '/rewild-course',
    image: nordkollen2,
    alt: 'Rewild Course - full-day training',
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
  },
  'rewild-immersion': {
    name: 'Rewild Immersion',
    href: '/rewild-immersion',
    image: rondane2,
    alt: 'Rewild Immersion - training in nature',
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
  intro?: string[]; // paragraphs replacing the event's shared intro on this trip's page
  description?: string; // replaces the event's shared description on this trip's calendar card
  mapUrl?: string;
};

export const sessions: Session[] = [
  {
    event: 'evening-reset', date: '2026-11-03', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  {
    event: 'evening-reset', date: '2026-11-10', time: '17:00', place: 'Larvik', spot: 'Brunlanes Sportskapellet',
    meetingPoint: 'Ingri turparkering', mapUrl: 'https://maps.app.goo.gl/WS46sDBc4eG9Tg757',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  {
    event: 'evening-reset', date: '2026-11-17', time: '17:00', place: 'Larvik',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  {
    event: 'evening-reset', date: '2026-11-24', time: '17:00', place: 'Sandefjord',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  {
    event: 'rewild-course', date: '2026-11-06', time: '10:00', place: 'Porsgrunn', spot: 'Østre Vealøs',
    meetingPoint: 'Parkering for Østre Vealøs turområder', mapUrl: 'https://www.google.com/maps?q=59.20275,9.73157',
    description: 'Hike to Østre Vealøs and learn how to take the strain off your joints while walking in terrain, learn simple methods to release stress, build strength and stability.',
  },
  { event: 'rewild-course', date: '2026-11-13', time: '10:00', place: 'Larvik' },
  { event: 'rewild-course', date: '2026-11-27', time: '10:00', place: 'Sandefjord' },
  {
    event: 'rewild-immersion', date: '2026-11-15', time: '10:00', place: 'Porsgrunn', spot: 'Nordkollen',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
  },
].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const day = (s: Session) => new Date(`${s.date}T12:00:00`);

export const tripSlug = (s: Session) =>
  `${s.place}-${day(s).getDate()}-${months[day(s).getMonth()]}`.toLowerCase();

export const tripUrl = (s: Session) => `${events[s.event].href}/${tripSlug(s)}`;

// e.g. "Tuesday 3 November"
export const longDate = (s: Session) =>
  `${weekdays[day(s).getDay()]} ${day(s).getDate()} ${months[day(s).getMonth()]}`;

// e.g. "Evening Reset - Skolapparåsen, Tue 3 Nov" - the trip's option in the signup form
export const signupLabel = (s: Session) =>
  `${events[s.event].name} - ${s.spot ?? s.place}, ${weekdays[day(s).getDay()].slice(0, 3)} ${day(s).getDate()} ${months[day(s).getMonth()].slice(0, 3)}`;

export const tripPaths = (event: EventId) =>
  sessions.filter(s => s.event === event).map(session => ({ params: { trip: tripSlug(session) }, props: { session } }));
