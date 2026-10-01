const rarities = ["D", "C", "B", "A", "S", "SS", "SSS"];
const rarity_names = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Ethereal"]
const type = ["cpu", "gpu", "psu", "router"] // etc...
const cpu_terms = ["Hack Damage", "Hack Critical Damage Chance", "True Damage", "Hack Armor Penetration", "Hack Critical Damage Bonus"]
const gpu_terms = ["Idle Crypto Mining", "More Crypto Reward", "Better Banter"]
const psu_terms = ["Crypto Mining Power"]
const fw_terms = ["Firewall Health", "Firewall Damage Reduction", "Firewall Regeneration", "Firewall Advanced Encryption", "Firewall Master Encryption"]
const suffix = ["n00b", "n3t", "Zypher", "Macrohard", "GoGo", "Meta", "Amazonas", 
    "syry", "32ty", "robo+", "νεο", "G4Y", "MEGA", "s1lk", "GG", "Orange", "X", "chad", 
    "phish", "anon", "Bug", "H.A.I.", "WeiWei", "DM0D", "Orwell's", 
    "M8x", "mrD", "Skynet", "3D", "S1", "S2", "S3"
]
const avatars = ["otter", "gobo", "dwarf", "ascii-bunny", "crow", "ascii-r2", "elf", "yourboss", "ascii-rip", "ascii-snowman", "hobbit",
    "santaelf2", "knight", "ascii-vader", "santaelf", "ravenbot", "ravenguy", "juice", "cipher", "edgy", "s1-wolfgirl-2", "elrond", "trinity2",
    "alex", "s1-pumpkin", "thief", "garyhost", "s1-horseman", "franceball", "smasher", "gothgirl3", "syry", "bigbrother2", "matrix2", "catgirl",
    "anonymous", "nyancat", "foxgirl", "cam", "gothgirl5", "gothgirl4", "zenko", "ashley", "skxll", "eastergirl", "mrd", "skull", "zucc", "lilly",
    "sadeg", "hai", "hackergirl", "gardenwitch", "anongirl", "npc", "botnet", "doggo", "anon", "zenon", "skynet", "rona", "pepe", "skip", "1337",
    "gillbates", "alphastop", "trinity1", "ne-o", "josh", "dread", "greatfirewall", "ascii-pepe-wine", "bronzecrown", "s1-cat", "ascii-cat",
    "ascii-cat-2", "ascii-cat-3", "matrix1", "valenia", "name_color_yellow", "usaball", "xmas2023", "germanyball", "ukball", "cassettegirl", "wojak",
    "ball-southkorea", "ball-japan", "ball-turkey", "ball-spain", "glitchgirl", "name_plate_green", "name_color_green", "ascii-hackeru", "ascii-linux",
    "nyx", "ascii-troll", "ascii-amogus", "name_plate_yellow", "legion", "ascii-puffy", "monalisa", "tim", "ascii-onion", "gothgirl2", "puddy",
    "ascii-pumpkin", "gothgirl1", "avocuteo", "slimey", "gothgirl6", "name_plate_orange", "name_color_orange", "ascii-monkey", "silver", "rarefrog",
    "fishstock", "ascii-ghost", "ascii-b2", "lenia", "ascii-skull", "name_plate_silver", "name_color_silver", "miku", "klaus", "name_plate_red", 
    "name_color_red", "kitsune", "discordmod", "bigbrother1", "name_plate_blue", "name_color_blue", "asmodea", "ascii-shark", "ascii-tank", "gpt", 
    "bea", "bikini", "cowboy", "dragongirl", "easterbunny", "eastermage", "gardenguardian", "navin", "pepeanon", "pepehacker", "s1-doll", 
    "s1-pumpkinwitch-1", "s1-pumpkinwitch-2", "s1-reaper", "s1-scarecrow", "s1-vampire", "s1-wolfgirl-1", "shadowpriestess", "xenia", "ascii-teddy"
];
const avatar_types = ["profile", "terminal", "plate", "color"]
const printable_ascii = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»ÁÂÀ©ãÃ¤ðÐÊËÈıÍÎÏ¦ÌÓßÔÒõÕµþÞÚÛÙýÝ¯´≡±‗√ⁿ²■·¸°¨¹ŠšŽžŒœŸ§®³¶¾"
/*
 * @author: d0t
 * A custom base200 encoding to maximize the amount of information that can be stored in singular characters
 */ 
