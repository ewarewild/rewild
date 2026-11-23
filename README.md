# Norsk språkgjennomgang av Rewild-nettsiden

Vi går gjennom hele den norske siden, setning for setning, for å gjøre språket naturlig, enkelt og flytende - ikke stakkete eller direkte oversatt fra engelsk.

Startet 23. november 2026 (branch `norsk-og-bedrift`).

## Rekkefølge

1. Forsiden (`src/views/Index.astro`) - ferdig
2. Om meg / bio (`src/data/bio.ts`) - ferdig
3. Turer (pågår): Evening Reset og Rewild Trip (`src/views/EveningResetTrip.astro`, `src/views/RewildCourseTrip.astro`, `src/data/events.ts`)
4. Historien (`src/views/TheStory.astro`)
5. 1:1 (`src/views/OneToOne.astro`)
6. Kontakt (`src/views/Contact.astro`)
7. Bedrift (`src/views/Bedrift.astro`)
8. Påmelding og betaling (`src/views/Signup.astro`, `src/views/Payment.astro`)
9. Vilkår (`src/views/Vilkar.astro`)
10. Meny og bunntekst (`src/components/Nav.astro`, `src/components/Footer.astro`)

## Prinsipper vi har landet på

- **Positivt fremfor problem-ord.** "Tar vare på leddene" i stedet for "mindre slitasje på leddene" - unngå medisinsk/brosjyre-tone.
- **Få frem at man lærer noe.** Turene handler om teknikker man tar med seg, ikke bare en rolig tur. Men unngå belærende "Lær å..." som ordre.
- **Sterke, konkrete ord.** Aktive verb ("løser opp", "trener"), konkrete bilder ("ujevnt underlag"). Unngå generiske treningssenter-formuleringer.
- **Ikke gjenta samme poeng** i undertekst og introtekst - hver tekst har sin jobb.
- **Ikke skriv om det som allerede fungerer.** Juster lett der originalen er god.
- **Unngå lister på tre** og doble "og" som gjør setninger ramsete.
- Bindestrek `-`, ikke tankestrek `—`.

## Endringer

### Forsiden

**Undertekst i toppen** (commit `507d632`)
- Før: Guidede turer og kurs i Telemark og Vestfold - for styrke, stabilitet og mindre slitasje på leddene.
- Nå: Guidede turer og kurs i Telemark og Vestfold - for en sterk og stødig gange som tar vare på leddene.
- Hvorfor: "Mindre slitasje" var problem-orientert og medisinsk. "En sterk og stødig gange" antyder at man lærer en ny måte å gå på, uten å si "lær å".
- Endret igjen: Guidede turer og kurs i Telemark og Vestfold - for styrke og stabilitet i kropp og sinn.
- Hvorfor: "Gange" gjorde stabiliteten smal og bare fysisk. I Rewild betyr stabilitet hele mennesket - fysisk, mentalt og følelsesmessig. "Kropp og sinn" dekker det. Leddene flyttes ned i introteksten.

**Google-beskrivelse** (commit `507d632`) - egen tekst, så søkeordene "styrke" og "stabilitet" beholdes
- Nå: Guidede turer og kurs i Telemark og Vestfold. Bygg styrke og stabilitet i terrenget, og ta vare på leddene.

**Introtekst** (commit `86b76d5`)
- Før: Vi går i stillhet, løser opp spenninger og trener oppmerksomheten underveis. Du lærer å bevege deg på ujevnt underlag med mindre belastning - og kommer hjem med mer luft i hodet.
- Nå: Vi går i stillhet, løser opp spenninger og trener oppmerksomheten underveis. Du lærer gangteknikker som bygger styrke og balanse på ujevnt underlag - og kommer hjem med mer ro i hodet.
- Hvorfor: Første setning var sterk og ble beholdt. "Mindre belastning" gjentok underteksten. "Gangteknikker" viser at man lærer en teknikk (samme ord som på kurssidene). "Mer luft i hodet" var uklart.
- Endret igjen: Vi går i stillhet, løser opp spenninger og trener oppmerksomheten underveis. På ujevnt underlag lærer du gangteknikker som tar vare på leddene - og du kommer hjem med mer ro i hodet.
- Hvorfor: Leddene flyttet hit fra underteksten. "Styrke og balanse" tatt ut - styrke står i underteksten, og stabilitet dekker balanse. "Tar vare på" (omsorg, over tid) valgt fremfor "skåner" (beskytter mot belastning). "På ujevnt underlag" flyttet først, så stedet hører til læringen - å ta vare på leddene gjelder generelt, ikke bare i terrenget.

