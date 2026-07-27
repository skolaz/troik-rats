---
layout: default
title: Troik-Rats av Nils Jivegård
---
# Grundregler
* 2d6 slå under ditt (grundvärde + talents =) målvärde för att lyckas
* Att slå på sitt målvärde är ett lyckat försök, men med en liten konsekvens som hade hänt om du misslyckades
* Om det är en svår utmaning slår du först 2d6, sedan slår du om lägsta siffran. Extra svår gör du samma sak ytterligare en gång till.
* Om det är en lätt utmaning slår du först 2d6, sedan slår du om den högsta siffran. Extra lätt behöver inte finnas.
* När du slår ett par lyckas spelaren med ett fantastiskt bra resultat, även kallad crit.
* Skulle spelaren slå två sexor (6, 6) blir det ett fruktansvärt dåligt resultat, även kallad fummel. Om en fummel händer under en strid eller magisk användning finns det tabeller som berättar vad som händer.
  
# Grundvärde
Alla spelkaraktärer har tre grundvärden. En nybörjare börjar med 3, 4, 5 i grundvärde och placerar de valfritt på varsitt grundvärde.

Grundvärdet kan bli max 8.

* Kropp
    * Din styrka, din hälsa, din uthållighet, din närstridstalang
* Skill
    * Din smidighet, din fingerfärdighet, sikta och skjuta, din orientering, din hantverkstalang
* Minne
    * Din mentala hälsa, din magi, ditt språk, din kunskap

# Talanger
Talanger är det din karaktär besitter som ger henne mer bakgrund och komplement som hjälper dig öka målvärdet.

Talanger har ranker som går från 1 och uppåt. Värdet på ranken är det som adderas till målvärdet.

Målvärdet kan max bli 10.

En nybörjare börjar med totalt 6 talang-ranker spridda valfritt. För att få en talang måste nybörjaren "spendera" och lägga minst ett poäng i en talang rank. Under resans gång får karaktärer nya talanger genom att äventyra.

Slå 2d6 och se vilka talanger du får. Talanger måste inte vara knutna till just dessa **kropp, skill eller minne**. Men ska de ha ett annat grundvärde kan talangen bara användas om situationen kan använda det grundvärdet på ett rimligt sätt.

1. Kropp
    1. Råstyrka
    2. Akrobatik
    3. Skrämma
    4. Strid
    5. Uthållighet
    6. Klättra
2. Kropp
    1. Simma
    2. Bygga
    3. Undvika (eller skill)
    4. Jaga
    5. Rida
    6. Kasta
3. Skill
    1. Smidighet
    2. Stjäla
    3. Skjuta
    4. Hantverk
    5. Smygande
    6. Djurvän
4. Skill
    1. Spåra
    2. Läkemedel
    3. Bluffa
    4. Musik
    5. Mekanik
    6. Matlagning
5. Minne
    1. Bluffa
    2. Dekryptera
    3. Mystik magi
    4. Kunskap
    5. Historia
    6. Kasino
6. Minne
    1. Språk
    2. Koncentration
    3. Värdera
    4. Astrologi
    5. Dryckblandare
    6. Ledarskap

# Magi och cirkel talanger
Magi är kraftfullt men riskerar utövarens minne. Det kräver kreativitet, lite förberedelse och ibland en gnutta tur för att inte slå helt fel. Magin delas upp i sex olika **Cirklar**, där cirkel -5 är den mest kraftfulla och svåra, och cirkel 0 är där nybörjare härjar. Att det går från 0 till -5 speglar att magin kostar så mycket att använda.

Magin använder sig av *ord magi* där effekten och formen antingen är fysisk eller eterisk (tänk magisk). När du sedan har två ord som beskriver kan du slänga in en talang som du har. Detta hjälper dig hitta den sista delen i pusslet om hur magin yttrar sig. Nästa gång kan du välja att slänga ur dig samma tolkning eller en ny. Du kan dock inte pröva svårare cirkel-rank om du inte har en talang-rank som sträcker sig så långt.

> Säg att du har några talanger med Jaga 1 (Kropp), Bluffa 2 (Minne), Hantverk 1 (Skill)
> Och de magiska orden är Lera (effekt fysisk) + Dimma (form magisk).
> Med detta skulle du kunna tolka Jaga med: skapa en tjock brun dimma som bara jag ser igenom.
> Bluffa: skapa en illusion att där finns det vanlig mark, men är egentligen en fälla rakt ner i ett hål
> Hantverk: skapa en lerfigur som tyvärr går lätt sönder

## Cirkel

Trollformelns **cirkel rank subtraherar** ditt **minne**-värde för att **skapa ditt målvärde**. **Efter du har lyckats eller misslyckats skadar Cirkel ranken ditt minne.**
Alltså: Målvärde för trollformel = Grundvärde (oftast minne) + Talang - Cirkel-ranken. Därefter tar grundvärdet minne Cirkel-ranken i skada.

