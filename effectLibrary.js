const singleEffectField = document.getElementById("singleEffectField");
const massEffectField = document.getElementById("massEffectField");

export const effectLibrary = {
    Single: {
        Absorb: {
            name: 'Absorb',
            cost: 3,
            desc: 'Absorb 400 damage'
        },
        Weakness: {
            name: 'Weakness',
            cost: 0,
            desc: '-25% next outgoing hit'
        },
    },
    Mass: {
        MassAbsorb: {
            name: 'Mass Absorb',
            cost: 4,
            desc: 'Absorb 400 damage to all allies'
        },
        Plague: {
            name: 'Plague',
            cost: 1,
            desc: '-20% next outgoing hit to all enemies'
        }
    }
}

export const createSecondaryEffect = (name,desc,cost,type) => {
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
    type == 'Single' ? singleEffectField.appendChild(newSecondary) : massEffectField.appendChild(newSecondary);
}

export const displayLibrary = (lib) => {
    for (const [key,val] of Object.entries(lib['Single'])) {
        createSecondaryEffect(val.name,val.desc,val.cost,'Single');
    }
    for (const [key,val] of Object.entries(lib['Mass'])) {
        createSecondaryEffect(val.name,val.desc,val.cost,'Mass');
    }
}