**Linjen for bedrifter** (over bildet i toppen)
- Før: Arbeider du med HMS eller personal? Se bedriftsopplegg →
- Nå: Jobber du med HMS eller HR? Se tilbud til bedrifter →
- Hvorfor: "Arbeider" og "personal" var stivt og gammeldags. "Tilbud til bedrifter" er enklere enn det lange "bedriftsopplegg". Vurderte å åpne for daglige ledere/teamledere, men valgte å holde målgruppen HMS og HR.

**Nederst i hjørnet av toppbildet**
- Før: Scroll
- Nå: Bla ned
- Hvorfor: Helt norsk. (Skrives "bla", ikke "blad" - blad er et papirark eller løv.)

**Over 1:1-knappen** (nederst i Om meg-delen)
- Før: Vil du ha noe skreddersydd for deg?
- Nå: Vil du ha et opplegg bare for deg?
- Hvorfor: "Noe ... for deg" var vagt og direkte oversatt fra engelsk. "Et opplegg bare for deg" er varmt og konkret.

## Forsiden ferdig

Toppen, introteksten, bedriftslinjen og 1:1-linjen er gjennomgått. Om meg-teksten (bio) tas som neste del.

### Om meg / bio (`src/data/bio.ts`)

Samme tekst brukes på forsiden (avsnitt 1-2 synlige, resten under "Mer →") og på Om meg-siden.

**Avsnitt 1**
- Før: Jeg underviser i naturbasert bevegelse i Rewild.
- Nå: Jeg står bak Rewild og er guiden din på turene.
- Hvorfor: "Underviser i naturbasert bevegelse" hørtes ut som et høyskolefag, og "i Rewild" som en arbeidsplass. "Står bak" viser at Rewild er Ewas eget. "Guide" er ordet resten av siden bruker ("guidede turer", "guiden din i Rewild"). Hva hun underviser i, står allerede i avsnitt 9.

**Avsnitt 2**
- Før: Jeg vokste opp i fjellene i Sør-Polen med foreldre som jobbet med idrett, og trente mange ulike idretter helt fra jeg var liten.
- Nå: Jeg vokste opp i fjellene i Sør-Polen, med foreldre som jobbet med idrett. Bevegelse var livet mitt helt fra jeg var liten.
- Hvorfor: "Trente idretter" var direkte oversatt, og "idrett" sto to ganger. "Bevegelse var livet mitt" (Ewas eget forslag, med "idrett" tatt ut) er personlig og peker mot kjernen i Rewild. Den faglige tyngden (kroppsøving, sertifiseringer) kommer i avsnitt 3-4, under "Mer" på forsiden og synlig på Om meg-siden.

**Avsnitt 3** - uendret
- Jeg studerte kroppsøving i Storbritannia, der jeg ble kjent med yoga, pilates og biomekanikken bak skadeforebygging.
- Hvorfor: Flyter godt. Vurderte å dele den og bytte verb for biomekanikk, men originalen flyter bedre.

**Avsnitt 4** (sertifiseringene)
- Før: Jeg er sertifisert hathayogalærer fra London, har sertifiseringen Advanced Trauma-Informed Academy fra Nordic Maha Yoga i Oslo, og diplom som Outdoor Yoga Guide in Wild Nature hos Marian Papp.
- Nå: Jeg er utdannet hathayogalærer i London og har avansert sertifisering i traumebevisst undervisning fra Nordic Maha Yoga i Oslo. Jeg har også studert til naturyogaguide i vill natur hos Marian Papp, yogaterapeut med doktorgrad fra Karolinska Institutet.
- Hvorfor: Fjernet "sertifisert/sertifiseringen", "fra London" -> "i London", ingen komma før "og" med samme subjekt. Tre ledd som starter med verb (er / har / har) gir jevn rytme. Ikke noe tidsord ("senere") - det stemmer ikke med når utdanningene skjedde.
- "Advanced Trauma-Informed Academy" er beskrevet på norsk ("avansert sertifisering i traumebevisst undervisning") så leserne forstår hva det er - og det viser kompetansen på mental og emosjonell stabilitet. Mellomversjonen "har fullført" ble forkastet fordi den svekket den faglige tyngden.
- "Diplom som Outdoor Yoga Guide in Wild Nature" byttet til "studert yoga i vill natur hos Marian Papp" (Ewas ønske): viser at hun har lært av en lærer, helt norsk, og "vill natur" klinger med Rewild. "Hos", ikke "med" (anglisisme). Det formelle er dekket av "utdannet" og "avansert sertifisering".
- Til slutt delt i to setninger for å få plass til hvem Marian Papp er. Fra marianpapp.se: utdanningen heter "Naturyogaguide/coach i vild/orörd natur" (gir intyg/diplom) -> norsk "naturyogaguide i vill natur". "Studert til" fungerer med tittel (som "studere til lege"). Hun er yogaterapeut med PhD fra Karolinska Institutet (2017, om hathayoga) og beskriver seg med "evidensbaserte yogaprogram" - doktorgraden fra Karolinska viser det evidensbaserte konkret, uten fagord.
- Engelsk versjon oppdatert til samme innhold: "I qualified as a Hatha Yoga teacher in London and hold an Advanced Trauma-Informed Academy certification from Nordic Maha Yoga in Oslo. I also trained as an Outdoor Yoga Guide in Wild Nature with Marian Papp, a yoga therapist with a PhD from Karolinska Institutet." (Offisielle engelske navn beholdt på engelsk.)

