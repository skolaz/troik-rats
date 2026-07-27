// UNE (c)2014 Zach Best and Conjecture Games - JavaScript Port

const uneData = {
    npcMod: [
        "superfluous", "inept", "pleasant", "lethargic", "jovial", "addicted", "banal", "insensitive", 
        "defiant", "shrewd", "conformist", "logical", "titled", "obnoxious", "liberal", "nefarious", 
        "subtle", "inexperienced", "insightful", "compliant", "sensible", "reputable", "prying", 
        "tactless", "destitute", "untrained", "wicked", "oblivious", "fanatic", "conniving", "romantic", 
        "lazy", "refined", "plebeian", "careful", "unreasonable", "pessimistic", "indispensable", 
        "childish", "alluring", "skilled", "solemn", "scholarly", "pious", "defective", "neglectful", 
        "habitual", "conservative", "uneducated", "optimistic", "lively", "meek", "uncouth", 
        "inconsiderate", "affluent", "forthright", "helpful", "willful", "cultured", "despondent", 
        "idealistic", "unconcerned", "indifferent", "revolting", "mindless", "unsupportive", "generous", 
        "fickle", "curious", "passionate", "rational", "docile", "elderly", "touchy", "devoted", 
        "coarse", "cheery", "sinful", "needy", "established", "foolish", "pragmatic", "naive", 
        "dignified", "unseemly", "cunning", "serene", "privileged", "pushy", "dependable", 
        "delightful", "thoughtful", "glum", "kind", "righteous", "miserly", "hopeless", "likable", 
        "corrupt", "confident"
    ],
    
    npcNoun: [
        "gypsy", "missionary", "villager", "mediator", "performer", "witch", "outcast", "magus", 
        "crook", "magister", "merchant", "mercenary", "conscript", "civilian", "serf", "expert", 
        "caretaker", "worker", "activist", "brute", "commoner", "hermit", "actor", "hero", 
        "inquisitor", "judge", "orator", "herald", "champion", "lord", "ranger", "chieftain", 
        "highwayman", "cleric", "villain", "occultist", "pioneer", "fortune-hunter", "slave", 
        "professor", "reverend", "burglar", "governor", "gunman", "servant", "thug", "vicar", 
        "scrapper", "clairvoyant", "charmer", "drifter", "officer", "monk", "patriarch", 
        "globetrotter", "journeyman", "explorer", "homemaker", "shopkeeper", "sniper", "statesman", 
        "warden", "recluse", "crone", "courtier", "astrologer", "outlaw", "steward", "adventurer", 
        "priest", "duelist", "adept", "polymath", "soldier", "tradesman", "jack-of-all-trades", 
        "bum", "magician", "entertainer", "hitman", "aristocrat", "sorcerer", "traveler", 
        "craftsman", "wizard", "preacher", "laborer", "vagrant", "scientist", "beggar", "artisan", 
        "master", "apprentice", "ascetic", "rogue", "ascendant", "politician", "superior", "warrior"
    ],
    
    motVerb: [
        "advise", "shepherd", "take", "work", "manage", "obtain", "abuse", "discover", "accompany", 
        "suppress", "attempt", "indulge", "deter", "offend", "proclaim", "spoil", "chronicle", 
        "acquire", "guide", "operate", "oppress", "fulfill", "damage", "learn", "access", 
        "interact", "drive", "publicize", "persecute", "refine", "create", "review", "burden", 
        "communicate", "compose", "abduct", "aid", "advocate", "process", "undermine", "promote", 
        "follow", "implement", "report", "explain", "conceive", "advance", "understand", "develop", 
        "discourage", "blight", "guard", "collaborate", "steal", "attend", "progress", "conquer", 
        "strive", "suggest", "detect", "distress", "hinder", "complete", "weaken", "execute", 
        "possess", "plunder", "compel", "achieve", "maintain", "record", "construct", "join", 
        "secure", "realize", "embrace", "encourage", "assist", "inform", "convey", "contact", 
        "agonize", "defile", "patronize", "rob", "pursue", "comprehend", "produce", "depress", 
        "establish", "associate", "administer", "institute", "determine", "overthrow", "prepare", 
        "relate", "account", "seek", "support"
    ],
    
    motNouns: {
        MotNoun1: [
            "wealth", "hardship", "affluence", "resources", "prosperity", "poverty", "opulence", 
            "deprivation", "success", "distress", "contraband", "music", "literature", "technology", 
            "alcohol", "medicines", "beauty", "strength", "intelligence", "force"
        ],
        MotNoun2: [
            "the wealthy", "the populous", "enemies", "the public", "religion", "the poor", "family", 
            "the elite", "academia", "the forsaken", "the law", "the government", "the oppressed", 
            "friends", "criminals", "allies", "secret societies", "the world", "military", "the church"
        ],
        MotNoun3: [
            "dreams", "discretion", "love", "freedom", "pain", "faith", "slavery", "enlightenment", 
            "racism", "sensuality", "dissonance", "peace", "discrimination", "disbelief", "pleasure", 
            "hate", "happiness", "servitude", "harmony", "justice"
        ],
        MotNoun4: [
            "gluttony", "lust", "envy", "greed", "laziness", "wrath", "pride", "purity", "moderation", 
            "vigilance", "zeal", "composure", "charity", "modesty", "atrocities", "cowardice", 
            "narcissism", "compassion", "valor", "patience"
        ],
        MotNoun5: [
            "advice", "propaganda", "science", "knowledge", "communications", "lies", "myths", 
            "riddles", "stories", "legends", "industry", "new religions", "progress", "animals", 
            "ghosts", "magic", "nature", "old religions", "expertise", "spirits"
        ]
    },
    
    power: {
        Order: [
            { name: "much weaker", weight: 2 },
            { name: "slightly weaker", weight: 8 },
            { name: "comparable", weight: 80 },
            { name: "slightly stronger", weight: 8 },
            { name: "much stronger", weight: 2 }
        ],
        Calm: [
            { name: "much weaker", weight: 4 },
            { name: "slightly weaker", weight: 11 },
            { name: "comparable", weight: 70 },
            { name: "slightly stronger", weight: 11 },
            { name: "much stronger", weight: 4 }
        ],
        Standard: [
            { name: "much weaker", weight: 5 },
            { name: "slightly weaker", weight: 15 },
            { name: "comparable", weight: 60 },
            { name: "slightly stronger", weight: 15 },
            { name: "much stronger", weight: 5 }
        ],
        Disarray: [
            { name: "much weaker", weight: 8 },
            { name: "slightly weaker", weight: 17 },
            { name: "comparable", weight: 50 },
            { name: "slightly stronger", weight: 17 },
            { name: "much stronger", weight: 8 }
        ],
        Chaos: [
            { name: "much weaker", weight: 12 },
            { name: "slightly weaker", weight: 18 },
            { name: "comparable", weight: 40 },
            { name: "slightly stronger", weight: 18 },
            { name: "much stronger", weight: 12 }
        ]
    },
    
    convo: {
        Loved: [
            { name: "withdrawn", weight: 1 },
            { name: "guarded", weight: 5 },
            { name: "cautious", weight: 10 },
            { name: "neutral", weight: 15 },
            { name: "sociable", weight: 39 },
            { name: "helpful", weight: 15 },
            { name: "forthcoming", weight: 15 }
        ],
        Friendly: [
            { name: "withdrawn", weight: 2 },
            { name: "guarded", weight: 6 },
            { name: "cautious", weight: 12 },
            { name: "neutral", weight: 20 },
            { name: "sociable", weight: 36 },
            { name: "helpful", weight: 13 },
            { name: "forthcoming", weight: 11 }
        ],
        Peaceful: [
            { name: "withdrawn", weight: 3 },
            { name: "guarded", weight: 8 },
            { name: "cautious", weight: 14 },
            { name: "neutral", weight: 30 },
            { name: "sociable", weight: 27 },
            { name: "helpful", weight: 11 },
            { name: "forthcoming", weight: 7 }
        ],
        Neutral: [
            { name: "withdrawn", weight: 5 },
            { name: "guarded", weight: 10 },
            { name: "cautious", weight: 15 },
            { name: "neutral", weight: 40 },
            { name: "sociable", weight: 15 },
            { name: "helpful", weight: 10 },
            { name: "forthcoming", weight: 5 }
        ],
        Distrustful: [
            { name: "withdrawn", weight: 7 },
            { name: "guarded", weight: 11 },
            { name: "cautious", weight: 28 },
            { name: "neutral", weight: 30 },
            { name: "sociable", weight: 14 },
            { name: "helpful", weight: 7 },
            { name: "forthcoming", weight: 3 }
        ],
        Hostile: [
            { name: "withdrawn", weight: 11 },
            { name: "guarded", weight: 13 },
            { name: "cautious", weight: 37 },
            { name: "neutral", weight: 20 },
            { name: "sociable", weight: 12 },
            { name: "helpful", weight: 5 },
            { name: "forthcoming", weight: 2 }
        ],
        Hated: [
            { name: "withdrawn", weight: 15 },
            { name: "guarded", weight: 15 },
            { name: "cautious", weight: 39 },
            { name: "neutral", weight: 15 },
            { name: "sociable", weight: 10 },
            { name: "helpful", weight: 5 },
            { name: "forthcoming", weight: 0 }
        ]
    }
};

