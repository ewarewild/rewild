# Norsk språkgjennomgang av Rewild-nettsiden

Vi går gjennom hele den norske siden, setning for setning, for å gjøre språket naturlig, enkelt og flytende - ikke stakkete eller direkte oversatt fra engelsk.

Startet 23. november 2026 (branch `norsk-og-bedrift`).

## Rekkefølge

1. Forsiden (`src/views/Index.astro`) - ferdig
2. Om meg / bio (`src/data/bio.ts`) - ferdig
3. Turer (ferdig, med noen punkter på vent): Evening Reset og Rewild Trip (`src/views/EveningResetTrip.astro`, `src/views/RewildCourseTrip.astro`, `src/data/events.ts`)
4. Historien (`src/views/TheStory.astro`) - pågår
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
- Punkt 2 vurdert på nytt (mulig krasj med bedriftssiden om sitting og vondt i ryggen). Ewa valgte å ikke endre.
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
- Punkt 4 før: Deg som sliter med holdningsplager etter mye stillesitting
- Punkt 4 nå: Deg som sitter mye på jobb og vil gi kroppen mer variasjon
- Nytt punkt 5: Deg som allerede trener, men vil lære å bruke kroppen smartere i terrenget
- Hvorfor: "Holdningsplager" krasjet med bedriftssiden (holdningskorrigering har svak støtte i forskningen; ensidig belastning er problemet). "Mer variasjon" er bedriftssidens eget ord. "Få kroppen i gang igjen" ble forkastet fordi det antydet inaktivitet. Punkt 5 lagt til så lista også treffer folk som allerede trener, og viser at man lærer noe. Ulempe: folk med plager nevnes ikke direkte lenger.

**Praktisk info**
- Overskrift og erfaring uendret ("Du trenger ingen erfaring, men du bør klare å holde et raskere tempo på vei opp." - "raskere" = ganske raskt, naturlig norsk).
- "Turen foregår på engelsk." - uendret. Bekreftet av Ewa: turene går på engelsk (gjelder også Rewild Trip).
- "Ta gjerne kontakt hvis du har spørsmål." - uendret.

**Ta med-lista** - uendret.

**Vær**
- Før: Vi går i de fleste værforhold, men blir forholdene farlige, avlyses turen. Du får da pengene tilbake eller kan booke en ny tur.
- Nå: Vi går i nesten all slags vær, men blir forholdene farlige, avlyses turen. Du får da pengene tilbake eller kan melde deg på en annen tur.
- Hvorfor: Fjernet "værforhold ... forholdene". "Forholdene" beholdt - dekker is, glatte stier og flom, ikke bare været. "Booke" -> "melde deg på", likt med knappen. Rewild Trip har nesten lik tekst - bruk samme der.

Resten av Evening Reset-siden (skader, hund, infoboksen) uendret. All felles tekst gjelder både Skolapparåsen og Brunlanes Sportskapellet. Evening Reset-siden er ferdig.

### Rewild Trip-siden (`src/views/RewildCourseTrip.astro`)

**Teksten under tittelen**
- Før: Gå i naturen, lær ferdigheter for livet.
- Nå: Ferdigheter for livet, lært i naturen.
- Hvorfor: To ordrer på rad ga belærende tone. "Ferdigheter for livet" var godt og fikk stå først.

**Introtekst, første setning** (felles for alle Rewild Trip-turene, i `src/data/events.ts`)
- Før: Velkommen til en dag med praktisk trening i naturen som gir deg verktøy til å redusere skaderisikoen og gjenvinne fysisk og mental balanse - på stien og i hverdagen.
- Nå: Velkommen til en dag der du får verktøy til å forebygge skader og gjenvinne fysisk og mental balanse - på stien og i hverdagen.
- Hvorfor: "Naturen som gir deg" pekte grammatisk på naturen. "Praktisk trening" gjentok kalenderkortet, og "en praktisk dag" alene høres ut som "lettvint dag". "Forebygge skader" er aktivt i stedet for problemordet "redusere skaderisikoen". Det praktiske vises av "verktøy" og resten av siden.

**Introtekst, andre setning** (egen for hver tur) - uendret ("Vi går opp til Nordkollen (353 moh.) og kommer oss skikkelig ut i naturen." / Østre Vealøs (445,5 moh.)). Vurderte å runde av til 446 moh., Ewa valgte å beholde.

**Veksling og hvile**
- Før: Vi veksler mellom å utfordre kroppen fysisk og roligere øvelser, og tar oss tid til å hvile og senke skuldrene.
- Nå: Vi veksler mellom å utfordre kroppen og å gjøre roligere øvelser. Vi tar oss god tid til å hvile og senke skuldrene.
- Hvorfor: "Veksler mellom å utfordre ... og øvelser" var ulike ledd. Feil komma før "og tar". Delt i to. "Innimellom" og "også" forkastet - hvilen skal stå like sterkt som treningen. "God tid" gjør hvilen bevisst.