Beroende på vilken Cirkel-rank den kastas i, kan den ge olika styrkor och effekter. 

* **Cirkel 0:** Ytterst lätt magi. Skadan du kan göra är 1. Max 30 sekunder.
* **Cirkel -1:** Manipulerande magi, om än något kort. 1d4 i skada. Max 60 sekunder.
* **Cirkel -2:** Framkallande magi introduceras. Kan göra 1d4+1 i skada. Max 2 minuter.
* **Cirkel -3:** Omgivningspåverkande magi, kallas även AoE (Area of Effect). 1d6 skada. Max 5 min.
* **Cirkel -4:** Medelstark magi och börjar bli okontrollerbar. 1d6+2 skada. Max 60 min.
* **Cirkel -5:** Svår och farlig magi. 1d8+2 skada. Stora områden eller permanent.

### Slumpa fram en trollformel direkt
<button onclick="generateSpell()">Generera Trollformel</button>
<div id="spell-output"></div>

<script src="assets/mazeMagic.js"></script>

## Att kasta en trollformel

Det finns två sätt att hantera magi:

1. **Förberedda formler:** Du kan förbereda upp till **två formler** i förväg. Detta tar 1 timme per formel och kräver ett lyckat slag mot trollformelns målvärde. Om du lyckas har du formeln "redo" och kan kasta den närsom utan att behöva slå tärning igen. **Cirkel rank skadan utsöndras när trollformeln används.** **Fummlar sker direkt.**
2. **Spontan magi:** Om du vill kasta en formel som inte är förberedd, måste du slå vanlig standard utmaning **2d6 under minne + Cirkel** mitt i stridens hetta. Misslyckande åstakommer ingenting, plus lite skada på din minne (eller värre – se nedan).

## Fumla med magi

Magi är en instabil kraft. Reglerna för fumla med magi bör läsas i stegvis ordning

1. **6,6 :** Om du rullar två sexor när du kastar eller förbereder magi, kan du eller någon annan drabbas av en **Mutation**.
2. Nästa steg är att rulla för **Magikontroll**. Detta görs genom att kasta tre sexsidiga tärningar (3d6) och läsa svaret
-    Ett par: inget händer. Magin svalnar.
-    En fummel (6, 6): En **katastrof** inträffar. Använd sista siffran och hitta reaktionen på katastroflistan.
-    Tärningarna visar inget par eller fummel: Sätt ihop siffrorna i obestämd följd och hitta reaktionen på mutationslistan.

# Bli bättre
Varje gång en spelkaraktär misslyckas sätts en bock vid den använda talangen. Vid nästa kraftsamling prövar spelkaraktären att bli bättre på de bockade talangerna. 

Slå 2d6 och slå på målvärdet med talangen eller över för att öka ranken med 1 värde.
Om det är ett par ökar grundvärdet också. Är det en fummel händer inget.

1. Välj en talang med bock. Räkna ut målvärdet: rank + grundvärde.
2. Slå **2d6**.
3. Bara om resultatet är **ÖVER** ditt målvärde i den talangen, höjs ranken med +1. Om målvärdet är 8, räknas inte 8 som lyckat.
* **Lyckat:** Höj din rank med ett poäng.
* **Misslyckat eller fummel (6, 6) (2,78%) :** Inget händer
* **Kritisk framgång (Par) (16,67%):** Höj både din rank och tillhörande grundvärde (**kropp, skill** eller **minne**) med ett poäng.
4. Sudda sedan ut bocken.

> Grundvärde kan max bli 8.

---
# Strid och återhämtning
## Skada
När du vinner ett motståndsslag slår du din vapenskada (t.ex. 1d6 för ett svärd) och subtraherar skadan med motståndarens kraft.

* **Skydd:** Motståndaren (eller spelkaraktären) drar av sitt skyddsvärde från skadan.

  * _Lätt skydd:_ -1 skada.
  * _Medel skydd:_ -2 skada och nackdel när du smyger.
  * _Tungt skydd:_ -3 skada och nackdel när du smyger, klättrar och sänker initiativ tärningen med en hel tärning.

* **-3 till 0 kropp / kraft :** Karaktären faller samman, medvetslös och förblödande. Om ingen stabiliserar dina sår dör hon inom kort (spelledaren avgör hur många minuter du har kvar).

* **-3 till 0 minne / moral:** Psyket brister. Drabbas av total panik, katatoni eller flyr hals över huvud. Karaktären är ospelbar och i händerna på ödet tills du återfått minst upp till 1 **minne**.

> När spelkaraktären når 0 i antingen kropp eller minne kan de få utföra "några sista ord". Vilket är en sista gärning. Kanske användandet av ett annat grundvärde kan rädda sitt skinn?

