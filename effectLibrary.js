const singleEffectField = document.getElementById("singleEffectField");
const massEffectField = document.getElementById("massEffectField");

export const findSchool = () => {
    var school = localStorage.getItem("school");
    return school;
}

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
        // BalanceBlade: {
        //     name: 'Balance Blade',
        //     cost: 0,
        //     desc: '+25% next outgoing hit',
        //     html: `+25% <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
        Beguile: {
            name: 'Beguile',
            cost: 3,
            desc: 'Beguile Target for 1 Round',
            html: `<span class="effectKeyword">Beguile</span>&nbsp; Target 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        CleanseCharm: {
            name: 'Cleanse Charm',
            cost: 0,
            desc: 'Remove 1 Negative Charm',
            html: 'Remove <img src="./images/iconeffects/Charm_Neg.png" class="spellIcon"/>'
        },
        CleanseWard: {
            name: 'Cleanse Ward',
            cost: 0,
            desc: 'Remove 1 Negative Ward',
            html: `Remove <img src="./images/iconeffects/Ward_Neg.png" class="spellIcon"/>`
        },
        Confusion: {
            name: 'Confusion',
            cost: 1,
            desc: 'Confuse Target',
            html: `<span class="effectKeyword"/>Confuse</span> <img src="./images/iconeffects/Enemy.png" class="spellIcon"/> (1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>)`
        },
        Confusion50: {
            name: 'Confusion50',
            cost: 0,
            desc: '50% chance to Confuse Target',
            html: `50% &nbsp;<span class="effectKeyword"/>Confuse</span> <img src="./images/iconeffects/Enemy.png" class="spellIcon"/> (1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>)`
        },
        // DeathBlade: {
        //     name: 'Death Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Death hit',
        //     html: `+35% <img src="./images/iconeffects/Death.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
        Disarm: {
            name: 'Disarm',
            cost: 0,
            desc: 'Remove Positive Charm',
            html: `Remove <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        DisarmDouble: {
            name: 'Disarm Double',
            cost: 1,
            desc: 'Remove 2 Positive Charms',
            html: `Remove 2 <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        DisarmTriple: {
            name: 'Disarm Triple',
            cost: 2,
            desc: 'Remove 3 Positive Charms',
            html: `Remove 3 <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        DonatePower: {
            name: 'Donate Power',
            cost: 1,
            desc: 'Donate 2 Pips',
            html: 'Give 2 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> to Target',
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
        // FireBlade: {
        //     name: 'Fire Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Fire hit',
        //     html: `+35% <img src="./images/iconeffects/Fire.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
        Enfeeble: {
            name: 'Enfeeble',
            cost: 3,
            desc: 'Remove all positive Charms',
            html: `Remove all <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        Feint: {
            name: 'Feint',
            cost: 1,
            desc: '+70% next hit on Target +30% next hit on Self',
            html: `+30% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> Target +30% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> Self`
        },
        GuardianSpirit: {
            name: 'Guardian Spirit',
            cost: 5,
            desc: 'Target regains life after defeat',
            html: 'Target regains 15% <img src="./images/iconeffects/Heal.png" class="spellIcon"/> after being defeated'
        },
        GuidingLight: {
            name: 'Guiding Light',
            cost: 0,
            desc: '+35% next outgoing heal',
            html: `+35% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell`
        },
        // IceBlade: {
        //     name: 'Ice Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Ice hit',
        //     html: `+35% <img src="./images/iconeffects/Ice.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
        Infection: {
            name: 'Infection',
            cost: 0,
            desc: '-65% next outgoing heal',
            html: `-65% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell`
        },
        Infection55: {
            name: 'Infection 55',
            cost: 0,
            desc: '-55% next outgoing heal',
            html: `-55% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> spell`,
        },
        // LifeBlade: {
        //     name: 'Life Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Life hit',
        //     html: `+35% <img src="./images/iconeffects/Life.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
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
        // MythBlade: {
        //     name: 'Myth Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Myth hit',
        //     html: `+35% <img src="./images/iconeffects/Myth.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
        Pacify: {
            name: 'Pacify',
            cost: 0,
            desc: 'Pacify Self 1 Round',
            html: `<img src="./images/iconeffects/Pacify.png" class="spellIcon"/> Self 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        Pierce: {
            name: 'Pierce',
            cost: 0,
            desc: 'Remove Positive Ward',
            html: `Remove <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
        },
        PierceDouble: {
            name: 'Pierce Double',
            cost: 1,
            desc: 'Remove 2 Positive Wards',
            html: `Remove 2 <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
        },
        PierceTriple: {
            name: 'Pierce Triple',
            cost: 2,
            desc: 'Remove 3 Positive Wards',
            html: `Remove 3 <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        Purge: {
            name: 'Purge',
            cost: 2,
            desc: 'Remove 3 Negative Charms',
            html: `Remove 3 <img src="./images/iconeffects/Charm_Neg.png" class="spellIcon"/>`
        },
        SchoolAura: {
            name: 'School Aura',
            cost: 0,
            desc: '+25% outgoing School-based damage for 4 rounds'
        },
        SchoolBlade: {
            name: 'School Blade',
            cost: 0,
            desc: '+35% next outgoing School-based attack',
            // html: `+35% <img src="./images/iconeffects/Fire.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        },
        SchoolFeint: {
            name: 'School Feint',
            cost: 1,
            desc: '+70% next School-based hit to Target +30% next hit to Self'
        },
        SchoolGlobal: {
            name: 'School Global',
            cost: 2,
            desc: '+25% all School-based attacks'
        },
        SchoolPrism: {
            name: 'School Prism',
            cost: 0,
            desc: `Convert next School-based hit`
        },
        SchoolShield: {
            name: 'School Shield',
            cost: 0,
            desc: '-80% next incoming School-based attack',
        },
        SchoolTrap: {
            name: 'School Trap',
            cost: 0,
            desc: '40% next incoming School-based attack'
        },
        Shatter: {
            name: 'Shatter',
            cost: 3,
            desc: 'Remove all positive Wards',
            html: `Remove all <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
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
        StealCharm: {
            name: 'Steal Charm',
            cost: 1,
            desc: 'Steal Positive Charm',
            html: `<span class="effectKeyword">Steal</span> <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        StealCharmDouble: {
            name: 'Steal Charm Double',
            cost: 2,
            desc: 'Steal 2 Positive Charms',
            html: `<span class="effectKeyword">Steal</span> 2 <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        StealCharmTriple: {
            name: 'Steal Charm Triple',
            cost: 3,
            desc: 'Steal 3 Positive Charms',
            html: `<span class="effectKeyword">Steal</span> 3 <img src="./images/iconeffects/Charm.png" class="spellIcon"/>`
        },
        StealPip: {
            name: 'Steal Pip',
            cost: 0,
            desc: 'Steal 1 Pip from target',
            html: `<span class="effectKeyword">Steal</span> 1 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> from Target`
        },
        StealWard: {
            name: 'Steal Ward',
            cost: 1,
            desc: 'Steal Positive Ward',
            html: `<span class="effectKeyword">Steal</span> <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
        },
        StealWardDouble: {
            name: 'Steal Ward Double',
            cost: 2,
            desc: 'Steal 2 Positive Wards',
            html: `<span class="effectKeyword">Steal</span> 2 <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
        },
        StealWardTriple: {
            name: 'Steal Ward Triple',
            cost: 3,
            desc: 'Steal 3 Positive Wards',
            html: `<span class="effectKeyword">Steal</span> 3 <img src="./images/iconeffects/Ward.png" class="spellIcon"/>`
        },
        // StormBlade: {
        //     name: 'Storm Blade',
        //     cost: 0,
        //     desc: '+35% next outgoing Storm hit',
        //     html: `+35% <img src="./images/iconeffects/Storm.png" class="spellIcon"/> <img src="./images/iconeffects/Blade.png" class="spellIcon"/>`
        // },
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
        Taunt: {
            name: 'Taunt',
            cost: 0,
            desc: 'Taunt Enemy for 1 Round',
            html: `<img src="./images/iconeffects/Taunt.png" class="spellIcon"/> 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
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
        Windstorm: {
            name: 'Windstorm',
            cost: 1,
            desc: '+25% next Storm hit to all Enemies',
            html: `+25% to next <img src="./images/iconeffects/Storm.png" class="spellIcon"/> <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        }
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
            cost: 4.5,
            desc: 'Absorb 400 damage to all allies',
            html: '<img src="./images/iconeffects/Absorb.png" class="spellIcon"/> 400 <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>'
        },
        MassGuardianSpirit: {
            name: 'Mass Guardian Spirit',
            cost: 6.5,
            desc: 'All Allies regain 15% Health after being defeated',
            html: '15% <img src="./images/iconeffects/Heal.png" class="spellIcon"/> after being defeated <img src="./images/iconeffects/Allies.png" class="spellIcon"/>'
        },
        MassInfection: {
            name: 'Mass Infection',
            cost: 1,
            desc: '-45% next Heal to all enemies',
            html: `-45% next <img src="./images/iconeffects/Heal.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        },
        MassManaAttack: {
            name: 'Mass Mana Attack',
            cost: 3,
            desc: '-2 Pips to all enemies',
            html: `-2 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        },
        MassManaBurn: {
            name: 'Mass Mana Burn',
            cost: 4,
            desc: '-3 Pips to all Enemies',
            html: `-3 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        },
        MassStunShield: {
            name: 'Mass Stun Shield',
            cost: 1,
            desc: 'Block next inc. Stun to all allies',
            html: `Block next inc. <img src="./images/iconeffects/Stun.png" class="spellIcon"/> <img src="./images/iconeffects/Allies.png" class="spellIcon"/>`
        },
        MassStealPip: {
            name: 'Mass Steal Pip',
            cost: 2,
            desc: 'Steal 1 Pip from all enemies',
            html: '<span class="effectKeyword">Steal</span> 1 <img src="./images/iconeffects/Pip.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>'
        },
        MassStun: {
            name: 'Mass Stun',
            cost: 1,
            desc: 'Stun all enemies for 1 Round',
            html: `<img src="./images/iconeffects/Stun.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/> for 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/>`
        },
        MassTaunt: {
            name: 'Mass Taunt',
            cost: 1,
            desc: 'Taunt all Enemies',
            html: `<img src="./images/iconeffects/Taunt.png" class="spellIcon"/> 1 <img src="./images/iconeffects/Round.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>`
        },
        Plague: {
            name: 'Plague',
            cost: 1,
            desc: '-20% next outgoing hit to all enemies',
            html: '-20% next <img src="./images/iconeffects/Damage.png" class="spellIcon"/> <img src="./images/iconeffects/Enemies.png" class="spellIcon"/>'
        },
        VirulentPlague: {
            name: 'Virulent Plague',
            cost: 2,
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
};

export const displayLibrary = (lib) => {
    for (const [key,val] of Object.entries(lib['Single'])) {
        createSecondaryEffectSelect(val.name,val.desc,val.cost,'Single');
    }
    for (const [key,val] of Object.entries(lib['Mass'])) {
        createSecondaryEffectSelect(val.name,val.desc,val.cost,'Mass');
    }
};