**"Du lærer:"-lista**
- Overskrift og punkt 1 uendret (samme som Evening Reset punkt 1).
- Punkt 2 før: Øvelser underveis som styrker muskler og ledd og motvirker følgene av mye stillesitting, som smerter i korsryggen
- Punkt 2 nå: Øvelser underveis som styrker kroppen og motvirker følgene av mye stillesitting, som vondt i korsryggen
- Hvorfor: Samme løsning som Evening Reset punkt 2 - fjerner dobbel "og", "vondt" i stedet for "smerter".
- Punkt 3 før: Å trene koordinasjon og kroppsbevissthet (propriosepsjon) for bedre balanse, mindre skaderisiko og lettere bevegelse i terrenget
- Punkt 3 nå: Å trene koordinasjon og kroppsbevissthet (propriosepsjon), så du får bedre balanse og beveger deg tryggere i terrenget
- Hvorfor: Liste på tre gjort om til to aktive ledd ("får", "beveger deg"). "Mindre skaderisiko" (problemord) -> "tryggere". "(Propriosepsjon)" beholdt for faglig tyngde.
- Punkt 4 før: Gangteknikker som reduserer belastningen på leddene i terrenget - i oppoverbakke, nedoverbakke og på flat mark
- Punkt 4 nå: Gangteknikker som reduserer belastningen på leddene - i oppoverbakke, nedoverbakke og på flat mark
- Hvorfor: Samme som Evening Reset punkt 3 - "i terrenget" tatt ut (dobbel "i", og punkt 3 slutter med "i terrenget").

**Lunsj**
- Før: På toppen tar vi oss tid til å hvile, prate og nyte matpakken og en kopp te.
- Nå: På toppen slår vi oss ned, prater og nyter matpakken og en kopp te.
- Hvorfor: "Tar oss tid til å hvile" gjentok setningen om veksling og hvile rett over. "Slår oss ned" viser hvilen uten å gjenta ordet.

**"Hvem passer det for?"-lista**
- Overskrift og punkt 1 uendret ("Deg som vil trene smartere på tur, ikke bare gå").
- Punkt 2 før: Deg som liker å være ute og vil skåne leddene i terrenget
- Punkt 2 nå: Deg som liker å være ute og vil ta vare på leddene
- Hvorfor: "Ta vare på" (omsorg over tid) som på forsiden, ikke "skåne". "I terrenget" tatt ut - å ta vare på leddene gjelder generelt.
- Punkt 3 før: Deg som vil senke stressnivået og få mer energi i hverdagen
- Punkt 3 nå: Deg som vil stresse ned og få mer energi i hverdagen
- Hvorfor: "Senke stressnivået" var klinisk. "Stresse ned" er det folk sier.

**Praktisk info**
- Overskrift og oppmøtetekstene (Nordkollen og Østre Vealøs) uendret.
- Lengde: "Turen er 9 km tur-retur ..." / "Turen er 7,6 km tur-retur ..." -> "Ruten er ...". Unngår "tur ... tur-retur ... turen" på to linjer; ruten = distansen, turen = hele dagen.
- Tid ("Med øvelser og pauser tar turen opptil 5 timer.") uendret.
- Erfaring før: Du trenger ingen erfaring, men du bør være komfortabel med å gå 9 km i terrenget med øvelser underveis, også i brattere oppoverbakker.
- Erfaring nå: Du trenger ingen erfaring, men du bør klare å gå opptil 9 km i terrenget, med øvelser underveis - også i oppoverbakke.
- Hvorfor: "9 km" var feil for Østre Vealøs (7,6 km) - teksten er felles, så "opptil 9 km". "Komfortabel med" var oversatt -> "klare å" (likt med Evening Reset). "Brattere" tatt ut - øvelsene er i oppoverbakke, men det er ikke så ille.

**Ta med-lista**
- "Klær etter været, og i tillegg varme, vindtette lag, lue og votter til toppen" delt i to: "Klær etter været" + "Ekstra varme og vindtette lag, lue og votter til toppen" ("og i tillegg" dobbelt, komma mellom adjektiver er engelsk stil).
- "Gode sko med godt grep" -> "Tursko med godt grep" (gode/godt, likt med Evening Reset).
- Resten uendret.

**Vær**
- Før: Vi går i de fleste værforhold. Blir forholdene farlige, avlyses likevel turen. Du får da pengene tilbake eller kan booke en ny tur.
- Nå: Vi går i nesten all slags vær, men blir forholdene farlige, avlyses turen. Du får da pengene tilbake eller kan melde deg på en annen tur.
- Hvorfor: Samme som Evening Reset. "Likevel" tatt ut.