const base200_encode = (int) => {
    if (typeof int !== 'bigint' || int < 0n) throw new Error("Input must be a non-negative BigInt.");
    if (int < 200n) return printable_ascii[Number(int)];
    return base200_encode(int / 200n) + printable_ascii[Number(int % 200n)];
};
/*
 * @author: d0t
 * Decodes base200 encoding. Uses BigInt notation to handle huge abstractions (e.g. an entire item).
 */ 
const base200_decode = (str, acc = 0n, seen = false) => {
    if (typeof str !== 'string' || str.length === 0) {
        if (!seen) throw new Error("Input must be a non-empty base200 string.");
        return acc;
    }
    const idx = BigInt(printable_ascii.indexOf(str[0]));
    if (idx === -1n) throw new Error(`Invalid character '${str[0]}' in base200 string.`);
    return base200_decode(str.slice(1), acc * 200n + idx, true);
};

/*
 * @author: d0t
 * @version: 2
 * Encodes a game item's statistics into a ~21 character long code, made with custom base200 encoding.
 * Supports up to 1,000,000 mint #. Does not support profiles (yet).
 * e.g.: 1p Mythic Firewall -> dEI@.ôzéaÊû₧¿]-Õbo-³H
 * [2] Decreased encode length by ~1 char on average. Added avatar support. (dEI#)
 */
const dEI_encode = (dt_d, suffix_d, mint_d, rarity_d, type_d, lvl_d, p_d, data) => {
    const avatar_idx = avatars.indexOf(type_d);
    if (avatar_idx !== -1) {
        let mint_t = 999999n;
        if (mint_d >= 1 && mint_d < 1e6) mint_t = BigInt(mint_d - 1);
        const premium_t = (data && data.premium) ? 1n : 0n;
        const rarity_t = BigInt(rarity_names.findIndex(r => r.toLowerCase() === rarity_d.toLowerCase()));
        const dt_t = BigInt(Math.floor((new Date(dt_d) - new Date("2020-01-01T00:00:00.000Z")) / 864e5));
        return "dEI#" + base200_encode(((((premium_t*4000n+dt_t)*1000000n+mint_t)*7n+rarity_t)*200n+BigInt(avatar_idx))*4n);
    }
    if (data.length > 0 && !["cpu","gpu","psu","router"].includes(type_d)) throw new Error(`Item type mismatched (expected item instead received '${type_d}')`);
    const header = "dEI@";
    const dt_t = BigInt(Math.floor((new Date(dt_d) - new Date("2020-01-01T00:00:00.000Z")) / 864e5));
    const rarity_t = BigInt(rarities.findIndex(r => r.toLowerCase() === rarity_d.toLowerCase()));
    const type_t = BigInt(type.indexOf(type_d));
    const suffix_t = BigInt(suffix.indexOf(suffix_d));
    const terms_d  = data.map(s => s.name);
    const layout_t = BigInt(getStatHeaderIndex(terms_d,type_d == "cpu" ? cpu_terms : type_d == "gpu" ? gpu_terms : type_d == "psu" ? psu_terms : type_d == "router" ? fw_terms : null));
    const mint_t = BigInt(mint_d - 1); const lvl_t = BigInt(lvl_d - 1); const p_t = BigInt(p_d - 1);
    let stats_t = 0n;
    if (["cpu","gpu","psu","router"].includes(type_d) && data.length > 0) {
        for (let i = data.length-1; i > 0; i--) {
            stats_t = stats_t*BigInt(1e4) + BigInt(Math.round(data[i]["value"]*100));
        }
        const stat = data[0];
        stats_t = stats_t*(type_d == "gpu" ? 10000n : 100000n) + BigInt(Math.round(stat["value"]*(type_d == "gpu" ? 1e7 : 1e2)));
    }
    return header + base200_encode((((((((stats_t*100n+p_t)*10n+lvl_t)*32n+suffix_t)*7n+rarity_t)*100000n+mint_t)*4000n+dt_t)*65n+layout_t)*4n+type_t);
}


/*
 * @author: d0t
 * @version: 2
 * Decodes a dEI encoding back into game item statistics.
 * e.g.: {creationDate:..., mint:..., rarity:..., etc.}
 * [2] Only compatible with new dEI encoding function. Can also decode avatars now (dEI#)
 */