**Avsnitt 5**
- Før: Den egentlige historien om Rewild går tilbake til 80-tallet, da naturen var en del av hverdagen - trening, sanking og mye frihet til å leke vilt.
- Nå: Historien om Rewild begynner egentlig på 80-tallet, da naturen var en del av hverdagen - trening, sanking og frihet til å leke vilt.
- Hvorfor: "Den egentlige historien" var oversatt fra "the actual story" og kunne antyde en falsk historie. "Egentlig" inni setningen er muntlig og naturlig. "Begynner" er mer levende enn "går tilbake til". "Mye" tatt ut - "frihet til å leke vilt" står sterkere alene.

**Avsnitt 6**
- Før: Noen tiår senere møtte jeg utfordringer som førte til fysisk og psykisk utbrenthet.
- Nå: Noen tiår senere havnet jeg i en krise og ble utbrent, både fysisk og psykisk.
- Hvorfor: "Møtte utfordringer" var oversatt og et slitt jobbord som holder leseren på avstand. "Havnet i" viser at det skjedde med henne. "Krise" er Ewas eget ord fra Historien-siden. "Ble utbrent" er direkte, ikke klinisk.

**Avsnitt 7**
- Før: Jeg begynte å gå opp på toppene i nærheten, i all slags vær, og kombinerte fysisk trening med sansende kontakt med naturen.
- Nå: Jeg begynte å gå opp på toppene i nærheten, i all slags vær. Jeg trente kroppen og tok inn naturen med alle sansene.
- Hvorfor: "Sansende kontakt" er ikke vanlig norsk, "kombinerte fysisk trening med" var stivt, og det sto "med ... med". "Tok inn naturen med alle sansene" er Ewas eget uttrykk fra Historien-siden.

**Avsnitt 8**
- Før: Effekten kom med en gang, og det forandret livet mitt fullstendig. Du kan lese mer om denne prosessen her.
- Nå: Jeg kjente forskjellen med en gang, og livet mitt forandret seg fullstendig. Du kan lese hele historien her.
- Hvorfor: "Det" pekte feil (effekten = den), "effekten kom" var klinisk, og "denne prosessen" stivt. "Jeg kjente forskjellen" er personlig og kroppslig. "Hele historien" leder naturlig til Historien-siden.

**Avsnitt 9**
- Før: I undervisningen min legger jeg vekt på trygg, bevisst bevegelse i terrenget. Jeg bruker pusten, sansene og kontakten med naturen, og øvelser inspirert av yoga, pilates, qigong og funksjonell styrketrening, for å koble sammen kropp og sinn igjen.
- Nå: I undervisningen min legger jeg vekt på trygg og bevisst bevegelse i terrenget. Jeg bruker pusten, sansene og naturen rundt oss, sammen med øvelser inspirert av yoga, pilates, qigong og funksjonell styrketrening. Slik kobler vi kropp og sinn sammen igjen.
- Hvorfor: Andre setning hadde liste i liste (fire "og", tre komma). Delt opp, poenget fikk egen kort sluttsetning med "vi". "Trygg, bevisst" -> "trygg og bevisst" (komma var engelsk). "I undervisningen min" beholdt for å understreke at Ewa underviser.

