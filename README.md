# Norsk språkgjennomgang av Rewild-nettsiden

Vi går gjennom hele den norske siden, setning for setning, for å gjøre språket naturlig, enkelt og flytende - ikke stakkete eller direkte oversatt fra engelsk.

Startet 23. november 2026 (branch `norsk-og-bedrift`).

## Rekkefølge

1. Forsiden (`src/views/Index.astro`) - ferdig
2. Om meg / bio (`src/data/bio.ts`) - pågår
3. Turer: Evening Reset og Rewild Trip (`src/views/EveningResetTrip.astro`, `src/views/RewildCourseTrip.astro`, `src/data/events.ts`)
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

## Notert til senere

- Kurssidene sier "Turen foregår på engelsk." - sjekk om det fortsatt stemmer nå som siden er norsk først.
