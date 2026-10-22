// Single source for calendar dates. Each session is one card in the calendar.
// Past dates are hidden automatically in the browser, so old ones can stay here.
import type { ImageMetadata } from 'astro';
import skolapparn from '../images/skolapparn.webp';
import nordkollen2 from '../images/nordkollen2.webp';
import rondane2 from '../images/rondane2.webp';

export type EventId = 'evening-reset' | 'rewild-course' | 'deep-dive';

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
    description: 'A trip that helps you shake off the day and reconnect with your body. Focused on stress release, as well as strength and stability for joint-friendly walking.',
  },
  'rewild-course': {
    name: 'Rewild Course',
    href: '/day-course',
    label: 'Hike & movement',
    image: nordkollen2,
    alt: 'Rewild Course - full-day training',
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
  },
  'deep-dive': {
    name: 'Rewild Immersion',
    href: '/weekend-course',
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
  ...eveningReset('Porsgrunn', [3]),
  ...eveningReset('Skien', [10]),
  ...eveningReset('Larvik', [17]),
  ...eveningReset('Sandefjord', [24]),
  { event: 'rewild-course', date: '2026-11-06', time: '10:00', place: 'Porsgrunn', signup: 'Rewild Course Porsgrunn' },
  { event: 'rewild-course', date: '2026-11-13', time: '10:00', place: 'Larvik', signup: 'Rewild Course Larvik' },
  { event: 'rewild-course', date: '2026-11-27', time: '10:00', place: 'Sandefjord', signup: 'Rewild Course Sandefjord' },
  { event: 'deep-dive', date: '2026-11-15', time: '10:00', place: 'Nordkollen', signup: 'Rewild Immersion' },
].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