// Helper function to pick a random item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Helper function to pick a weighted random item
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

// Helper to determine 'a' vs 'an'
function getIndefiniteArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word.charAt(0).toLowerCase()) ? 'an' : 'a';
}

// Main generator function
function generateUNE(powerSetting = "Standard", convoSetting = "Neutral") {
    const mod = getRandomItem(uneData.npcMod);
    const noun = getRandomItem(uneData.npcNoun);
    const article = getIndefiniteArticle(mod);
    
    const powerLevel = getWeightedItem(uneData.power[powerSetting] || uneData.power.Standard);
    const convoFeeling = getWeightedItem(uneData.convo[convoSetting] || uneData.convo.Neutral);
    
    // Pick a random motivation column key (MotNoun1 - MotNoun5)
    const columnKeys = Object.keys(uneData.motNouns);
    const randomColumnKey = getRandomItem(columnKeys);
    const selectedMotNounList = uneData.motNouns[randomColumnKey];
    
    // Generate 3 motivations
    const motivations = [];
    for (let i = 0; i < 3; i++) {
        const verb = getRandomItem(uneData.motVerb);
        const motNoun = getRandomItem(selectedMotNounList);
        motivations.push(`${verb} ${motNoun}`);
    }
    
    // Construct HTML output matching the specification template
    const outputHTML = `
        ${article} <b>[${mod}] [${noun}]</b>, who is <u>[${powerLevel}]</u> in ability, is feeling [${convoFeeling}].<br><br>Motivations: <br><br>
        [${motivations[0]}] <br> 
        [${motivations[1]}] <br> 
        [${motivations[2]}] <br>
    `.trim();
    
    return outputHTML;
const outputDiv = document.getElementById('une-output');
    
    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Motståndare</h3>
            <p>${article} <b>[${mod}] [${noun}]</b>, who is <u>[${powerLevel}]</u> in ability, is feeling [${convoFeeling}].</p>
            <p><strong>Motivations:</strong><br>
            - [${motivations[0]}]<br>
            - [${motivations[1]}]<br>
            - [${motivations[2]}]</p>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}
