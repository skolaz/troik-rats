```javascript
// UNE (c)2014 Zach Best and Conjecture Games - Svensk JavaScript-version

const uneData = {
    // Personlighetsdrag
    npcMod: [
        "överflödig", "oduglig", "behaglig", "slö", "munter", "beroende",
        "banal", "okänslig", "trotsig", "klipsk", "konformistisk", "logisk",
        "betitlad", "motbjudande", "liberal", "ondskefull", "försåtlig",
        "oerfaren", "insiktsfull", "foglig", "förnuftig", "ansedd",
        "nyfiken", "taklös", "utfattig", "otränad", "usling", "tanklös",
        "fanatisk", "intrigant", "romantisk", "lat", "förfinad", "ofrälse",
        "försiktig", "orimlig", "pessimistisk", "oumbärlig", "barnslig",
        "förförisk", "skicklig", "högtidlig", "lärd", "from", "bristfällig",
        "försumlig", "vanemässig", "konservativ", "obildad", "optimistisk",
        "livlig", "försynt", "oborstad", "obetänksam", "välbärgad",
        "rättfram", "hjälpsam", "viljestark", "bildad", "modfälld",
        "idealistisk", "obekymrad", "likgiltig", "motbjudande", "tanklös",
        "ovillig att hjälpa", "generös", "nyckfull", "nyfiken", "passionerad",
        "rationell", "medgörlig", "åldrad", "lättstött", "hängiven",
        "grov", "gladlynt", "syndfull", "krävande", "etablerad", "dåraktig",
        "pragmatisk", "naiv", "värdig", "opassande", "slug", "fridfull",
        "privilegierad", "påstridig", "pålitlig", "förtjusande", "omtänksam",
        "dyster", "vänlig", "rättfärdig", "snål", "hopplös", "omtyckt",
        "korrupt", "självsäker"
    ],

    // Roller och yrken
    npcNoun: [
        "gypsy", "missionär", "bybo", "medlare", "artist", "häxa",
        "utstött", "magiker", "skurk", "magister", "köpman", "legosoldat",
        "värnpliktig", "civilist", "livegen", "expert", "förvaltare",
        "arbetare", "aktivist", "råskinn", "allmoge", "eremit", "skådespelare",
        "hjälte", "inkvisitor", "domare", "talare", "härold", "förkämpe",
        "furste", "skogsvaktare", "hövding", "landsvägsrövare", "klerk",
        "skurk", "ockultist", "pionjär", "skattjägare", "slav", "professor",
        "pastor", "inbrottstjuv", "guvernör", "beväpnad", "tjänare", "bus",
        "vikarierande präst", "bråkstake", "klärvoajant", "charmör", "vagabond",
        "officer", "munk", "patriark", "världsresenär", "gesäll", "upptäcktsresande",
        "hemmafru", "handlare", "krypskytt", "statsman", "väktare", "enstöring",
        "gammal gumma", "hovman", "astrolog", "laglös", "fogde", "äventyrare",
        "präst", "duellant", "adept", "allvetare", "soldat", "hantverkare",
        "tusenkonstnär", "luffare", "trollkarl", "underhållare", "lönnmördare",
        "aristokrat", "trollkarl", "resenär", "hantverkare", "besvärjare",
        "predikant", "daglönare", "drivare", "vetenskapsman", "tiggare",
        "konstnär", "mästare", "lärling", "asketisk", "skurk", "upphöjd",
        "politiker", "överordnad", "krigare"
    ],

    // Motivationsverb
    motVerb: [
        "råda", "leda", "ta", "arbeta", "förvalta", "skaffa", "utnyttja",
        "upptäcka", "följa med", "undertrycka", "försöka", "frossa i",
        "avskräcka", "förolämpa", "förkunna", "förstöra", "nedteckna",
        "förvärva", "vägleda", "driva", "förtrycka", "fullfölja", "skada",
        "lära", "nå", "samspela med", "driva", "göra känt", "förfölja",
        "förädla", "skapa", "granska", "belasta", "kommunicera", "författa",
        "kidnappa", "hjälpa", "förespråka", "bearbeta", "underminera",
        "främja", "följa", "genomföra", "rapportera", "förklara", "föreställa sig",
        "främja", "förstå", "utveckla", "avskräcka", "fördärva", "vakta",
        "samarbeta med", "stjäla", "delta i", "göra framsteg", "erövra",
        "sträva efter", "föreslå", "upptäcka", "plåga", "hindra", "slutföra",
        "försvaga", "utföra", "äga", "plundra", "tvinga", "uppnå", "bevara",
        "dokumentera", "bygga", "ansluta sig till", "säkra", "förverkliga",
        "omfamna", "uppmuntra", "bistå", "informera", "förmedla", "kontakta",
        "plågas av", "vanhelga", "gynna", "råna", "jaga", "begripa",
        "framställa", "nedslå", "upprätta", "alliera sig med", "administrera",
        "instifta", "avgöra", "störta", "förbereda", "relatera", "redogöra för",
        "söka", "stödja"
    ],

    // Motivationsmål
    motNouns: {
        MotNoun1: [
            "rikedom", "nöd", "välstånd", "resurser", "välgång", "fattigdom",
            "överflöd", "brist", "framgång", "lidande", "smuggelgods", "musik",
            "litteratur", "teknologi", "alkohol", "läkemedel", "skönhet",
            "styrka", "intelligens", "makt"
        ],

        MotNoun2: [
            "de rika", "folket", "fiender", "allmänheten", "religion", "de fattiga",
            "familjen", "eliten", "den lärda världen", "de övergivna", "lagen",
            "regeringen", "de förtryckta", "vänner", "brottslingar", "allierade",
            "hemliga sällskap", "världen", "militären", "kyrkan"
        ],

        MotNoun3: [
            "drömmar", "diskretion", "kärlek", "frihet", "smärta", "tro",
            "slaveri", "upplysning", "rasism", "sinnlighet", "disharmoni",
            "fred", "diskriminering", "otro", "njutning", "hat", "lycka",
            "träldom", "harmoni", "rättvisa"
        ],

        MotNoun4: [
            "frosseri", "lust", "avund", "girighet", "lättja", "vrede", "högmod",
            "renhet", "måttfullhet", "vaksamhet", "nit", "sinnesro", "välgörenhet",
            "anspråkslöshet", "illdåd", "feghet", "narcissism", "medkänsla",
            "tapperhet", "tålamod"
        ],

        MotNoun5: [
            "råd", "propaganda", "vetenskap", "kunskap", "kommunikation",
            "lögner", "myter", "gåtor", "berättelser", "legender", "industri",
            "nya religioner", "framsteg", "djur", "spöken", "magi", "naturen",
            "gamla religioner", "expertis", "andar"
        ]
    },

    // Relativ styrka
    power: {
        Ordning: [
            { name: "mycket svagare", weight: 2 },
            { name: "något svagare", weight: 8 },
            { name: "jämnstark", weight: 80 },
            { name: "något starkare", weight: 8 },
            { name: "mycket starkare", weight: 2 }
        ],

        Lugn: [
            { name: "mycket svagare", weight: 4 },
            { name: "något svagare", weight: 11 },
            { name: "jämnstark", weight: 70 },
            { name: "något starkare", weight: 11 },
            { name: "mycket starkare", weight: 4 }
        ],

        Standard: [
            { name: "mycket svagare", weight: 5 },
            { name: "något svagare", weight: 15 },
            { name: "jämnstark", weight: 60 },
            { name: "något starkare", weight: 15 },
            { name: "mycket starkare", weight: 5 }
        ],

        Oordning: [
            { name: "mycket svagare", weight: 8 },
            { name: "något svagare", weight: 17 },
            { name: "jämnstark", weight: 50 },
            { name: "något starkare", weight: 17 },
            { name: "mycket starkare", weight: 8 }
        ],

        Kaos: [
            { name: "mycket svagare", weight: 12 },
            { name: "något svagare", weight: 18 },
            { name: "jämnstark", weight: 40 },
            { name: "något starkare", weight: 18 },
            { name: "mycket starkare", weight: 12 }
        ]
    },

    // Samtalsattityd
    convo: {
        Älskad: [
            { name: "tillbakadragen", weight: 1 },
            { name: "på sin vakt", weight: 5 },
            { name: "försiktig", weight: 10 },
            { name: "neutral", weight: 15 },
            { name: "sällskaplig", weight: 39 },
            { name: "hjälpsam", weight: 15 },
            { name: "öppenhjärtig", weight: 15 }
        ],

        Vänlig: [
            { name: "tillbakadragen", weight: 2 },
            { name: "på sin vakt", weight: 6 },
            { name: "försiktig", weight: 12 },
            { name: "neutral", weight: 20 },
            { name: "sällskaplig", weight: 36 },
            { name: "hjälpsam", weight: 13 },
            { name: "öppenhjärtig", weight: 11 }
        ],

        Fredlig: [
            { name: "tillbakadragen", weight: 3 },
            { name: "på sin vakt", weight: 8 },
            { name: "försiktig", weight: 14 },
            { name: "neutral", weight: 30 },
            { name: "sällskaplig", weight: 27 },
            { name: "hjälpsam", weight: 11 },
            { name: "öppenhjärtig", weight: 7 }
        ],

        Neutral: [
            { name: "tillbakadragen", weight: 5 },
            { name: "på sin vakt", weight: 10 },
            { name: "försiktig", weight: 15 },
            { name: "neutral", weight: 40 },
            { name: "sällskaplig", weight: 15 },
            { name: "hjälpsam", weight: 10 },
            { name: "öppenhjärtig", weight: 5 }
        ],

        Misstänksam: [
            { name: "tillbakadragen", weight: 7 },
            { name: "på sin vakt", weight: 11 },
            { name: "försiktig", weight: 28 },
            { name: "neutral", weight: 30 },
            { name: "sällskaplig", weight: 14 },
            { name: "hjälpsam", weight: 7 },
            { name: "öppenhjärtig", weight: 3 }
        ],

        Fientlig: [
            { name: "tillbakadragen", weight: 11 },
            { name: "på sin vakt", weight: 13 },
            { name: "försiktig", weight: 37 },
            { name: "neutral", weight: 20 },
            { name: "sällskaplig", weight: 12 },
            { name: "hjälpsam", weight: 5 },
            { name: "öppenhjärtig", weight: 2 }
        ],

        Hatad: [
            { name: "tillbakadragen", weight: 15 },
            { name: "på sin vakt", weight: 15 },
            { name: "försiktig", weight: 39 },
            { name: "neutral", weight: 15 },
            { name: "sällskaplig", weight: 10 },
            { name: "hjälpsam", weight: 5 },
            { name: "öppenhjärtig", weight: 0 }
        ]
    }
};


// Slumpa ett element från en lista
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// Slumpa ett viktat element
function getWeightedItem(options) {
    const totalWeight = options.reduce((sum, opt) => sum + opt.weight, 0);
    let randomVal = Math.random() * totalWeight;
    
    for (let opt of options) {
        if (randomVal < opt.weight) {
            return opt.name;
        }
        randomVal -= opt.weight;
    }

    return options[0].name;
}


// Huvudgenerator
function generateUNE(powerSetting = "Standard", convoSetting = "Neutral") {
    const mod = getRandomItem(uneData.npcMod);
    const noun = getRandomItem(uneData.npcNoun);

    const powerLevel = getWeightedItem(
        uneData.power[powerSetting] || uneData.power.Standard
    );

    const convoFeeling = getWeightedItem(
        uneData.convo[convoSetting] || uneData.convo.Neutral
    );

    const columnKeys = Object.keys(uneData.motNouns);
    const randomColumnKey = getRandomItem(columnKeys);
    const selectedMotNounList = uneData.motNouns[randomColumnKey];

    const motivations = [];

    for (let i = 0; i < 3; i++) {
        const verb = getRandomItem(uneData.motVerb);
        const motNoun = getRandomItem(selectedMotNounList);
        motivations.push(`${verb} ${motNoun}`);
    }

    const outputDiv = document.getElementById('une-output');
    if (!outputDiv) return;

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Motståndare</h3>

            <p>
                <b>[${mod}] [${noun}]</b>,
                som är <u>[${powerLevel}]</u> i förmåga,
                känner sig [${convoFeeling}].
            </p>

            <p>
                <strong>Motiv:</strong><br>
                - [${motivations[0]}]<br>
                - [${motivations[1]}]<br>
                - [${motivations[2]}]
            </p>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}
```
