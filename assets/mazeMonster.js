window.generateMonster = function() {
    const outputDiv = document.getElementById('monster-output');
    
    // Monsterbas
    const monsterBaseRoll = Math.floor(Math.random() * 6) + 1;
    let monsterBase;
    if (monsterBaseRoll <= 2) {
        monsterBase = "Flygande";
    } else if (monsterBaseRoll <= 4) {
        monsterBase = "Landlevande";
    } else {
        monsterBase = "Vattenlevande";
    }

    // Djur
    const aerialAnimals = [
        "Albatross", "Fladdermus", "Skalbagge", "Tropisk fågel",
        "Fjäril", "Kondor", "Trana", "Kråka", "Trollslända",
        "Örn", "Falk", "Eldfluga", "Flamingo", "Fluga",
        "Flygekorre", "Gås", "Fiskmås", "Kolibri", "Kungsfiskare",
        "Gräshoppa", "Skata", "Syrsa", "Svartmes", "Mygga",
        "Mal", "Uggla", "Papegoja", "Påfågel", "Pelikan",
        "Pteranodon", "Tupp", "Gråmes", "Svan", "Gam",
        "Geting", "Hackspett"
    ];

    const terrestrialAnimals = [
        "Myra", "Apa", "Bältdjur", "Grävling", "Björn", "Vildsvin",
        "Larv", "Tusenfoting", "Kameleont", "Kackerlacka", "Hjort",
        "Elefant", "Iller", "Räv", "Giraff", "Get", "Häst",
        "Människa", "Mullvad", "Struts", "Oxe", "Piggsvin",
        "Kanin", "Tvättbjörn", "Råtta", "Noshörning", "Skorpion",
        "Får", "Mördarsnigel", "Snigel", "Orm", "Spindel",
        "Ekorre", "Tiger", "Varg", "Järv"
    ];

    const aquaticAnimals = [
        "Alligator", "Amöba", "Marulk", "Bäver", "Mussla", "Krabba",
        "Delfin", "Ål", "Groda", "Flodhäst", "Manet", "Igel",
        "Hummer", "Manat", "Manta", "Bisamråtta", "Narval",
        "Vattensalamander", "Bläckfisk", "Utter", "Pingvin",
        "Näbbdjur", "Kulfisk", "Salamander", "Havsanemon",
        "Sjöborre", "Sjöhäst", "Säl", "Haj", "Räka", "Bläckfisk",
        "Svärdfisk", "Grodyngel", "Sköldpadda", "Valross", "Val"
    ];

    let monsterAnimal;
    if (monsterBase === "Flygande") {
        monsterAnimal = aerialAnimals[Math.floor(Math.random() * aerialAnimals.length)];
    } else if (monsterBase === "Landlevande") {
        monsterAnimal = terrestrialAnimals[Math.floor(Math.random() * terrestrialAnimals.length)];
    } else {
        monsterAnimal = aquaticAnimals[Math.floor(Math.random() * aquaticAnimals.length)];
    }

    // Monsterdrag
    const monsterFeatures = [
        "Hjorthorn", "Näbb", "Pansarsköld", "Klor",
        "Facettögon", "Ögon på stjälkar", "Huggtänder", "Fenor",
        "Päls", "Gälar", "Hovar", "Horn", "Benlös",
        "Lång tunga", "Mångögd", "Månglemmad", "Slem",
        "Tänger", "Pansarplåtar", "Fjäderdräkt", "Snabel",
        "Fjäll", "Segmenterad kropp", "Raggig päls", "Skal",
        "Taggar", "Spinnvårtor", "Ryggtaggar", "Gadd",
        "Sugkoppar", "Svans", "Rovfågelsklo", "Tentakler",
        "Snabel", "Betar", "Vingar"
    ];
    const monsterFeature = monsterFeatures[Math.floor(Math.random() * monsterFeatures.length)];

    // Monstersärdrag
    const monsterTraits = [
        "Amfibisk", "Uppsvälld", "Skör", "Kannibalisk",
        "Lerartad", "Kolossal", "Kristallartad", "Förmultnad",
        "Eteriskt väsen", "Eterisk", "Evigt ung", "Ögonlös",
        "Orädd", "Fluffig", "Svampbevuxen", "Geléartad",
        "Geometrisk", "Förhärdad", "Illusorisk", "Intelligent",
        "Iriscerande", "Självlysande", "Månghövdad", "Mekanisk",
        "Fysiskt väsen", "Planbunden", "Spegelblank",
        "Gummiartad", "Skuggskimrande", "Rakbladsvass",
        "Skelettartad", "Slemmig", "Klistrig", "Stinkande",
        "Pyssling", "Genomskinlig"
    ];
    const monsterTrait = monsterTraits[Math.floor(Math.random() * monsterTraits.length)];

    // Monsterförmågor
    const monsterAbilities = [
        "Absorberar", "Frätande blod", "Antimagi", "Förblindande",
        "Andedräktsvapen", "Kamouflage", "Dubbelgångare",
        "Elektrisk kraft", "Snärjande", "Eterisk kraft",
        "Exploderar", "Flyger", "Förhäxande blick", "Hypnotiserar",
        "Ogenomtränglig", "Osynlig", "Dränerar livskraft",
        "Magnetisk", "Härmar", "Läser tankar", "Paralyserar",
        "Fasförskjutning", "Övernaturlig kraft", "Giftig",
        "Radioaktiv", "Reflekterande", "Regenererar",
        "Formskiftande", "Besvärjelsekonst", "Smygande",
        "Strypgrepp", "Övernaturlig styrka", "Telekinesi",
        "Teleportation", "Vampyrisk", "Väggklättrare"
    ];
    const monsterAbility = monsterAbilities[Math.floor(Math.random() * monsterAbilities.length)];

    // Monster-taktik
    const monsterTactics = [
        "Överfall", "Kalla på förstärkning", "Fånga", "Storma",
        "Klättra på fiender", "Kräva dyrkan", "Skapa barriär",
        "Bedra", "Utmana till duell", "Desorientera", "Omringa",
        "Fly undan", "Gå till angrepp i flock", "Samla kraft",
        "Gå bärsärk", "Trakassera", "Slunga fiender", "Immobilisera",
        "Manipulera", "Håna", "Hålla en monolog", "Befalla en undersåte",
        "Skydda ledaren", "Skydda sig själv", "Splittra fiender",
        "Förfölja", "Stjäla från", "Översvämma med horder",
        "Ge sig på den oförskämde", "Ge sig på ledaren",
        "Ge sig på den närmaste", "Ge sig på den rikaste",
        "Ge sig på den starkaste", "Ge sig på den svagaste",
        "Leka med sitt byte", "Utnyttja terrängen"
    ];
    const monsterTactic = monsterTactics[Math.floor(Math.random() * monsterTactics.length)];

    // Monsterpersonlighet
    const monsterPersonalities = [
        "Främmande", "Avmätt", "Uttråkad", "Försiktig",
        "Feg", "Nyfiken", "Listig", "Lättdistraherad",
        "Bildad", "Förbittrad", "Avundsjuk", "Lärd",
        "Fanatisk", "Glömsk", "Generös", "Hatiskt lagd",
        "Ärofull", "Ödmjuk", "Förhärdad", "Munter",
        "Lagvrängare", "Manipulativ", "Storhetsvansinnig",
        "Melankolisk", "Pedantisk", "Mystisk", "Besatt",
        "Verklighetsfrånvänd", "Paranoid", "Artig",
        "Skrämmande kall", "Förfinad", "Lättstött",
        "Oimponerad", "Fåfäng", "Främlingsfientlig"
    ];
    const monsterPersonality = monsterPersonalities[Math.floor(Math.random() * monsterPersonalities.length)];

    // Monstersvaghet
    const monsterWeaknesses = [
        "Klockor", "Fågelsång", "Barn", "Kyla", "Kalljärn",
        "Konkurrens", "Samtal", "Missbildningar", "Smicker",
        "Blommor", "Gåvor", "Guld", "Värme", "Heliga symboler",
        "Heligt vatten", "Husmanskost", "Galenskap", "Speglar",
        "Mistel", "Månljus", "Musik", "Metoder", "Fylakterium",
        "Fysiska element", "Pussel", "Gåtor", "Ritualer",
        "Silver", "Solljus", "Tårar", "Sanna namn",
        "Värdefulla material", "Svag punkt", "Vapen",
        "Vin", "Malört"
    ];
    const monsterWeakness = monsterWeaknesses[Math.floor(Math.random() * monsterWeaknesses.length)];

// Statistik
const hitDice = [
    {
        hd: "0.5",
        special: 2,
        moral: 2,
        damage: "1d2"
    },
    {
        hd: "1",
        special: 3,
        moral: 5,
        damage: "1d6"
    },
    {
        hd: "2",
        special: 5,
        moral: 6,
        damage: "1d6+1"
    },
    {
        hd: "3",
        special: 8,
        moral: 9,
        damage: "1d6+2"
    },
    {
        hd: "4",
        special: 9,
        moral: 10,
        damage: "1d8+1"
    },
    {
        hd: "5+",
        special: 10,
        moral: 10,
        damage: "2d6+2"
    }
];

const baseValues = [-2, -1, 0, 1, 2];

// Slumpa HD
const randomHitDice = hitDice[Math.floor(Math.random() * hitDice.length)];

// Slumpa bonusar
const randomKraft = baseValues[Math.floor(Math.random() * baseValues.length)];
const randomSpecial = baseValues[Math.floor(Math.random() * baseValues.length)];
const randomMoral = baseValues[Math.floor(Math.random() * baseValues.length)];

// Formatera bonus
function formatBonus(value) {
    if (value > 0) return `+ ${value}`;
    if (value < 0) return `- ${Math.abs(value)}`;
    return "";
}

const outputHTML = `
    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
        <h3>Slumpat monster</h3>

        <h4>Grundläggande</h4>
        <p><strong>Typ:</strong> ${monsterBase}</p>
        <p><strong>Djur:</strong> ${monsterAnimal}</p>
        
        <h4>Statistik</h4>
        <ul>
            <li><strong>Kraft:</strong> HD ${randomHitDice.hd} ${formatBonus(randomKraft)}</li>
            <li><strong>Special:</strong> ${randomHitDice.special} ${formatBonus(randomSpecial)}</li>
            <li><strong>Moral:</strong> ${randomHitDice.moral} ${formatBonus(randomMoral)}</li>
            <li><strong>Skada:</strong> ${randomHitDice.damage}</li>
        </ul>

        <h4>Detaljer</h4>
        <ul>
            <li><strong>Egenskap:</strong> ${monsterFeature}</li>
            <li><strong>Särdrag:</strong> ${monsterTrait}</li>
            <li><strong>Förmåga:</strong> ${monsterAbility}</li>
            <li><strong>Taktik:</strong> ${monsterTactic}</li>
            <li><strong>Personlighet:</strong> ${monsterPersonality}</li>
            <li><strong>Svaghet:</strong> ${monsterWeakness}</li>
        </ul>
    </div>
`;
    
    outputDiv.innerHTML = outputHTML;
};
