### Procenten-rekentool

Deze tool is bedoeld om het begrip van rekenen met procenten te vergroten in het kader van het vak rekenen op MBO niveau 4, in het bijzonder aan de Software Developer opleiding aan het Alfa-collge locatie Boumaboulevard.

#### Het rekenmodel

De benadering van het hele procentenrekenen is geschoeid op het concept met vermenigvuldigingsfactoren (of groeifactoren, of kortweg factoren): Bij elke procentsom kun je een **factor** bedenken. Daarnaast is er altijd sprake van een **oud**-bedrag en een **nieuw**-bedrag. Het verband tussen deze 3 variabelen is te schrijven op 3 manieren:

1. nieuw = factor * oud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(denk aan: 6 = 2 * 3)
2. oud = nieuw / factor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(denk aan 3 = 6 / 2)
3. factor = nieuw / oud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(denk aan 2 = 6 / 3)

***Bij elke procentsom kun je op basis van de factor spreken van 3 soorten:***

1. Je neemt ergens 'zoveel % van'
2. Er is sprake van toename
3. Er is sprake van afname

***De soort en de factor zijn onlosmakelijk aan elkaar verbonden***

#### Wat de tool kan (functioneel ontwerp - voor de klant)

Als een gebruiker een procentsom op moet lossen, moet de gebruiker uit de som waarden voor 2 van de 3 variabelen vinden. Met deze 2 waarden van variabelen kan de waarde van de 3<sup>e</sup> variabele uitgerekend worden - zie alinea hier boven.

De gebruiker moet daartoe de 2 gevonden waarden op de juiste plek invoeren in de tool. Als de 2 waarden zijn ingevuld, wordt de 'Los op' -knop actief en na het klikken op deze knop kan de gebruiker het antwoord aflezen uit de tool.

Door deze tool te ontwikkelen wordt hopelijk het begrip van procenten vegroot en het hele concept van werken met een factor maakt dat hulpmiddelen als verhoudingstabellen tot het verleden behoren.

#### Technisch ontwerp

1. onze app moet steeds checken of 2 van de 3 variabelen een waarde hebben gekregen: dus onder elk input-veld moet een onchange-listener komen die checkt of er 2 van de 3 waarden ingevuld zijn: deze functie heet `checkSolveButton()` 
    - `checkSolveButton()` moet na het invullen (`onchange`) bij 3 unput velden checken of er wat staat; daarom:
    1. `const oud = document.getElementById("oud").value`
    2. `const nieuw = document.getElementById("nieuw").value`
    3. `const percentage = document.getElementById("percentage").value`
    - in combinatie met
    4. `const soort = document.getElementById("soort").value`
    - als er 2 van de 3 ingevuld zijn, dan: `if(oud.value != '' && percentage.value != '' && soort.value != '') {reken nieuw uit}``elseif(nieuw.value != '' && percentage.value != '' && soort.value != '')`
2. als er 2 van de 3 gevuld zijn, moet het attribuut `disabled` van de los op -knop verwijderd worden zodat de knop actief wordt
3. als de gebruiker vervolgens op de Los op -knop klikt, moet de waarde van de overgebleven variable gevuld worden met het juiste antwoord