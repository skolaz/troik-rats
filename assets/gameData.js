const GAME_DATA = {
    // Talanger indelade efter grundvärde
    talents: [
        { name: "Råstyrka", stat: "Kropp" },
        { name: "Akrobatik", stat: "Kropp" },
        { name: "Skrämma", stat: "Kropp" },
        { name: "Strid", stat: "Kropp" },
        { name: "Uthållighet", stat: "Kropp" },
        { name: "Klättra", stat: "Kropp" },
        { name: "Simma", stat: "Kropp" },
        { name: "Bygga", stat: "Kropp" },
        { name: "Undvika", stat: "Kropp/Skill" },
        { name: "Jaga", stat: "Kropp" },
        { name: "Rida", stat: "Kropp" },
        { name: "Kasta", stat: "Kropp" },

        { name: "Smidighet", stat: "Skill" },
        { name: "Stjäla", stat: "Skill" },
        { name: "Skjuta", stat: "Skill" },
        { name: "Hantverk", stat: "Skill" },
        { name: "Smygande", stat: "Skill" },
        { name: "Djurvän", stat: "Skill" },
        { name: "Spåra", stat: "Skill" },
        { name: "Läkemedel", stat: "Skill" },
        { name: "Bluffa", stat: "Skill" },
        { name: "Musik", stat: "Skill" },
        { name: "Mekanik", stat: "Skill" },
        { name: "Matlagning", stat: "Skill" },

        { name: "Bluffa", stat: "Minne" },
        { name: "Dekryptera", stat: "Minne" },
        { name: "Mystik magi", stat: "Minne" },
        { name: "Kunskap", stat: "Minne" },
        { name: "Historia", stat: "Minne" },
        { name: "Kasino", stat: "Minne" },
        { name: "Språk", stat: "Minne" },
        { name: "Koncentration", stat: "Minne" },
        { name: "Värdera", stat: "Minne" },
        { name: "Astrologi", stat: "Minne" },
        { name: "Dryckblandare", stat: "Minne" },
        { name: "Ledarskap", stat: "Minne" }
    ],

    // Vapen (Närstrid och Distans)
    weapons: [
        { name: "Kniv / Dolk", broken: 1, standard: 5, master: 20, twoHanded: false, armorPiercing: false },
        { name: "Stav / Klubba", broken: 0, standard: 2, master: 10, twoHanded: false, armorPiercing: false },
        { name: "Yxa / Hammare", broken: 4, standard: 12, master: 45, twoHanded: false, armorPiercing: true },
        { name: "Spjut", broken: 3, standard: 10, master: 35, twoHanded: false, armorPiercing: false },
        { name: "Svärd / Spikklubba", broken: 8, standard: 25, master: 80, twoHanded: false, armorPiercing: true },
        { name: "Långsvärd", broken: 12, standard: 40, master: 120, twoHanded: false, armorPiercing: false },
        { name: "Stångvapen", broken: 15, standard: 50, master: 150, twoHanded: true, armorPiercing: true },
        { name: "Storsvärd / Mörbultare", broken: 20, standard: 65, master: 200, twoHanded: true, armorPiercing: true },
        { name: "Kastknivar / Yxor", broken: 2, standard: 6, master: 20, twoHanded: false, armorPiercing: false },
        { name: "Slangbella", broken: 0, standard: 1, master: 5, twoHanded: false, armorPiercing: false },
        { name: "Pilbåge", broken: 10, standard: 30, master: 100, twoHanded: true, armorPiercing: false },
        { name: "Armborst", broken: 15, standard: 45, master: 130, twoHanded: true, armorPiercing: false },
        { name: "Pistolet", broken: 30, standard: 80, master: 250, twoHanded: false, armorPiercing: true },
        { name: "Lätt musköt", broken: 50, standard: 150, master: 400, twoHanded: true, armorPiercing: true }
    ],

    // Skydd & Rustning
    armors: [
        { name: "Inget skydd", effect: "Ingen effekt", broken: 0, standard: 0, master: 0 },
        { name: "Lätt skydd", effect: "-1 Skada", broken: 10, standard: 30, master: 100 },
        { name: "Medel skydd", effect: "-2 Skada (Nackdel smyga)", broken: 25, standard: 75, master: 250 },
        { name: "Tungt skydd", effect: "-3 Skada (Nackdel smyga, klättra, sänker initiativ)", broken: 50, standard: 150, master: 500 },
        { name: "Sköld", effect: "+1 i försvar", broken: 5, standard: 15, master: 50 }
    ],

    // Övrig utrustning
    gear: [
        { name: "Ransoner (3)", price: 5, category: "Överlevnad & Ljus" },
        { name: "Vattensäck", price: 2, category: "Överlevnad & Ljus" },
        { name: "Sovsäck", price: 4, category: "Överlevnad & Ljus" },
        { name: "Fackla", price: 1, category: "Överlevnad & Ljus" },
        { name: "Lykta och olja", price: 10, category: "Överlevnad & Ljus" },
        { name: "Elddon", price: 3, category: "Överlevnad & Ljus" },
        { name: "Låsdyrkar (3)", price: 25, category: "Verktyg & Inbrott" },
        { name: "Kofot", price: 10, category: "Verktyg & Inbrott" },
        { name: "Bågfil & Metallfil", price: 12, category: "Verktyg & Inbrott" },
        { name: "Mejsel & Hammare", price: 4, category: "Verktyg & Inbrott" },
        { name: "Handborr", price: 8, category: "Verktyg & Inbrott" },
        { name: "Järntång", price: 7, category: "Verktyg & Inbrott" },
        { name: "Änterhake", price: 10, category: "Verktyg & Inbrott" },
        { name: "Rep 20 meter", price: 5, category: "Verktyg & Inbrott" },
        { name: "Järnspikar (10)", price: 2, category: "Verktyg & Inbrott" },
        { name: "Tiofotsstång", price: 1, category: "Verktyg & Inbrott" },
        { name: "Björnsax", price: 15, category: "Fällor & Sabotage" },
        { name: "Fotanglar", price: 8, category: "Fällor & Sabotage" },
        { name: "Bojor", price: 12, category: "Fällor & Sabotage" },
        { name: "Fett (burk)", price: 3, category: "Fällor & Sabotage" },
        { name: "Glaskulor (påse)", price: 4, category: "Fällor & Sabotage" },
        { name: "Lim", price: 5, category: "Fällor & Sabotage" },
        { name: "Kedja 3 meter", price: 15, category: "Fällor & Sabotage" },
        { name: "Ståltråd", price: 6, category: "Fällor & Sabotage" },
        { name: "Medicin (3)", price: 20, category: "Specialartiklar" },
        { name: "Flaska med gift", price: 40, category: "Specialartiklar" },
        { name: "Flaska med syra", price: 30, category: "Specialartiklar" },
        { name: "Djurdoft", price: 10, category: "Specialartiklar" },
        { name: "Stålspegel", price: 15, category: "Specialartiklar" },
        { name: "Fiskenät", price: 6, category: "Specialartiklar" },
        { name: "Krita", price: 1, category: "Specialartiklar" },
        { name: "Horn", price: 4, category: "Specialartiklar" },
        { name: "Stor säck / Spade", price: 3, category: "Specialartiklar" },
        { name: "Spade", price: 5, category: "Specialartiklar" }
    ],

    // Magitabeller
    magic: {
        formulas: [
            ["FysiskEffekt + FysiskForm", "EteriskElement + FysiskForm"],
            ["FysiskEffekt + EteriskForm", "EteriskElement + EteriskForm"],
            ["EteriskEffekt + FysiskForm", "FysiskEffekt + FysiskElement"],
            ["EteriskEffekt + EteriskForm", "FysiskEffekt + EteriskElement"],
            ["FysiskElement + FysiskForm", "EteriskEffekt + FysiskElement"],
            ["FysiskElement + EteriskForm", "EteriskEffekt + EteriskElement"]
        ],
        words: {
            FysiskEffekt: ["Besjälande", "Attraherande", "Bindande", "Blommande", "Förtärande", "Krypande", "Krossande", "Förminskande", "Delande", "Duplicerande", "Omslutande", "Expanderande", "Sammansmältande", "Gripande", "Påskyndande", "Hindrande", "Upplysande", "Fängslande", "Svävande", "Öppnande", "Förstenande", "Genomträngande", "Genomborrande", "Förföljande", "Reflekterande", "Regenererande", "Slitande", "Avvisande", "Återupplivande", "Skrikande", "Förseglande", "Formskiftande", "Skyddande", "Alstrande", "Omvandlande", "Förflyttande"],
            FysiskElement: ["Syra", "Bärnsten", "Bark", "Blod", "Ben", "Saltvatten", "Lera", "Kråka", "Kristall", "Glöd", "Kött", "Svamp", "Glas", "Honung", "Is", "Insekt", "Trä", "Lava", "Mossa", "Obsidian", "Olja", "Gift", "Råtta", "Salt", "Sand", "Kåda", "Orm", "Slem", "Sten", "Tjära", "Tagg", "Törne", "Vatten", "Vin", "Trä", "Mask"],
            FysiskForm: ["Altar", "Rustning", "Pil", "Best", "Klinga", "Kittel", "Kedja", "Triumfvagn", "Klo", "Mantel", "Kolossal", "Krona", "Elementarväsen", "Öga", "Fontän", "Port", "Golem", "Hammare", "Horn", "Nyckel", "Mask", "Monolit", "Grop", "Fängelse", "Vaktpost", "Tjänare", "Sköld", "Spjut", "Stridshäst", "Svärm", "Tentakel", "Tron", "Fackla", "Fälla", "Vägg", "Nät"],
            EteriskEffekt: ["Hämnande", "Bannlysande", "Förvirrande", "Bländande", "Charmande", "Kommunicerande", "Tvingande", "Döljande", "Dövande", "Bedräglig", "Tyda", "Drivande", "Modig", "Avkoda", "Energigivande", "Upplysande", "Bärsärk", "Plågsam", "Framsynt", "Berusande", "Gör galen", "Hypnotiserande", "Tankeläsande", "Nollställande", "Förlamande", "Avslöjande", "Vederstygglig", "Skådande", "Tystande", "Lugnande", "Frammanande", "Skräckinjagande", "Avvärjande", "Tröttande", "Förtvinande"],
            EteriskElement: ["Aska", "Kaos", "Distorsion", "Dröm", "Damm", "Eko", "Ektoplasma", "Eld", "Dimma", "Spöke", "Harmoni", "Värme", "Ljus", "Blixt", "Minne", "Sinne", "Mutation", "Negation", "Pest", "Plasma", "Sannolikhet", "Regn", "Röta", "Skugga", "Rök", "Snö", "Själ", "Stjärna", "Stasis", "Ånga", "Åska", "Tid", "Tomrum", "Vridning", "Viskning", "Vind"],
            EteriskForm: ["Aura", "Fyrbåk", "Stråle", "Blast", "Klump", "Bult", "Bubbla", "Kall", "Kaskad", "Cirkel", "Moln", "Slinga", "Kon", "Kub", "Dans", "Skiva", "Fält", "Form", "Blick", "Ögla", "Ögonblick", "Nexus", "Portal", "Puls", "Pyramid", "Stråle", "Skärva", "Sfär", "Spray", "Storm", "Svärm", "Fors", "Beröring", "Virvel", "Våg", "Ord"]
        }
    }
};
