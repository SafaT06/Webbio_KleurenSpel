# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Inleiding
We zijn benieuwd hoe jij een interactieve, gebruiksvriendelijke applicatie bouwt. De nadruk ligt op gebruikservaring en code kwaliteit, niet op perfectie.

Deze opdracht bestaat uit het bouwen van een kleurherkenningsspel met twee verschillende speelmodi. Je mag zelf kiezen welke modi je implementeert

Projectbeschrijving
Bouw een interactief kleurherkenningsspel in React/TypeScript (of ander modern JavaScript framework). De applicatie moet gebruikers twee verschillende spelmanier aanbieden:

Modus 1: Kleurherhaling
Het systeem toont een reeks van willekeurige kleuren in volgorde. De gebruiker moet deze exacte volgorde reproduceren door op de knoppen te klikken. Na elke succesvolle ronde wordt een nieuwe kleur aan de reeks toegevoegd, zodat de moeilijkheid stijgt.

Spelflow:

Ronde 1: Systeem toont 1 kleur → Gebruiker herhaalt
Ronde 2: Systeem toont 2 kleuren → Gebruiker herhaalt
Ronde 3: Systeem toont 3 kleuren → Gebruiker herhaalt
En zo voort totdat de gebruiker een fout maakt
Modus 2: Kleur Reactietijd
Het systeem toont een grid van 6-8 kleuren en een willekeurige kleurnaam (tekstueel) bovenaan. De gebruiker moet zo snel mogelijk de juiste kleur in het grid aanraken/klikken. De applicatie meet de reactietijd per kleur.

Spelflow:

Tekst toont: "Rood" voor een x aantal seconden
Gebruiker klikt op rood
Systeem meet de reactietijd, geeft feedback (score bij correct aan klikken en fout bij het verkeerd of te laat aanklikken), en toont de volgende kleur
Na 10 rondes eindigt het spel
Vereisten (Must-have)
Beide Speelmodi

Duidelijke spelregels/uitleg voordat het spel begint
Score bijhouden tijdens het spel (aantal fouten, aantal succesvolle rondes, etc.)
Eindscore/samenvatting weergeven aan het einde van elke speelsessie
Mogelijkheid om het spel opnieuw te starten
Visueel aantrekkelijke, intuïtieve UI
Kleurherhaling:

Weergave van kleuren als klikbare knoppen
Visuele/auditieve feedback bij correct/incorrect antwoord
Progressieve moeilijkheid (steeds meer kleuren per ronde)
Duidelijke indicatie van huidige ronde/score
Kleur Reactietijd:

Grid met kleuren
Tekstuele weergave van de te kiezen kleur bovenaan
Reactietijd meten en weergeven
Duidelijke feedback bij correct/incorrect antwoord
10 rondes per speelsessie
Nice-to-have (Bonuspunten)
Responsive Design: Werkt goed op desktop, tablet en mobiel
Moeilijkheidsniveaus: Licht, Normaal, Moeilijk (bijv. sneller tempo, meer kleuren, subtielere kleurverschillen)
Highscore Opslaan: Gebruik localStorage om highscores bij te houden en weer te geven
Geluiden: Optionele geluidsfeedback bij correcte/incorrecte antwoorden
Animaties: Vloeiende, subtiele animaties voor betere UX
Statistieken: Gemiddelde reactietijd, best gesture, etc.
Dark Mode: Optionele donkere modus
Technische Vereisten
Taal: JavaScript met voorkeur voor TypeScript
Framework: Voorkeur voor React, maar andere moderne frameworks (Vue, Svelte) zijn welkom
Styling: Gebruik CSS, SCSS, Tailwind, CSS-in-JS of wat je prefereert
Tooling: Create React App, Vite, Next.js of vergelijkbaar
Browser-compatibiliteit: Moderne browsers (Chrome, Firefox, Safari, Edge)
Design kenmerken
Net als in de praktijk hebben wij vaak te maken met een styleguide met daarin design richtlijnen.
Zorg ervoor dat de onderdelen uit de styleguide terug komen in je design
Je bent vrij om “kleine” aanpassingen door te voeren als hier een goede reden voor is. Geef daarom aan als je afwijkt.
De basis van je design is gebaseerd op wit en zwart (Carbon). Dit omdat het een kleurrijke applicatie gaat worden en je een sterke neutrale basis wilt hebben.
Je mag andere iconen toevoegen mocht dit nodig zijn.
Zorg ervoor dat het logo ook terug komt in je ontwerp, je mag zelf een leuke naam bedenken!
Beoordeling & Inlevering
We letten op:

Gebruiksvriendelijkheid: Is het spel intuïtief en aangenaam te spelen?
Code Kwaliteit: Is de code leesbaar, goed gestructureerd en onderhoudbaar?
React/TypeScript Kennis: Hoe gebruik je React hooks, state management, TypeScript types?
Design & UI/UX: Ziet het er professioneel uit? Werkt het goed op alle apparaten?
Prioriteitenstelling: Welke features heb je eerst gebouwd? Wat heb je weggelaten en waarom?
Inlevering:
GitHub Repository met:
Clean, duidelijke commit history
README.md met installatie- en opstartinstructies
Werkende applicatie (lokaal draaiend of deployed)
Mondeling Toelichting (15-20 minuten):
Uitleg over je aanpak en architectuur
Welke keuzes heb je gemaakt en waarom?
Waar lag de prioriteit?
Wat zou je anders willen doen of nog verbeteren met meer tijd?
Tijdbudget: 2-4 uur
Dit is een indicatie. Het hoeft niet volmaakt te zijn. We zijn meer geïnteresseerd in:

Je werkwijze en keuzes
Hoe je probleem oplost
Wat je prioriteert
Dan in een 100% afgerond product.

Samenvatting
Maak binnen 4 uur één of beide speelmodi van het kleurherkenningsspel met JavaScript/TypeScript en React (of ander framework naar keuze).

De opdracht ziet er fors uit, maar dat is opzet. Kies wat je oppakt, werk aan wat je goed ligt, en zorg dat wat je inlevert solid is. Denk goed na over wat je prioriteert en hoe je het zou aanpakken met meer tijd.

Praktische tips:

Start met één speelmodus en zorg dat deze basis goed werkt
Focus eerst op core gameplay (het spel speelbaar maken), styling en extra's komen erna
Commit regelmatig naar Git — je werkproces zegt meer dan het eindresultaat
Test even op mobiel zodat je weet hoe het voelt
Niet alles hoeft af en niet alles hoeft perfect te zijn