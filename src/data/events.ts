// Single source for trips. Each session is one card in the calendar and gets its own
// page at /<event>/<place>-<day>-<month>. Past dates are hidden from the calendar.
import type { ImageMetadata } from 'astro';
import skolapparn from '../images/skolapparn.webp';
import nordkollenHero from '../images/nordkollen-hero.webp';
import type { Lang } from '../i18n';

export type EventId = 'evening-reset' | 'rewild-course';

type EventInfo = {
  name: string;
  href: string;
  image: ImageMetadata;
  alt: string;
  description: string;
  hours: number; // length, used for the end time on phone calendar cards
  price: number; // NOK per person, charged through Vipps at sign-up
  no: { alt: string; description: string }; // Norwegian text (the main site); the fields above are English
};

export const events: Record<EventId, EventInfo> = {
  'evening-reset': {
    name: 'Evening Reset',
    href: '/evening-reset',
    image: skolapparn,
    alt: 'Evening Reset - forest hike',
    hours: 2,
    price: 300,
    description: 'Shake off the day and reconnect with your body on an evening hike that supports stress release, increased focus and reduced strain on your joints.',
    no: {
      alt: 'Evening Reset - tur i skogen',
      description: 'Rist av deg dagen og kom i kontakt med kroppen igjen på en kveldstur som hjelper deg å slippe stress, skjerpe fokuset og avlaste leddene.',
    },
  },
  'rewild-course': {
    name: 'Rewild Trip',
    href: '/rewild-trip',
    image: nordkollenHero,
    alt: 'Rewild Trip - full-day training',
    hours: 5,
    price: 600,
    description: 'A day hike to Nordkollen built around injury prevention, functional strength, increasing focus, stress release and building resilience.',
    no: {
      alt: 'Rewild Trip - tur over en hel dag',
      description: 'En dagstur til Nordkollen bygget rundt skadeforebygging, funksjonell styrke, økt fokus, avspenning og motstandskraft.',
    },
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
  duration?: string; // replaces the shared duration text on this trip's page
  hours?: number; // replaces the event's length, for the end time
  price?: number; // NOK, replaces the event's shared price
  meetUp?: string; // course pages only, replaces the Technical info meet-up paragraph (HTML allowed)
  routeInfo?: string; // course pages only, replaces the Technical info elevation/distance paragraph
  // Norwegian versions of the text fields above (the main site). The fields above are the English page.
  no?: { intro?: string[]; description?: string; duration?: string; meetUp?: string; routeInfo?: string };
};

type TextField = 'intro' | 'description' | 'duration' | 'meetUp' | 'routeInfo';
// A trip's own text in the page's language (Norwegian falls back to English if it's missing)
export const text = <K extends TextField>(s: Session, field: K, lang: Lang): Session[K] =>
  (lang === 'no' ? (s.no?.[field] as Session[K]) : undefined) ?? s[field];

export const eventText = (id: EventId, lang: Lang) => {
  const e = events[id];
  return lang === 'no' ? { ...e, ...e.no } : e;
};

export const sessions: Session[] = [
  {
    event: 'evening-reset', date: '2026-11-03', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en lett grusvei mot Lia, og deretter en kortere skogssti opp til Skolapparåsen (313 moh.) - 4 km tur-retur. Det er en vakker og stille topp med flott utsikt.",
      ],
    },
  },
  {
    event: 'evening-reset', date: '2026-11-11', time: '17:00', place: 'Larvik', spot: 'Brunlanes Sportskapellet', difficulty: 'Easy',
    meetingPoint: 'Ingri turparkering', mapUrl: 'https://maps.app.goo.gl/WS46sDBc4eG9Tg757',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on a forest trail towards Brunlanes Sportskapellet (205m), then continue back down gently on a path along the Ulfsbakktjern - a 3.1km round trip. It's a lovely, quiet spot just outside of town.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en skogssti mot Brunlanes Sportskapellet (205 moh.), og fortsetter rolig ned igjen på en sti langs Ulfsbakktjern - 3,1 km tur-retur. Et fint og stille sted like utenfor byen.",
      ],
    },
  },
  {
    event: 'evening-reset', date: '2026-11-12', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en lett grusvei mot Lia, og deretter en kortere skogssti opp til Skolapparåsen (313 moh.) - 4 km tur-retur. Det er en vakker og stille topp med flott utsikt.",
      ],
    },
  },
  {
    event: 'evening-reset', date: '2026-11-24', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen', difficulty: 'Moderate', price: 0, // free for now, to build references
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en lett grusvei mot Lia, og deretter en kortere skogssti opp til Skolapparåsen (313 moh.) - 4 km tur-retur. Det er en vakker og stille topp med flott utsikt.",
      ],
    },
  },
  {
    event: 'evening-reset', date: '2026-11-26', time: '17:00', place: 'Porsgrunn', spot: 'Skolapparåsen', difficulty: 'Moderate', price: 0, // free for now, to build references
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on an easy gravel road towards Lia, then on a shorter forest path up to Skolapparåsen (313m), a 4km round trip. It's a beautiful, quiet mountain with a great view.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en lett grusvei mot Lia, og deretter en kortere skogssti opp til Skolapparåsen (313 moh.) - 4 km tur-retur. Det er en vakker og stille topp med flott utsikt.",
      ],
    },
  },
  {
    event: 'evening-reset', date: '2026-12-03', time: '17:00', place: 'Larvik', spot: 'Brunlanes Sportskapellet', difficulty: 'Easy', price: 0, // free for now, to build references
    meetingPoint: 'Ingri turparkering', mapUrl: 'https://maps.app.goo.gl/WS46sDBc4eG9Tg757',
    intro: [
      "Welcome to an evening hike designed to help you release tension, build strength and joint stability, and promote better sleep.",
      "We walk from the parking area at a moderate to fast pace (ca. 4.5km/h) on a forest trail towards Brunlanes Sportskapellet (205m), then continue back down gently on a path along the Ulfsbakktjern - a 3.1km round trip. It's a lovely, quiet spot just outside of town.",
    ],
    no: {
      intro: [
        "Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.",
        "Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en skogssti mot Brunlanes Sportskapellet (205 moh.), og fortsetter rolig ned igjen på en sti langs Ulfsbakktjern - 3,1 km tur-retur. Et fint og stille sted like utenfor byen.",
      ],
    },
  },
  {
    event: 'rewild-course', date: '2026-11-21', time: '10:00', place: 'Larvik, Porsgrunn, Skien', spot: 'Nordkollen', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    price: 500,
    image: nordkollenHero,
    intro: [
      'Welcome to a day of practical training in nature that gives you tools to minimise the risk of injury and restore physical and mental balance - on the trail and in everyday life.',
      'We hike to <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> and walk from there on a gravel road, then on a forest trail.',
    description: 'A hands-on day to learn how to reduce the strain on your joints in terrain, increase strength and stability while walking, and get more mental and physical benefits from being in nature.',
    no: {
      intro: [
        'Velkommen til en dag med praktisk trening i naturen som gir deg verktøy til å redusere skaderisikoen og gjenvinne fysisk og mental balanse - på stien og i hverdagen.',
        'Vi går opp til <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353 moh.) og kommer oss skikkelig ut i naturen.',
      ],
      meetUp: 'Vi møtes på <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> og går derfra først på grusvei, så på skogssti.',
      description: 'En praktisk dag der du lærer å redusere belastningen på leddene i terrenget, bygge styrke og stabilitet mens du går, og få mer ut av turen - både fysisk og mentalt.',
    },
  },
  {
    event: 'rewild-course', date: '2026-11-08', time: '10:00', place: 'Larvik, Porsgrunn, Skien', spot: 'Nordkollen', difficulty: 'Moderate',
    image: nordkollenHero,
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    price: 0,
    intro: [
      'Welcome to a day of practical training in nature that gives you tools to minimise the risk of injury and restore physical and mental balance - on the trail and in everyday life.',
      'We hike to <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> and walk from there on a gravel road, then on a forest trail.',
    description: 'A hands-on day to learn how to reduce the strain on your joints in terrain, increase strength and stability while walking, and get more mental and physical benefits from being in nature.',
    no: {
      intro: [
        'Velkommen til en dag med praktisk trening i naturen som gir deg verktøy til å redusere skaderisikoen og gjenvinne fysisk og mental balanse - på stien og i hverdagen.',
        'Vi går opp til <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353 moh.) og kommer oss skikkelig ut i naturen.',
      ],
      meetUp: 'Vi møtes på <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> og går derfra først på grusvei, så på skogssti.',
      description: 'En praktisk dag der du lærer å redusere belastningen på leddene i terrenget, bygge styrke og stabilitet mens du går, og få mer ut av turen - både fysisk og mentalt.',
    },
  },
  {
    event: 'rewild-course', date: '2026-11-28', time: '10:00', place: 'Larvik, Porsgrunn, Skien', spot: 'Nordkollen', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Svarteberget og Nordkollen', mapUrl: 'https://www.google.com/maps?q=59.18604216274942,9.803863873385133',
    price: 0, // free for now, to build references
    image: nordkollenHero,
    intro: [
      'Welcome to a day of practical training in nature that gives you tools to minimise the risk of injury and restore physical and mental balance - on the trail and in everyday life.',
      'We hike to <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> and walk from there on a gravel road, then on a forest trail.',
    description: 'A hands-on day to learn how to reduce the strain on your joints in terrain, increase strength and stability while walking, and get more mental and physical benefits from being in nature.',
    no: {
      intro: [
        'Velkommen til en dag med praktisk trening i naturen som gir deg verktøy til å redusere skaderisikoen og gjenvinne fysisk og mental balanse - på stien og i hverdagen.',
        'Vi går opp til <a href="https://www.google.com/maps?q=59.197427717465644,9.8402239222746" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Nordkollen</a> (353 moh.) og kommer oss skikkelig ut i naturen.',
      ],
      meetUp: 'Vi møtes på <a href="https://www.google.com/maps?q=59.18604216274942,9.803863873385133" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Svarteberget og Nordkollen</a> og går derfra først på grusvei, så på skogssti.',
      description: 'En praktisk dag der du lærer å redusere belastningen på leddene i terrenget, bygge styrke og stabilitet mens du går, og få mer ut av turen - både fysisk og mentalt.',
    },
  },
  {
    event: 'rewild-course', date: '2026-11-29', time: '10:00', place: 'Porsgrunn & Skien', spot: 'Østre Vealøs', difficulty: 'Moderate',
    meetingPoint: 'Parkering for Østre Vealøs turområder', mapUrl: 'https://www.google.com/maps?q=59.20275,9.73157',
    price: 0, // free for now, to build references
    image: nordkollenHero,
    intro: [
      'Welcome to a day of practical training in nature that gives you tools to minimise the risk of injury and restore physical and mental balance - on the trail and in everyday life.',
      'We hike to <a href="https://ut.no/turforslag/113681/topptur-til-stre-veals" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Østre Vealøs</a> (445.5m) to immerse ourselves in wild nature.',
    ],
    meetUp: 'We meet up at <a href="https://www.google.com/maps?q=59.20275,9.73157" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Østre Vealøs turområder</a> and walk from there on a well-marked trail, mostly through forest.',
    routeInfo: 'The total distance both ways is 7.6km, a moderately demanding trail.',
    description: 'A hands-on day to learn how to reduce the strain on your joints in terrain, increase strength and stability while walking, and get more mental and physical benefits from being in nature.',
    no: {
      intro: [
        'Velkommen til en dag med praktisk trening i naturen som gir deg verktøy til å redusere skaderisikoen og gjenvinne fysisk og mental balanse - på stien og i hverdagen.',
        'Vi går opp til <a href="https://ut.no/turforslag/113681/topptur-til-stre-veals" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Østre Vealøs</a> (445,5 moh.) og kommer oss skikkelig ut i naturen.',
      ],
      meetUp: 'Vi møtes på <a href="https://www.google.com/maps?q=59.20275,9.73157" target="_blank" rel="noopener" class="font-semibold underline hover:text-sage transition-colors duration-200">Parkering for Østre Vealøs turområder</a> og går derfra på en godt merket sti, for det meste gjennom skog.',
      routeInfo: 'Turen er 7,6 km tur-retur, på en middels krevende sti.',
      description: 'En praktisk dag der du lærer å redusere belastningen på leddene i terrenget, bygge styrke og stabilitet mens du går, og få mer ut av turen - både fysisk og mentalt.',
    },
  },
].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdaysNo = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
export const monthsNo = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];

const day = (s: Session) => new Date(`${s.date}T12:00:00`);
// Uses only the first town, so "Porsgrunn & Skien" keeps the /porsgrunn-... link.
export const tripSlug = (s: Session) =>
  `${s.place.split(/,| & /)[0]}-${day(s).getDate()}-${months[day(s).getMonth()]}`.toLowerCase();

// Meet up a few minutes before the start time (Evening Reset 17:00 -> 16:55, Rewild Trip 10:00 -> 09:50).
// Only shown on trip pages, not event cards.
export const meetUpTime = (s: Session, minutesBefore = 5) => {
  const [h, m] = s.time.split(':').map(Number);
  const t = h * 60 + m - minutesBefore;
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

// Same slug in both languages; English pages sit under /en
export const tripUrl = (s: Session, lang: Lang = 'no') => `${lang === 'en' ? '/en' : ''}${events[s.event].href}/${tripSlug(s)}`;

// e.g. "Tuesday 3 November" (English, also used in booking emails) / "tirsdag 3. november"
export const longDate = (s: Session, lang: Lang = 'en') =>
  lang === 'no'
    ? `${weekdaysNo[day(s).getDay()]} ${day(s).getDate()}. ${monthsNo[day(s).getMonth()]}`
    : `${weekdays[day(s).getDay()]} ${day(s).getDate()} ${months[day(s).getMonth()]}`;

// e.g. "Evening Reset - Skolapparåsen, Tue 3 Nov" - the trip's option value in the signup form.
// Always English: the Worker looks trips up by this label in /trips.json.
export const signupLabel = (s: Session) =>
  `${events[s.event].name} - ${s.spot ?? s.place}, ${weekdays[day(s).getDay()].slice(0, 3)} ${day(s).getDate()} ${months[day(s).getMonth()].slice(0, 3)}`;

// What the signup form shows for the trip, e.g. "Evening Reset - Skolapparåsen, tir. 3. nov."
export const signupText = (s: Session, lang: Lang) =>
  lang === 'no'
    ? `${events[s.event].name} - ${s.spot ?? s.place}, ${weekdaysNo[day(s).getDay()].slice(0, 3)}. ${day(s).getDate()}. ${monthsNo[day(s).getMonth()].slice(0, 3)}.`
    : signupLabel(s);

const difficultiesNo: Record<string, string> = { Easy: 'Lett', Moderate: 'Middels', Hard: 'Krevende' };
export const difficultyText = (s: Session, lang: Lang) =>
  s.difficulty && lang === 'no' ? difficultiesNo[s.difficulty] ?? s.difficulty : s.difficulty;

// "200 NOK" / "200 kr", or Free / Gratis
export const priceText = (s: Session, lang: Lang) =>
  price(s) ? `${price(s)} ${lang === 'no' ? 'kr' : 'NOK'}` : lang === 'no' ? 'Gratis' : 'Free';

// NOK per person for this trip
export const price = (s: Session) => s.price ?? events[s.event].price;

// A free trip of an event that's normally paid: shown as "~~300 NOK~~ Free"
export const freeOffer = (s: Session) => price(s) === 0 && events[s.event].price > 0;
export const regularPriceText = (s: Session, lang: Lang) => `${events[s.event].price} ${lang === 'no' ? 'kr' : 'NOK'}`;

// e.g. "Up to 5 hours" - course pages and booking emails (English by default)
export const courseDuration = (s: Session, lang: Lang = 'en') =>
  text(s, 'duration', lang) ?? (lang === 'no' ? 'Opptil 5 timer' : 'Up to 5 hours');

// e.g. "17:00 - 18:30"
export const timeRange = (s: Session) => {
  const [h, m] = s.time.split(':').map(Number);
  const end = h * 60 + m + (s.hours ?? events[s.event].hours) * 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${s.time} - ${pad(Math.floor(end / 60) % 24)}:${pad(end % 60)}`;
};

export const tripPaths = (event: EventId) =>
  sessions.filter(s => s.event === event).map(session => ({ params: { trip: tripSlug(session) }, props: { session } }));