const dEI_decode = (thing) => {
    if (thing.substring(0,4) === "dEI#") {
        var decoded = base200_decode(thing.substring(4));
        decoded = decoded / 4n;
        const avatar_idx = Number(decoded % 200n); decoded = decoded / 200n;
        const rarity_t = Number(decoded % 7n); decoded = decoded / 7n;
        const mint_t = Number(decoded % 1000000n); decoded = decoded / 1000000n;
        const dt_d = new Date(new Date("2020-01-01T00:00:00.000Z").getTime() + Number(decoded % 4000n) * 864e5).toISOString(); decoded = decoded / 4000n;
        const premium_d = Boolean(Number(decoded % 2n));
        const mint_d = (mint_t === 999999) ? -1 : (mint_t + 1);
        const rarity_d = rarity_names[rarity_t];
        const type_d = avatars[avatar_idx];
        return { type: type_d, rarity: rarity_d, mint: mint_d, premium: premium_d, creationDate: dt_d };
    } else if (thing.substring(0,4) === "dEI@") {
        var decoded = base200_decode(thing.substring(4));
        const type_d = type[Number(decoded % 4n)]; decoded = decoded / 4n;
        const layout_d = decoded % 65n; decoded = decoded / 65n;
        const dt_d = new Date(new Date("2020-01-01T00:00:00.000Z").getTime() + Number(decoded % 4000n) * 864e5).toISOString(); decoded = decoded / 4000n;
        const mint_d = Number(decoded % 100000n) + 1; decoded = decoded / 100000n;
        const rarity_d = rarities[Number(decoded % 7n)]; decoded = decoded / 7n;
        const suffix_d = suffix[Number(decoded % 32n)]; decoded = decoded / 32n;
        const lvl_d = Number(decoded % 10n) + 1; decoded = decoded / 10n;
        const p_d = Number(decoded % 100n) + 1; decoded = decoded / 100n;
        const _terms = getStatHeaders(layout_d, type_d == "cpu" ? cpu_terms : type_d == "gpu" ? gpu_terms : type_d == "psu" ? psu_terms : type_d == "router" ? fw_terms : null);
        let stats = [];
        stats.push({
            "name": _terms[0],
            "value": Number(decoded % (type_d == "gpu" ? 10000n : 100000n)) / (type_d == "gpu" ? 1e7 : 1e2)
        });
        decoded = decoded / (type_d == "gpu" ? 10000n : 100000n);
        for (let j = 1; j < _terms.length; j++) {
            stats.push({
                "name": _terms[j],
                "value": Number(decoded % 10000n) / 100
            });
            decoded = decoded / 10000n;
        }
        return { creationDate: dt_d, mint: mint_d, rarity: rarity_d, type: type_d, suffix: suffix_d, upgradeLevel: lvl_d, percentile: p_d, stats: stats };
    } else {
        throw new Error("Unparsable encode header.");
    }
}

const getStatHeaders = (index, termlist) => {
    if (!Array.isArray(termlist) || termlist.length === 0)
        throw new Error("Term list must be a non-empty array.");

    const base = termlist.slice(1);

    const permutations = (arr) => {
        if (arr.length === 0) return [[]];
        return arr.flatMap((v, i) => 
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)])
                .map(p => [v, ...p])
        );
    };

    let results = [];

    for (let i = 0; i < (1 << base.length); i++) {
        let subset = base.filter((_, idx) => (i & (1 << idx)) !== 0);
        let perms = permutations(subset);
        perms.forEach(p => results.push([termlist[0], ...p]));
    }

    if (index < 0 || index >= results.length)
        throw new Error("Index out of bounds.");

    return results[index];
};

const getStatHeaderIndex = (stats, termlist) => {
    if (!Array.isArray(stats) || !Array.isArray(termlist) || termlist.length === 0)
        throw new Error("Both stats and termlist must be non-empty arrays.");

    const base = termlist.slice(1);

    const permutations = (arr) => {
        if (arr.length === 0) return [[]];
        return arr.flatMap((v, i) =>
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)])
                .map(p => [v, ...p])
        );
    };

    let results = [];

    for (let i = 0; i < (1 << base.length); i++) {
        let subset = base.filter((_, idx) => (i & (1 << idx)) !== 0);
        let perms = permutations(subset);
        perms.forEach(p => results.push([termlist[0], ...p]));
    }

    const statNames = stats.map(s => s.name || s); // works with either stat objects or just string names
    const matchIndex = results.findIndex(r =>
        r.length === statNames.length &&
        r.every((val, i) => val === statNames[i])
    );

    if (matchIndex === -1)
        throw new Error("Given stat combination does not match any known layout.");

    return matchIndex;
};

export default { dEI_encode, dEI_decode };
