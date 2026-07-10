const singleEffectField = document.getElementById("singleEffectField");
const massEffectField = document.getElementById("massEffectField");

export const effectLibrary = {
    Single: {
        Absorb: {
            name: 'Absorb',
            cost: 3,
            desc: 'Absorb 400 damage',
            html: `<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 400 <img src="./images/iconeffects/Damage.png" class="spellIcon"/>`
        },
        Absorb100: {
            name: 'Absorb 100',
            cost: 0,
            desc: 'Absorb 100 damage',
            html: `<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 100 <img src="./images/iconeffects/Damage.png" class="spellIcon"/>`
        },
        Absorb250: {
            name: 'Absorb 250',
            cost: 1,
            desc: 'Absorb 250 damage',
            html: `<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 250 <img src="./images/iconeffects/Damage.png" class="spellIcon"/>`
        },
        Absorb800: {
            name: 'Absorb 800',
            cost: 4,
            desc: 'Absorb 800 damage',
            html: `<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 800 <img src="./images/iconeffects/Damage.png" class="spellIcon"/>`
        },
        BalanceBlade: {
            name: 'Balance Blade',
            cost: 0,
            desc: '+25% next outgoing hit',
            html: `+25% <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        DeathBlade: {
            name: 'Death Blade',
            cost: 0,
            desc: '+35% next outgoing Death hit',
            html: `+35% <img src="./images/iconeffects/Death.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        FireBlade: {
            name: 'Fire Blade',
            cost: 0,
            desc: '+35% next outgoing Fire hit',
            html: `+35% <img src="./images/iconeffects/Fire.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        IceBlade: {
            name: 'Ice Blade',
            cost: 0,
            desc: '+35% next outgoing Ice hit',
            html: `+35% <img src="./images/iconeffects/Ice.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        LifeBlade: {
            name: 'Life Blade',
            cost: 0,
            desc: '+35% next outgoing Life hit',
            html: `+35% <img src="./images/iconeffects/Life.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        MythBlade: {
            name: 'Myth Blade',
            cost: 0,
            desc: '+35% next outgoing Myth hit',
            html: `+35% <img src="./images/iconeffects/Myth.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        StormBlade: {
            name: 'Storm Blade',
            cost: 0,
            desc: '+35% next outgoing Storm hit',
            html: `+35% <img src="./images/iconeffects/Storm.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        Stun: {
            name: 'Stun',
            cost: 0,
            desc: 'Stun Target for 1 Round',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> Target for 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        StunDouble: {
            name: 'Stun Double',
            cost: 1,
            desc: 'Stun Target for 2 Rounds',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> Target for 2 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        Weakness: {
            name: 'Weakness',
            cost: 0,
            desc: '-25% next outgoing hit',
            html: '-25% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/>'
        },
    },
    Mass: {
        MassAbsorb: {
            name: 'Mass Absorb',
            cost: 4,
            desc: 'Absorb 400 damage to all allies',
            html: '<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 400 <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>'
        },
        Plague: {
            name: 'Plague',
            cost: 1,
            desc: '-20% next outgoing hit to all enemies',
            html: '-20% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>'
        },
        StunAll: {
            name: 'Stun All',
            cost: 2,
            desc: 'Stun all enemies for 1 Round',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/> for 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
    }
};

export const createSecondaryEffectSelect = (name,desc,cost,type) => {
    const newSecondary = document.createElement("div");
    const newName = document.createElement("span");
    const newDesc = document.createElement("span");
    const newCost = document.createElement("span");
    newSecondary.classList.add("secondaryEffectSelect");
    newName.classList.add("secName");
    newDesc.classList.add("secDesc");
    newCost.classList.add("secCost");
    newName.innerHTML = name;
    newDesc.innerHTML = desc;
    newCost.innerHTML = cost;
    newSecondary.appendChild(newName);
    newSecondary.appendChild(newDesc);
    newSecondary.appendChild(newCost);
    if  (type == 'Single') {
        newSecondary.classList.add("singleTarget");
        singleEffectField.appendChild(newSecondary)
    } else {
        newSecondary.classList.add("massTarget");
        massEffectField.appendChild(newSecondary);
    }
}

export const displayLibrary = (lib) => {
    for (const [key,val] of Object.entries(lib['Single'])) {
        createSecondaryEffectSelect(val.name,val.desc,val.cost,'Single');
    }
    for (const [key,val] of Object.entries(lib['Mass'])) {
        createSecondaryEffectSelect(val.name,val.desc,val.cost,'Mass');
    }
};