Skader, hund og infoboksen uendret (identisk med Evening Reset). Rewild Trip-siden er ferdig, bortsett fra punktene under "Notert til senere".

### Historien (`src/views/TheStory.astro`)

**Google-beskrivelse:** "Historien om Rewild, og tankene bak." -> "Historien om Rewild og tankene bak." (unødvendig komma). Overskriften "Historien om Rewild" uendret.

**Avsnitt 1**
- Før: Mens jeg bygde opp livet mitt igjen etter en krise, havnet jeg et sted jeg ikke lenger hadde kapasitet til å være. Påkjenningene var så store at jeg ble skadet og utbrent.
- Nå: Mens jeg bygde opp livet mitt igjen etter en krise, havnet jeg i en situasjon jeg ikke lenger klarte å stå i. Påkjenningene var så store at jeg ble skadet og utbrent.
- Hvorfor: "Hadde kapasitet til" var oversatt fra engelsk. "Klarte å stå i" er et vanlig norsk uttrykk for å tåle noe tungt.

**Avsnitt 2**
- Før: Brystet verket hele tiden av opphopet stress og følelser. Jeg hadde en skade i kneet og i skulderen som ikke ville gro. Jeg følte meg deprimert, fanget og isolert, og så ingen åpenbar vei ut av situasjonen jeg var i.
- Nå: Brystet verket hele tiden av oppdemmet stress og følelser. Jeg hadde skader i kneet og skulderen som ikke ville gro. Jeg følte meg deprimert, fanget og isolert og så ingen vei ut.
- Hvorfor: "Oppdemmet" (Ewas valg) er et sterkere bilde. "En skade" på to steder -> "skader". "Ingen åpenbar vei ut av situasjonen jeg var i" var oversatt og gjentok "situasjon" fra avsnitt 1 - "ingen vei ut" er kort og tungt. Feil komma fjernet.

**Avsnitt 3 og 4** - uendret (korte, rytmiske, fungerer).

**Avsnitt 5**
- Før: Jeg tok imot elementene som en vei inn i nærværet. ...
- Nå: Jeg tok imot elementene som en vei inn i nuet. ...
- Hvorfor: "Inn i nærværet" (bestemt form) var oversatt fra "into presence" og uvanlig norsk. "Nuet" er det vanlige uttrykket.

**Avsnitt 6-9** - uendret (rytmiske, sanselige, fungerer).

**Avsnitt 10**
- Før: Plassen stresset hadde tatt, ble ryddet. Og så fylt opp igjen med rent liv. Igjen og igjen, og igjen...
- Nå: Plassen stresset hadde tatt, ble ryddet. Og så fylt med rent liv. Igjen og igjen, og igjen...
- Hvorfor: "Igjen" sto fire ganger. Den bevisste gjentakelsen til slutt får nå fullt trykk.

**Avsnitt 11**
- Før: ... forsvant, og igjen satt jeg med glede, ro og en dyp takknemlighet over å være i live. ...
- Nå: ... forsvant, og tilbake satt jeg med glede, ro og en dyp takknemlighet for å være i live. ...
- Hvorfor: "Igjen satt jeg med" kunne leses som "nok en gang" etter "Igjen og igjen" i avsnitt 10. "Takknemlighet for", ikke "over". "Avhengighetsskapende" beholdt (vurderte "hekta").

## Notert til senere

- Rewild Trip praktisk info: "Turen foregår på engelsk", spørsmålslinjen og "Du får all praktisk informasjon når du har booket plassen din." ble hoppet over. Den siste har "booket" (vurder "meldt deg på", likt med knappen).
- Rewild Trip "Hvem passer det for?" punkt 4: "Alle som har vondt i ledd eller rygg etter mange timer med sitting" - venter. Bryter "Deg som"-mønsteret, og påstanden om sitting -> vondt krasjer med bedriftssiden. Forslag: a) "Deg som har vondt i ledd eller rygg etter mange timer med sitting", b) "Deg som sitter mye og kjenner det i ledd og rygg" (anbefalt), c) "Deg som sitter mye på jobb og vil gi kroppen mer variasjon".
- Engelsk Evening Reset-tekst: "step into trees" -> "into the trees"; "tension releasing, something opening" leses ujevnt. Tas i en egen engelsk gjennomgang.
- Google-beskrivelse for Evening Reset sier "Nå i Skien, Porsgrunn, Larvik og Sandefjord" - kalenderen har bare Porsgrunn og Larvik nå. Sjekk med Ewa.

