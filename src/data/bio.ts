// Ewa's bio, used by both the homepage #about section (first two paragraphs shown, the rest
// behind "More") and the About page (all of it). Paragraphs may contain HTML links.
import type { Lang } from '../i18n';

const link = (href: string, label: string) =>
  `<a href="${href}" class="font-semibold underline decoration-forest/40 hover:decoration-forest transition-colors duration-200">${label}</a>`;

export const bio = (lang: Lang) =>
  lang === 'no'
    ? {
        heading: 'Hei! Jeg er Ewa',
        paragraphs: [
          'Jeg står bak Rewild og er guiden din på turene.',
          'Jeg vokste opp i fjellene i Sør-Polen, med foreldre som jobbet med idrett. Bevegelse var livet mitt helt fra jeg var liten.',
          'Jeg studerte kroppsøving i Storbritannia, der jeg ble kjent med yoga, pilates og biomekanikken bak skadeforebygging.',
          'Jeg er utdannet hathayogalærer i London og har avansert sertifisering i traumebevisst undervisning fra Nordic Maha Yoga i Oslo. Jeg har også studert til naturyogaguide i vill natur hos Marian Papp, yogaterapeut med doktorgrad fra Karolinska Institutet.',
          'Historien om Rewild begynner egentlig på 80-tallet, da naturen var en del av hverdagen - trening, sanking og frihet til å leke vilt.',
          'Noen tiår senere møtte jeg utfordringer som førte til fysisk og psykisk utbrenthet.',
          'Jeg begynte å gå opp på toppene i nærheten, i all slags vær, og kombinerte fysisk trening med sansende kontakt med naturen.',
          `Effekten kom med en gang, og det forandret livet mitt fullstendig. Du kan lese mer om denne prosessen ${link('/the-story', 'her')}.`,
          'I undervisningen min legger jeg vekt på trygg, bevisst bevegelse i terrenget. Jeg bruker pusten, sansene og kontakten med naturen, og øvelser inspirert av yoga, pilates, qigong og funksjonell styrketrening, for å koble sammen kropp og sinn igjen.',
          'Jeg tilbringer mye tid i naturen - sover ute, trener, lærer, går utenfor stiene og bare er. Det gir meg balansen tilbake og fyller meg med energi og inspirasjon.',
        ],
      }
    : {
        heading: "Hey! I'm Ewa",
        paragraphs: [
          'I teach nature-based movement at Rewild.',
          'Growing up in the mountains of southern Poland, with parents professionally in sports, I trained a variety of disciplines from a very young age.',
          'I studied physical education in the UK, where I was introduced to yoga, Pilates, and the biomechanics of injury prevention.',
          'I qualified as a Hatha Yoga teacher in London and hold an Advanced Trauma-Informed Academy certification from Nordic Maha Yoga in Oslo. I also trained as an Outdoor Yoga Guide in Wild Nature with Marian Papp, a yoga therapist with a PhD from Karolinska Institutet.',
          'The actual story of Rewild goes back to the 80s, when being in nature was a part of daily life - training, foraging, and having a lot of freedom to play wild.',
          'Fast forward a few decades, I experienced challenges that led to physical and mental burnout.',
          'I started to hike up local mountains, in all weather, infusing physical practices with sensory nature connection.',
          `The effects of it were immediate, and it totally changed my life. You can read more about this process ${link('/en/the-story', 'here')}.`,
          'In my teaching, I focus on safe, mindful movement in terrain, using breath, sensory connection with nature and practices inspired by yoga, Pilates, qi gong and functional strength training to reconnect body and mind.',
          'I spend a lot of time in nature - sleeping, training, learning, off-trail hiking and simply being - it brings me back to balance, fills with vitality and inspiration.',
        ],
      };
