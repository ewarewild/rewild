// Booking confirmation emails, one per event. The trip details come from /trips.json;
// the wording and "What to bring" lists below are written for each event.

export type Trip = {
  event: 'evening-reset' | 'rewild-course';
  title: string; // e.g. "Evening Reset - Skolapparåsen"
  date: string;
  longDate: string; // e.g. "Tuesday 3 November"
  time: string;
  timeRange: string; // e.g. "17:00 - 18:30"
  duration?: string; // courses only, e.g. "Up to 5 hours"
  meetingPoint?: string;
  mapUrl?: string;
  nok: number;
};

const LAYERS = "Clothes for the weather. It's recommended to dress in layers - lighter for the walk and something warm for when we stop, including a hat and gloves. We'll warm up quickly while walking, but it can be quite cold on the mountain.";

const templates = {
  'evening-reset': {
    confirmed: 'Thank you for booking - your place is confirmed.',
    excited: "I'm excited for you to join us on this trip!",
    when: (t: Trip) => `${t.longDate}, ${t.timeRange}`,
    bring: [
      'Headlamp with full batteries',
      LAYERS,
      'Walking shoes with a good grip',
      'Water',
      'Hiking poles (optional)',
      'Snack (optional)',
    ],
    cancelled: 'hike',
  },
  'rewild-course': {
    confirmed: 'Thank you for booking - your place on the Rewild Course is confirmed.',
    excited: "I'm excited for you to join us on this course!",
    when: (t: Trip) => `${t.longDate}, from ${t.time}, ${(t.duration ?? 'Up to 5 hours').toLowerCase()}`,
    bring: [
      LAYERS,
      'Comfortable shoes with a grip',
      'At least 1 litre of water',
      'A packed lunch',
      'Small notepad and pen',
      'Seating mat',
      'Hot tea (recommended)',
      'Walking poles (optional)',
    ],
    cancelled: 'course',
  },
};

const escape = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

// e.g. "Tue 3 Nov" from "Tuesday 3 November"
const shortDate = (longDate: string) => longDate.split(' ').map(w => (/^\d+$/.test(w) ? w : w.slice(0, 3))).join(' ');

export function confirmationEmail(trip: Trip, name: string) {
  const tpl = templates[trip.event];
  const firstName = name.trim().split(/\s+/)[0] || 'there';
  const eventName = trip.title.split(' - ')[0];
  const subject = `You're booked - ${eventName}, ${shortDate(trip.longDate)}`;
  const meeting = trip.meetingPoint ?? 'To be announced';
  const closing = [
    `We hike in most weather. If conditions are hazardous, the ${tpl.cancelled} will be cancelled. You'll receive a full refund or the option to rebook.`,
    "You'll hear from me again closer to the date. If you have any questions, just reply to this email.",
  ];

  const text = [
    `Hi ${firstName},`,
    tpl.confirmed,
    [trip.title, tpl.when(trip), `Meeting point: ${meeting}${trip.mapUrl ? ` (${trip.mapUrl})` : ''}`, `Paid: ${trip.nok} NOK via Vipps`].join('\n'),
    tpl.excited,
    ['What to bring:', ...tpl.bring.map(b => `- ${b}`)].join('\n'),
    ...closing,
    'See you on the trail! :)\nEwa',
  ].join('\n\n');

  const p = (inner: string) => `<p style="margin:0 0 16px">${inner}</p>`;
  const meetingHtml = trip.mapUrl
    ? `<a href="${escape(trip.mapUrl)}" style="color:#4a6b3a;font-weight:bold;text-decoration:none">${escape(meeting)}</a> (opens in Google Maps)`
    : escape(meeting);
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#2f3a24;max-width:560px">
${p(`Hi ${escape(firstName)},`)}
${p(escape(tpl.confirmed))}
${p(`<strong>${escape(trip.title)}</strong><br>${escape(tpl.when(trip))}<br>Meeting point: ${meetingHtml}<br>Paid: ${trip.nok} NOK via Vipps`)}
${p(escape(tpl.excited))}
<p style="margin:0 0 8px"><strong>What to bring:</strong></p>
<ul style="margin:0 0 16px;padding-left:20px">${tpl.bring.map(b => `<li>${escape(b)}</li>`).join('')}</ul>
${closing.map(c => p(escape(c))).join('\n')}
${p('See you on the trail! :)<br>Ewa')}
</div>`;

  return { subject, text, html };
}
