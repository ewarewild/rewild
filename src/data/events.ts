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
  label: string;
  image: ImageMetadata;
  alt: string;
  description: string;
};

export const events: Record<EventId, EventInfo> = {
  'evening-reset': {
    name: 'Evening Reset',
    href: '/evening-reset',
    label: 'Hike & movement',
    image: skolapparn,
    alt: 'Evening Reset - forest hike',
    description: 'Shake off the day and reconnect with your body on a local hike that supports stress release, mental and physical balance and better sleep.',
  },
  'rewild-course': {
    name: 'Rewild Course',
    href: '/rewild-course',
    label: 'Hike & movement',
    image: nordkollen2,
    alt: 'Rewild Course - full-day training',
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
  },
  'rewild-immersion': {
    name: 'Rewild Immersion',
    href: '/rewild-immersion',
    label: 'Hike & movement',
    image: rondane2,
    alt: 'Rewild Immersion - training in nature',
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
  },
};

export type Session = {
  event: EventId;
  date: string; // YYYY-MM-DD
  time: string;
  place: string;
  signup: string; // value of the matching option in the signup form
  meetingPoint?: string; // shown as "To be announced" until set
  intro?: string[]; // paragraphs replacing the event's shared intro on this trip's page
  mapUrl?: string;
};

export const sessions: Session[] = [
  {
    event: 'evening-reset', date: '2026-11-03', time: '17:00', place: 'Porsgrunn', signup: 'Evening Reset Porsgrunn',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release stress and tension, increase energy flow and promote better sleep.",
      "We walk from the parking area at a steady, moderate pace on an easy gravel road towards Lia, then on a much shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
  },
  { event: 'evening-reset', date: '2026-11-10', time: '17:00', place: 'Skien', signup: 'Evening Reset Skien' },
  { event: 'evening-reset', date: '2026-11-17', time: '17:00', place: 'Larvik', signup: 'Evening Reset Larvik' },
  { event: 'evening-reset', date: '2026-11-24', time: '17:00', place: 'Sandefjord', signup: 'Evening Reset Sandefjord' },
  { event: 'rewild-course', date: '2026-11-06', time: '10:00', place: 'Porsgrunn', signup: 'Rewild Course Porsgrunn' },
  { event: 'rewild-course', date: '2026-11-13', time: '10:00', place: 'Larvik', signup: 'Rewild Course Larvik' },
  { event: 'rewild-course', date: '2026-11-27', time: '10:00', place: 'Sandefjord', signup: 'Rewild Course Sandefjord' },
  {
    event: 'rewild-immersion', date: '2026-11-15', time: '10:00', place: 'Nordkollen', signup: 'Rewild Immersion',
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

export const tripPaths = (event: EventId) =>
  sessions.filter(s => s.event === event).map(session => ({ params: { trip: tripSlug(session) }, props: { session } }));