**Avsnitt 10**
- Før: Jeg tilbringer mye tid i naturen - sover ute, trener, lærer, går utenfor stiene og bare er. Det gir meg balansen tilbake og fyller meg med energi og inspirasjon.
- Nå: ... går utenfor stien og bare er. ... (resten uendret)
- Hvorfor: "Utenfor stien" i entall er mer naturlig norsk. Resten fungerte godt og ble beholdt.

Bioen er ferdig gjennomgått.

**Google-beskrivelse for Om meg-siden** (`src/views/About.astro`)
- Før: Møt Ewa, guiden din i Rewild - forankret i naturen og i praksis.
- Nå: Møt Ewa, guiden din i Rewild - med bakgrunn i idrett, yoga og et liv i naturen.
- Hvorfor: "Forankret i praksis" var oversatt og abstrakt. Tre konkrete ting som oppsummerer bioen.

### Turer - kalenderkortene på forsiden (`src/data/events.ts`)

**Evening Reset-kortet** (felles tekst for alle Evening Reset-datoene)
- Før: Rist av deg dagen og kom i kontakt med kroppen igjen på en kveldstur som hjelper deg å slippe stress, skjerpe fokuset og avlaste leddene.
- Nå: Rist av deg dagen og kom i kontakt med kroppen igjen på en kveldstur. Vi slipper stresset, skjerper fokuset og tar vare på leddene.
- Hvorfor: Én lang setning delt i to. "Som hjelper deg å" var omstendelig. "Vi" tar leseren med, som på forsiden. "Tar vare på leddene" likt med forsiden (ikke "avlaste"). Vurderte "i nærnaturen" (byråkratisk), "i skogen" og "i mørket" - valgte ingenting, kortet viser allerede sted.

**Rewild Trip-kortet** (alle Rewild Trip-datoene, og Google-beskrivelsen for tursidene)
- Før: En praktisk dag der du lærer å redusere belastningen på leddene i terrenget, bygge styrke og stabilitet mens du går, og få mer ut av turen - både fysisk og mentalt.
- Nå: En hel dag med praktisk trening i terrenget. Du lærer gangteknikker som tar vare på leddene, og øvelser underveis som gir styrke og stabilitet - både fysisk og mentalt.
- Hvorfor: Lang liste etter "lærer å" delt opp. "Redusere belastningen" (problemord) -> "tar vare på". "Få mer ut av turen" var vagt. "En hel dag" viser forskjellen fra Evening Reset. Beholdt "praktisk" og "underveis" (treningen skjer mens man går) fra originalen, og "både fysisk og mentalt" - stabilitet gjelder hele mennesket.

### Evening Reset-siden (`src/views/EveningResetTrip.astro`)

**Teksten under tittelen**
- Før: Med en gang du kommer inn blant trærne, skjer det noe. Tankene stilner. Du senker garden, spenninger slipper taket, noe åpner seg. Du blir mer våken.
- Nå: Når du kommer inn blant trærne, skjer det noe. Tankene stilner. Du senker garden, spenninger slipper taket, noe åpner seg. Du våkner.
- Hvorfor: "Når" (Ewas forslag) er roligere enn "med en gang" og passer tonen - noe som skjer hver gang, uten fart. "Mer" dempet avslutningen. "Du våkner." er kortere og sterkere - bilde på å komme ut av autopiloten. Resten var godt og ble beholdt. Den norske teksten står på egne ben; engelsk ("You feel more awake") er ikke endret.

**Introtekst, første setning** (felles for alle Evening Reset-turene, i `src/data/events.ts` - hver tur har egen intro; reserveteksten i `EveningResetTrip.astro` vises ikke)
- Før: Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet i leddene, og sove bedre.
- Nå: Velkommen til en kveldstur som hjelper deg å løse opp spenninger, bygge styrke og stabilitet og sove bedre.
- Hvorfor: "I leddene" gjorde stabiliteten smal, og kommaet før "og" var unødvendig. "Hjelper deg å" beholdt med vilje - forsiktig med helseløfter (søvn). Leddene står på kalenderkortet og i "Dette gjør vi"-lista. Vurderte en mer direkte versjon med leddene og "for en bedre natts søvn", men den lovet mer og logikken haket.

