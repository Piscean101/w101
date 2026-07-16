const singleEffectField = document.getElementById("singleEffectField");
const massEffectField = document.getElementById("massEffectField");

//** ADD ALL SCHOOL
// MINIONS SHIELDS GLOBALS
// TRAPS/CONVERTS AURAS
//  */

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
        AddPip: {
            name: 'Add Pip',
            cost: 0,
            desc: '+1 Pip Self',
            html: `+1 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> <img src="./images/iconeffects/Caster.png" class="spellIcon"/>`
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
        ElementalBlade: {
            name: 'Elemental Blade',
            cost: 1,
            desc: '+35% next outgoing Fire, Storm and Ice hits',
            html: `+35% <img src="./images/iconeffects/Damage.png" class="spellIcon"/> to next <img src="./images/iconeffects/Fire.png" class="spellIcon"/>, <img src="./images/iconeffects/Ice.png" class="spellIcon"/> and <img src="./images/iconeffects/Storm.png" class="spellIcon"/> spells`
        },
        ElementalTrap: {
            name: 'Elemental Trap',
            cost: 1,
            desc: '+30% next incoming Fire, Ice and Storm hits',
            html: `+30% <img src="./images/iconeffects/Damage.png" class="spellIcon"/><img src="./images/iconeffects/Trap.png" class="spellIcon"/> to next <img src="./images/iconeffects/Fire.png" class="spellIcon"/>, <img src="./images/iconeffects/Ice.png" class="spellIcon"/> and <img src="./images/iconeffects/Storm.png" class="spellIcon"/> spells`
        },
        FireBlade: {
            name: 'Fire Blade',
            cost: 0,
            desc: '+35% next outgoing Fire hit',
            html: `+35% <img src="./images/iconeffects/Fire.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        GuidingLight: {
            name: 'Guiding Light',
            cost: 0,
            desc: '+35% next outgoing heal',
            html: `+35% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell`
        },
        IceBlade: {
            name: 'Ice Blade',
            cost: 0,
            desc: '+35% next outgoing Ice hit',
            html: `+35% <img src="./images/iconeffects/Ice.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        Infection: {
            name: 'Infection',
            cost: 0,
            desc: '-65% next outgoing heal',
            html: `-65% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell`
        },
        LifeBlade: {
            name: 'Life Blade',
            cost: 0,
            desc: '+35% next outgoing Life hit',
            html: `+35% <img src="./images/iconeffects/Life.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        ManaAttack: {
            name: 'Mana Attack',
            cost: 1,
            desc: '-2 Pips from target',
            html: `-2 <img src="./images/iconeffects/Pip.png" class="spellIcon"/>`
        },
        ManaBurn: {
            name: 'Mana Burn',
            cost: 2,
            desc: '-3 Pips from target',
            html: `-3 <img src="./images/iconeffects/Pip.png" class="spellIcon"/>`
        },
        MythBlade: {
            name: 'Myth Blade',
            cost: 0,
            desc: '+35% next outgoing Myth hit',
            html: `+35% <img src="./images/iconeffects/Myth.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        SpiritBlade: {
            name: 'Spirit Blade',
            cost: 1,
            desc: '+35% next outgoing Life, Myth and Death hits',
            html: `+35% <img src="./images/iconeffects/Damage.png" class="spellIcon"/> to next <img src="./images/iconeffects/Life.png" class="spellIcon"/>, <img src="./images/iconeffects/Myth.png" class="spellIcon"/> and <img src="./images/iconeffects/Death.png" class="spellIcon"/> spells`
        },
        SpiritTrap: {
            name: 'Spirit Trap',
            cost: 1,
            desc: '+30% next incoming Life, Myth and Death hits',
            html: `+30% <img src="./images/iconeffects/Damage.png" class="spellIcon"/><img src="./images/iconeffects/Trap.png" class="spellIcon"/> to next <img src="./images/iconeffects/Life.png" class="spellIcon"/>, <img src="./images/iconeffects/Myth.png" class="spellIcon"/> and <img src="./images/iconeffects/Death.png" class="spellIcon"/> spells`
        },
        StealPip: {
            name: 'Steal Pip',
            cost: 0,
            desc: 'Steal 1 Pip from target',
            html: `Steal 1 <img src="./images/iconeffects/Pip.png" class="spellIcon"/>`
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
        StunBlock: {
            name: 'Stun Block',
            cost: 0,
            desc: 'Block next 2 incoming stuns',
            html: `Block next 2 inc. <img src="./images/iconeffects/Stun.png" class="spellIcon"/>`
        },
        StunDouble: {
            name: 'Stun Double',
            cost: 1,
            desc: 'Stun Target for 2 Rounds',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> Target for 2 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        StunShield: {
            name: 'Stun Shield',
            cost: 0,
            desc: 'Block next incoming stun',
            html: `Block next inc. <img src="./images/iconeffects/Stun.png" class="spellIcon"/>`
        },
        ThreefoldFever: {
            name: 'Threefold Fever',
            cost: 2,
            desc: '-65% next 3 outgoing heal spells',
            html: `-65% next 3 <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spells`
        },
        TowerShield: {
            name: 'Tower Shield',
            cost: 0,
            desc: '-50% next incoming hit',
            html: `-50% next <img src="./images/iconeffects/Incoming.png" class="spellIcon"/> <img src="./images/iconeffects/Damage_Drain.png" class="spellIcon"/>`
        },
        Weakness: {
            name: 'Weakness',
            cost: 0,
            desc: '-25% next outgoing hit',
            html: '-25% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/>'
        },
    },



    Mass: {
        BladeStorm: {
            name: 'Blade Storm',
            cost: 1,
            desc: '+20% next outgoing hit to all allies',
            html: `+20% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        BrilliantLight: {
            name: 'Brilliant Light',
            cost: 1,
            desc: '+30% next heal to all allies',
            html: `+30% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        Guidance: {
            name: 'Guidance',
            cost: 1,
            desc: '+20% accuracy to next spell to all allies',
            html: `+20% <img src="./images/iconeffects/Accuracy.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        LegionShield: {
            name: 'Legion Shield',
            cost: 1,
            desc: '-30% next incoming hit to all allies',
            html: `-30% next <img src="./images/iconeffects/Incoming.png" class="spellIcon"/> <img src="./images/iconeffects/Damage_Drain.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        MassAbsorb: {
            name: 'Mass Absorb',
            cost: 4,
            desc: 'Absorb 400 damage to all allies',
            html: '<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 400 <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>'
        },
        MassInfection: {
            name: 'Mass Infection',
            cost: 1,
            desc: '-45% next Heal to all enemies',
            html: `-45% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        },
        MassStunShield: {
            name: 'Mass Stun Shield',
            cost: 1,
            desc: 'Block next inc. Stun to all allies',
            html: `Block next inc. <img src="./images/iconeffects/Stun.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        Plague: {
            name: 'Plague',
            cost: 1,
            desc: '-20% next outgoing hit to all enemies',
            html: '-20% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>'
        },
        StunAll: {
            name: 'Stun All',
            cost: 1,
            desc: 'Stun all enemies for 1 Round',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/> for 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        VirulentPlague: {
            name: 'Virulent Plague',
            cost: 0,
            desc: '-40% next outgoing hit to all enemies',
            html: `-40% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
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