// Hjälpfunktion för att slumpa ur en array
function getRandomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Hjälpfunktion för tärningsslag (2d6)
function rollDice(diceCount, sides) {
    let total = 0;
    for (let i = 0; i < diceCount; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

// Funktion för att slumpa fram en trollformel
function generateRandomSpell() {
    const rowRoll = Math.floor(Math.random() * 6);
    const colRoll = Math.random() < 0.5 ? 0 : 1;
    
    const formulaStr = GAME_DATA.magic.formulas[rowRoll][colRoll];
    const parts = formulaStr.split(' + ');
    
    const comp1 = parts[0].trim();
    const comp2 = parts[1].trim();

    const word1 = getRandomFrom(GAME_DATA.magic.words[comp1]);
    const word2 = getRandomFrom(GAME_DATA.magic.words[comp2]);

    return `${word1} ${word2} (${formulaStr})`;
}

// Huvudfunktion för att skapa karaktär
function generateCharacter() {
    // 1. Grundvärden (3, 4, 5)
    let stats = [3, 4, 5];
    stats.sort(() => Math.random() - 0.5);
    const kropp = stats[0];
    const skill = stats[1];
    const minne = stats[2];

    // 2. Silver: Nuvarande (Startsilver)
    const startSilver = rollDice(2, 6) + 21;
    let currentSilver = startSilver;

    // 3. Talanger & Cirkel (6 ranker totalt)
    let myTalents = {};
    let mySpells = {};

    for (let i = 0; i < 6; i++) {
        if (Math.random() < 0.2) { // 20% chans för magi
            let spell = generateRandomSpell();
            mySpells[spell] = (mySpells[spell] || 0) + 1;
        } else {
            let talentObj = getRandomFrom(GAME_DATA.talents);
            let key = `${talentObj.name} (${talentObj.stat})`;
            myTalents[key] = (myTalents[key] || 0) + 1;
        }
    }

    // 4. Utrustning (Max antal = Kropp, exklusive gratis skydd)
    let inventory = [];

    // Gratis startföremål: Ransoner (kostar 0 silver, men tar 1 plats i Kropp)
    const ransoner = GAME_DATA.gear.find(g => g.name.toLowerCase().includes("ranson"));
    inventory.push(ransoner ? ransoner.name : "Ransoner");

    // A. Köp ett vapen (prioritera Standard, annars Vrakpris)
    const affordableWeapons = GAME_DATA.weapons.filter(w => w.standard <= currentSilver || w.broken <= currentSilver);
    let chosenWeapon = affordableWeapons.length > 0 ? getRandomFrom(affordableWeapons) : GAME_DATA.weapons[0];
    
    let isVrakprisWeapon = chosenWeapon.standard > currentSilver;
    let weaponCost = isVrakprisWeapon ? chosenWeapon.broken : chosenWeapon.standard;
    currentSilver -= weaponCost;
    inventory.push(`${chosenWeapon.name} (${isVrakprisWeapon ? 'Vrakpris' : 'Standard'})`);

    // B. Slumpa resten av utrustningen upp till bärförmågan (Kropp) utan dubbletter
    while (inventory.length < kropp) {
        let affordableGear = GAME_DATA.gear.filter(g => 
            g.price <= currentSilver && !inventory.includes(g.name)
        );

        if (affordableGear.length === 0) break;

        let item = getRandomFrom(affordableGear);
        currentSilver -= item.price;
        inventory.push(item.name);
    }

    // 5. Generera utskriften enligt mallen
    let html = `<div style="border: 1px solid #ccc; padding: 20px; font-family: monospace; background: #fafafa; border-radius: 5px; line-height: 1.6;">`;

    html += `<strong>Namn:</strong><br><br>`;
    html += `<strong>Bakgrund:</strong><br><br>`;
    html += `<strong>Silver:</strong> ${currentSilver} (${startSilver})<br><br>`;

    html += `<strong>Grundvärde</strong> <em>Max / Nuvarande</em><br>`;
    html += `* <em>Kropp</em> ${kropp} / ${kropp}<br>`;
    html += `* <em>Skill</em> ${skill} / ${skill}<br>`;
    html += `* <em>Minne</em> ${minne} / ${minne}<br><br>`;

    html += `<strong>Skydd</strong><br>`;
    html += `* X Lätt (Vrakpris): -1 skada<br>`;
    html += `* O medel: -2 skada, nackdel smyga<br>`;
    html += `* O tungt: -3 skada, nackdel smyga, klättra, simma<br><br>`;

    html += `<strong>Talanger</strong><br>`;
    html += `<em>Vid varje misslyckande sätts en bock. vid vila, slå över 2d6 över rank för att höja. /// Målvärde = Grundvärde + Talang</em><br>`;
    if (Object.keys(myTalents).length === 0) {
        html += `* Inga talanger.<br>`;
    } else {
        for (const [talent, rank] of Object.entries(myTalents)) {
            html += `* O ${talent}. rank: ${rank}<br>`;
        }
    }
    html += `<br>`;

    html += `<strong>Cirkel</strong><br>`;
    html += `<em>Målvärde = Minne + Talang - Cirkel Rank /// X = förberedd</em><br>`;
    if (Object.keys(mySpells).length === 0) {
        html += `* Inga trollformler.<br>`;
    } else {
        for (const [spell, rank] of Object.entries(mySpells)) {
            html += `* O ${spell}. rank: ${rank}<br>`;
        }
    }
    html += `<br>`;

    html += `<strong>Utrustning</strong><br>`;
    // Gratis skydd visas i listan men belastar inte Kropp-gränsen
    html += `* Lätt skydd (Vrakpris)<br>`;
    inventory.forEach(item => {
        html += `* ${item}<br>`;
    });

    html += `</div>`;

    document.getElementById("character-output").innerHTML = html;
}