**Ruten til Skolapparåsen** (alle Skolapparåsen-turene)
- Før: Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en lett grusvei mot Lia, og deretter en kortere skogssti opp til Skolapparåsen (313 moh.) - 4 km tur-retur. Det er en vakker og stille topp med flott utsikt.
- Nå: Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t), først på en lettgått grusvei mot Lia og så på en kortere skogssti opp til Skolapparåsen (313 moh.). Ruten er 4 km tur-retur. Toppen er vakker og stille, med flott utsikt.
- Hvorfor: Manglet "på" før skogssti. "Først ... og så ..." gjør ruten lett å følge. "Lett grusvei" -> "lettgått". Lengden fikk egen setning ("Ruten", ikke "Turen ... tur-retur"). "Kortere" beholdt (= ganske kort).

**Ruten til Brunlanes Sportskapellet** (begge Larvik-turene)
- Før: Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en skogssti mot Brunlanes Sportskapellet (205 moh.), og fortsetter rolig ned igjen på en sti langs Ulfsbakktjern - 3,1 km tur-retur. Et fint og stille sted like utenfor byen.
- Nå: Vi går fra parkeringen i moderat til raskt tempo (ca. 4,5 km/t) på en skogssti opp til Brunlanes Sportskapellet (205 moh.), og fortsetter rolig ned igjen på en sti langs Ulfsbakktjern. Ruten er en rundtur på 3,1 km. Det er et fint og stille sted like utenfor byen.
- Hvorfor: Opp én sti og ned en annen = rundtur, ikke tur-retur. "Mot" -> "opp til" (tydelig mål). Lengden i egen setning og sluttsetning med verb, likt med Skolapparåsen. "Fortsetter rolig ned igjen" beholdt fra originalen.

**"Dette gjør vi:"-lista**
- Overskrift og punkt 1 uendret ("Bruker pusten og sansene til å samle oppmerksomheten i kroppen og løse opp spenninger" - godt som det er).
- Punkt 2 før: Gjør øvelser underveis som styrker muskler og ledd og trener koordinasjonen - for bedre stabilitet i terrenget og for å motvirke følgene av mye stillesitting, som smerter i korsryggen
- Punkt 2 nå: Gjør øvelser underveis som styrker kroppen og trener koordinasjonen - for bedre stabilitet i terrenget og for å motvirke følgene av mye stillesitting, som vondt i korsryggen
- Hvorfor: Bare to rettelser: "muskler og ledd" -> "kroppen" (fjerner dobbel "og"), "smerter" -> "vondt" (hverdagslig, ikke medisinsk). Aktive verb og positiv formulering ("motvirke følgene") beholdt - forkortede versjoner mistet energien eller fikk problemord ("mindre plager"). Leddene dekkes av punkt 3.
- Punkt 3 før: Bruker gangteknikker som reduserer belastningen på leddene i terrenget - i oppoverbakke, nedoverbakke og på flat mark
- Punkt 3 nå: Lærer gangteknikker som reduserer belastningen på leddene - i oppoverbakke, nedoverbakke og på flat mark
- Hvorfor: "Lærer" viser at det er en ferdighet man tar med seg, og lista får tre ulike verb (Bruker, Gjør, Lærer). "I terrenget" tatt ut (dobbel "i", bakkene sier det samme). "Reduserer belastningen" beholdt - i en teknikkliste er det presist og faglig, ikke en salgstekst.

**"Hvem passer det for?"-lista**
- Overskrift og punkt 1 uendret ("Deg som liker å være i naturen og vil koble av etter arbeidsdagen").
- Punkt 2 før: Deg som ikke har tid til å trene i løpet av dagen
- Punkt 2 nå: Deg som ikke rekker å trene i løpet av dagen
- Hvorfor: "Rekker" er mer muntlig norsk og får frem travelheten.
- Punkt 3 før: Deg som vil få mer ut av turene i naturen, både fysisk og mentalt
- Punkt 3 nå: Deg som vil få mer ut av turene dine, både fysisk og mentalt
- Hvorfor: "Turer i naturen" sier det samme to ganger (og punkt 1 har "i naturen"). "Dine" er mer personlig.

## Notert til senere

- Engelsk Evening Reset-tekst: "step into trees" -> "into the trees"; "tension releasing, something opening" leses ujevnt. Tas i en egen engelsk gjennomgang.
- Google-beskrivelse for Evening Reset sier "Nå i Skien, Porsgrunn, Larvik og Sandefjord" - kalenderen har bare Porsgrunn og Larvik nå. Sjekk med Ewa.

- Kurssidene sier "Turen foregår på engelsk." - sjekk om det fortsatt stemmer nå som siden er norsk først.