* **-4 kropp / kraft / minne / moral:** Du dör på fläcken. Ingen återvändo.

## Motståndsslag
När två parter agerar mot varandra görs motståndsslag, även kallad tävling. Båda slår 2d6 samtidigt och ska slå under sitt värde, men högre än sin motståndare. Vinnarens talang avgör utgången. 

> Designers note: ändra så att motståndarens överläge i grundvärdet mot spelaren tvingar på +1, +2, eller +3 på deras tärningsslag. Detta för att skapa en viss balans.

## Initiativ
Den i gruppen som har högst skill möter den bästa i motståndsgruppen i special. Den grupp som vinner motståndsslaget (med valfri talang om det finns för situationen) börjar. För varje runda gör detta.

## Jakt
När någon jagar eller blir jagad blir det flera motståndsslag i följd. Olika grundvärden används beroende på situationen. Den bästa i gruppen slår för hela gruppen. Tänk efter vilken grupp som skulle ha överläge och ge dem +2.Grupperna slår sedan 2d6 samtidigt med motståndsslag och den med sin överläge bonus lägger till det. Den som vinner behåller överläget. Första till 3 vinster kommer antingen undan eller ifatt de jagade.

## Återhämtning
* **Kort vila (8h):** Du återfår hälften av dina förlorade poäng i **kropp** och **minne**.

* **Långvila (48h):** Du återfår alla poäng i **kropp** och **minne** till ditt maxvärde.

---
# Motståndare
Grundvärden är lite annorlunda:
* Kraft
    * deras hälsa, styrka, rörelse
* Special
    * deras skill, minne, magi, fingerfärdighet, språk, kunskap
* Moral
    * deras mentala hälsa och moral
 
## Motståndar exempel
HD betyder Hit Die och använder vanligtvis d6 för att slå fram hur starka de är. Tabellen nedan kommer erbjuda HD och rekommendera kraft. Denna rekomenderade kraft är nära modus av HD. Så ifall spelledaren inte vill slå fram så kan hon använda den istället. Istället för d6 som HD kan man använda en d4. Då blir de betydligt svagare.

> En motståndares målvärde kan max vara 10 och det som är över räknas som en buffer. Skadan ges först till buffern tills den är tömd, sedan går den på grundvärdet.

|  HD | Exempel                    | Kraft           | Special | Moral | Skada |
| --: | :------------------------- |:---------------:| ------- | ----- | ----- |
| 0.5 | Råtta, Vätte, Kobold       | 3               | 2       | 2     | 1d2   |
|   1 | Ork, Människa, Varg        | 6               | 5       | 4     | 1d6   |
|   2 | Elitsoldat, Björn          | 8               | 7       | 6     | 1d6+1 |
|   3 | Ogre, Riddare, Ond Magiker | 10              | 9       | 7     | 1d6+2 |
|   4 | Jätte, Ung drake           | 10 (4 buffer)   | 10      | 8     | 1d8+1 |
|  5+ | Boss, Drake, Demon; naturkatastrof | 10 (8 buffer)| 11 | 10    | 2d6+2 |

## Slumpa fram ett monster
<button onclick="generateMonster()">Generera Monster</button>
<div id="monster-output"></div>

<script src="assets/mazeMonster.js"></script>

## Slumpa fram en NPC
<button onclick="generateUNE()">Generera NPC</button>
<div id="une-output"></div>

<script src="assets/uneNPC.js"></script>

## Vid starkare motståndare (skillnadsmodifiering)
När en motståndare har nått 8 i målvärde träder regeln om skillnadsmodifiering in. Det betyder att skillnaden som finns mellan spelkaraktären och motståndaren ger plus poäng till tärningskastet. Området går från +1, +2 och högst +3. Detta kan antingen hjälpa spelkaraktären att vinna motståndsslaget men allra oftast gör det att kastet går åt skogen.

# Fummel tabeller
## Fumla i strid

| 2d6  | Fummel  |   |
|---|---|---|
| 2-3 | Katastrof  |  Vapnet går sönder eller kastas iväg 5 meter. |
| 4-5 | Halt  |  Du snubblar och missar din nästa tur. |
| 6-8 | Blottad  |  Nästa slag mot dig får +2 (enklare att slå under). |
| 9-10 | Självskada  |  Du slår din egen vapenskada mot dig själv.  |
| 11-12 | Vänskaplig eld |  Du träffar en allierad istället (om någon finns). |

## Fumla med magi & Magikontroll

Slå för din **Magikontroll** (3d6)
> Par = inget händer (37%)
> Fummel (6, 6) = katastrof (7%)
> Inget av ovan -> läs av siffrorna i obestämd ordning och hitta din mutation (55%)

### Mutationslistan

