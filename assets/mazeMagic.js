function generateSpell() {
    const outputDiv = document.getElementById('spell-output');
    
    // Spell Formulas (med svenska ord)
    const spellFormulas = [
        ["Fysisk Effekt + Fysisk Form", "Eterisk Element + Fysisk Form"],
        ["Fysisk Effekt + Eterisk Form", "Eterisk Element + Eterisk Form"],
        ["Eterisk Effekt + Fysisk Form", "Fysisk Effekt + Fysisk Element"],
        ["Eterisk Effekt + Eterisk Form", "Fysisk Effekt + Eterisk Element"],
        ["Fysisk Element + Fysisk Form", "Eterisk Effekt + Fysisk Element"],
        ["Fysisk Element + Eterisk Form", "Eterisk Effekt + Eterisk Element"]
    ];

    // Magic Tables
    const physicalEffects = ["Besjälande", "Attraherande", "Bindande", "Blommande", "Förtärande", "Krypande", "Krossande", "Förminskande", "Delande", "Duplicerande", "Omslutande", "Expanderande", "Sammansmältande", "Gripande", "Påskyndande", "Hindrande", "Upplysande", "Fängslande", "Svävande", "Öppnande", "Förstenande", "Genomträngande", "Genomborrande", "Förföljande", "Reflekterande", "Regenererande", "Slitande", "Avvisande", "Återupplivande", "Skrikande", "Förseglande", "Formskiftande", "Skyddande", "Alstrande", "Omvandlande", "Förflyttande"];
    const physicalElements = ["Syra", "Bärnsten", "Bark", "Blod", "Ben", "Saltvatten", "Lera", "Kråka", "Kristall", "Glöd", "Kött", "Svamp", "Glas", "Honung", "Is", "Insekt", "Trä", "Lava", "Mossa", "Obsidian", "Olja", "Gift", "Råtta", "Salt", "Sand", "Kåda", "Orm", "Slem", "Sten", "Tjära", "Tagg", "Törne", "Vatten", "Vin", "Trä", "Mask"];
    const physicalForms = ["Altar", "Rustning", "Pil", "Best", "Klinga", "Kittel", "Kedja", "Triumfvagn", "Klo", "Mantel", "Kolossal", "Krona", "Elementarväsen", "Öga", "Fontän", "Port", "Golem", "Hammare", "Horn", "Nyckel", "Mask", "Monolit", "Grop", "Fängelse", "Vaktpost", "Tjänare", "Sköld", "Spjut", "Stridshäst", "Svärm", "Tentakel", "Tron", "Fackla", "Fälla", "Vägg", "Nät"];
    const etherealEffects = ["Hämnande", "Bannlysande", "Förvirrande", "Bländande", "Charmande", "Kommunicerande", "Tvingande", "Döljande", "Dövande", "Bedräglig", "Tyda", "Drivande", "Modig", "Avkoda", "Energigivande", "Upplysande", "Bärsärk", "Plågsam", "Framsynt", "Berusande", "Gör galen", "Hypnotiserande", "Tankeläsande", "Nollställande", "Förlamande", "Avslöjande", "Vederstygglig", "Skådande", "Tystande", "Lugnande", "Frammanande", "Skräckinjagande", "Avvärjande", "Tröttande", "Förtvinande"];
    const etherealElements = ["Aska", "Kaos", "Distorsion", "Dröm", "Damm", "Eko", "Ektoplasma", "Eld", "Dimma", "Spöke", "Harmoni", "Värme", "Ljus", "Blixt", "Minne", "Sinne", "Mutation", "Negation", "Pest", "Plasma", "Sannolikhet", "Regn", "Röta", "Skugga", "Rök", "Snö", "Själ", "Stjärna", "Stasis", "Ånga", "Åska", "Tid", "Tomrum", "Vridning", "Viskning", "Vind"];
    const etherealForms = ["Aura", "Fyrbåk", "Stråle", "Blast", "Klump", "Bult", "Bubbla", "Kall", "Kaskad", "Cirkel", "Moln", "Slinga", "Kon", "Kub", "Dans", "Skiva", "Fält", "Form", "Blick", "Ögla", "Ögonblick", "Nexus", "Portal", "Puls", "Pyramid", "Stråle", "Skärva", "Sfär", "Spray", "Storm", "Svärm", "Fors", "Beröring", "Virvel", "Våg", "Ord"];

    // Roll 2d separately (one for row, one for column)
    const rowRoll = Math.floor(Math.random() * 6);
    const columnRoll = Math.random() < 0.5 ? 0 : 1;

    // Determine the formula components
    const formulaString = spellFormulas[rowRoll][columnRoll];
    let parts = formulaString.split(' + ');
    let component1 = parts[0].replace(/ /g, '');
    let component2 = parts[1].replace(/ /g, '');

    // Get the corresponding list of words (matchar nu de svenska namnen utan mellanslag)
    const lists = {
        "FysiskEffekt": physicalEffects,
        "FysiskElement": physicalElements,
        "FysiskForm": physicalForms,
        "EteriskEffekt": etherealEffects,
        "EteriskElement": etherealElements,
        "EteriskForm": etherealForms
    };
    
    // Generate spell name
    const part1 = lists[component1][Math.floor(Math.random() * lists[component1].length)];
    const part2 = lists[component2][Math.floor(Math.random() * lists[component2].length)];

    const spellName = `${part1} ${part2}`;
    
    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Trollformel</h3>
            <p><strong>Formel:</strong> ${formulaString}</p>
            <p><strong>Namn:</strong> ${spellName}</p>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}

function generateMutation() {
    const outputDiv = document.getElementById('mutation-output');
    const mutations = [
        "Ages", "Attracts birds", "Child-form", "Corpulence", "Covered in hair", "Animal arms", "Animal eyes", "Animal head", "Animal legs", "Animal mouth", "Animal skin", "Animal-form", "Cyclops", "Extra arms", "Extra eyes", "Extra legs", "Forked tongue", "Gender swap", "Hunchback", "Item-form", "Long arms", "Lose all hair", "Loses teeth", "Monster Feature", "Monster Trait", "No eyes", "No mouth", "P. Element-skin", "Second face", "Sheds skin", "Shrinks", "Shrivels", "Skin boils", "Slime trail", "Translucent skin", "Weeps blood"
    ];
    const randomMutation = mutations[Math.floor(Math.random() * mutations.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomMutation}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}

function generateInsanity() {
    const outputDiv = document.getElementById('insanity-output');
    const insanities = [
        "Always lies", "Always polite", "“Animal-form”", "Cannot count", "Cannot lie", "Faceblind", "Fears birds", "Fears blood", "Fears books", "Fears darkness", "Fears fire", "Fears gold", "Fears horses", "Fears iron", "Fears music", "Fears own hand", "Fears PC", "Fears rain", "Fears rivers", "Fears silence", "Fears sleep", "Fears sunlight", "Fears the moon", "Fears trees", "“Genius”", "“Gorgeous”", "Hates violence", "“Invisible”", "“Invulnerable”", "“Mon. Ability”", "“Mon. Feature”", "“Monster Trait”", "Must sing", "New Personality", "Says thoughts", "Sees dead people"
    ];
    const randomInsanity = insanities[Math.floor(Math.random() * insanities.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomInsanity}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}

function generateCatastrophe() {
    const outputDiv = document.getElementById('catastrophe-output');
    const catastrophes = [
        "All iron rusts", "Animals die", "Animals mutate", "Birds attack", "City appears", "Deadly fog", "Dream plague", "Endless night", "Endless rain", "Endless storm", "Endless twilight", "Endless winter", "Fae return", "Forest appears", "Forgetfulness", "Graves open", "Lamentations", "Maggots", "Mass insanity", "Mass mutation", "Mass slumber", "Meteor strike", "Mirrors speak", "No stars", "Outsider enters", "People shrink", "People vanish", "Plants wither", "Portal opens", "Rifts open", "Shadows speak", "Stones speak", "Total silence", "Tower appears", "Water to blood"
    ];
    const randomCatastrophe = catastrophes[Math.floor(Math.random() * catastrophes.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomCatastrophe}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}