| Kod | Mutation | Spelteknisk Effekt |
| :--- | :--- | :--- |
| **123** | **Glasartad hud** | Din hud blir genomskinlig. Du ser dina organ. -1 Moral för de som ser dig. |
| **124** | **Mässings-fingrar** | Dina fingrar blir av metall. Du kan dyrka lås utan verktyg men låter när du rör dig. |
| **125** | **Extra mun** | En mun öppnas på din hals. Den pratar konstant och avslöjar dina hemligheter. |
| **126** | **Insektshår** | Styva, svarta insektshår täcker din kropp. -1 på Akrobatik (du är stel). |
| **134** | **Teleskop-öga** | Ett öga kan skjutas ut 10 cm. Du har Fördel på slag för att spana. |
| **135** | **Svamp-växt** | Lila svampar växer ur dina axlar. De lyser svagt i mörker (du kan inte gömma dig). |
| **136** | **Hål i bröstet** | Ett knytnävsstort hål öppnar sig rakt genom bröstet. Du kan tekniskt sett förvara små saker där, men det syns. |
| **145** | **Magnetiskt fält** | Små metallföremål (pilar, knivar, nycklar) dras till dig. Tar +1 mer skada från metallvapen. |
| **146** | **Grod-tunga** | Din tunga blir 1 meter lång och klibbig. Du kan plocka upp saker på avstånd. Du pratar väldigt märkligt. |
| **156** | **Tids-skugga** | Du har en skugga som rör sig 2 sekunder efter dig. |
| **234** | **Gälar** | Du kan andas under vatten men måste fukta kroppen för att kunna ta upp syret. |
| **235** | **Hov-fötter** | Dina fötter blir till hovar. Du springer snabbare men kan inte bära skor och har svårt att smyga. |
| **236** | **Huggorm-tänder** | Du får gifttänder. Ett lyckat bett gör 1d4 extra skada (Förgiftning). |
| **245** | **Dubbla leder** | Dina armar och ben kan böjas åt båda hållen. Du kan ta dig ur alla bojor. Att stå rakt är svårt. |
| **246** | **Svavel-andedräkt** | Din andedräkt luktar ruttna ägg och ryker. -2 på alla sociala slag. |
| **256** | **Självlysande blod** | Ditt blod lyser starkt neonblått. Om du är skadad är du lätt att spåra. |
| **345** | **Fjällig hud** | Din hud blir hård och täckt av fiskfjäll. |
| **346** | **Känselhorn** | Antenner växer ut ur pannan. Du kan "se" i totalt mörker via vibrationer. |
| **356** | **Tredje arm** | En liten, svag arm växer ut ur magen. Kan hålla en fackla eller en sköld. |
| **456** | **Muterat kranium** | Ditt huvud sväller och får formen av en kon. |

### Katastroflistan; när dubbla sexor sker

| Tärning (X) | Katastrof | Effekt på världen |
| :--- | :--- | :--- |
| **1** | **Dimensionsspricka** | En reva öppnas. 1d6 varelser från en annan tidsepok väller ut och är hungriga. |
| **2** | **Magisk Torka** | All magi i området (1 km radie) dör ut helt i 1d6 dagar. Inga formler fungerar. |
| **3** | **Tids-eko** | Alla inom synhåll åldras eller föryngras 1d20 år omedelbart (slå 1d2 för riktning). |
| **4** | **Väder-omkastning** | Himlen byter färg och det börjar regna flytande mässing, syra eller levande grodor. |
| **5** | **Själs-läckage** | Magikern och den närmaste personen byter kroppar med varandra (permanent tills motmedel hittas). |
| **6** | **Historiens Skalv** | En känd historisk händelse raderas eller ändras. (T.ex. en stad som fanns nyss har nu legat i ruin i 100 år). |


---
Karaktärsblad slim

Namn:

Bakgrund:

Silver:

**Grundvärde** *Max / Nuvarande*
* *Kropp* x / x
* *Skill* x / x
* *Minne* x / x

**Skydd**
* O Lätt: -1 skada
* O medel: -2 skada, nackdel smyga
* O tungt: -3 skada, nackdel smyga, klättra, simma

**Talanger**
*Vid varje misslyckande sätts en bock. vid vila, slå över 2d6 över rank för att höja.* /// *Målvärde = Grundvärde + Talang*
* O namn på talang. rank: x
* O namn på talang. rank: x
* O namn på talang. rank: x

**Cirkel**
*Målvärde = Minne + Talang - Cirkel Rank* /// *X = förberedd*
* O namn på trollformel med sin effekt och form. rank: x
* O namn på trollformel med sin effekt och form. rank: x
* O namn på trollformel med sin effekt och form. rank: x

**Utrustning**
* Namn på utrustning
* Namn på utrustning
* Namn på utrustning
