import { updateValue } from "./effectEngine.js";
import { effectLibrary } from "./effectLibrary.js";

const spellAccuracyDisplay = document.getElementById("spellAccuracy");
const loreCheck = document.getElementById("loreCheck");

export const schoolData = {
    // ** MISSING : ASTRAL ELEMENTAL AND SPIRIT DATA **//
    Fire: {
        name: 'Fire',
        dpp: [100,110,125],
        acc: 75,
        hpp: 150
    },
    Ice: {
        name: 'Ice',
        dpp: [83,93,105],
        acc: 80,
        hpp: 120
    },
    Storm: {
        name: 'Storm',
        dpp: [125,135,140],
        acc: 70,
        hpp: 120
    },
    Death: {
        name: 'Death',
        dpp: [85,95,110],
        acc: 85,
        hpp: 120
    },
    Balance: {
        name: 'Balance',
        dpp: [85,95,110],
        acc: 85,
        hpp: 150
    },
    Life: {
        name: 'Life',
        dpp: [83,93,105],
        acc: 90,
        hpp: 200
    },
    Myth: {
        name: 'Myth',
        dpp: [90,100,115],
        acc: 80,
        hpp: 125
    },

    //**  **/?

    Elemental: {
        name: 'Elemental',
        /* Fire Ice Storm */
        dpp: [((100 + 83 + 125) / 3)]
    },
    Spirit: {
        name: 'Spirit',
        /* Life Death Myth */
        dpp: [((83 + 85 + 90) / 3)]
    },

    // ** ** //

    Sun: {
        name: 'Sun',
        /* Myth Life Fire */
        dpp: [((90 + 83 + 100) / 3)]
    },
    Moon: {
        name: 'Moon',
        /* Ice Death Myth */
        dpp: [((83 + 85 + 90) / 3)]
    },
    Star: {
        name: 'Star',
        /* Life Storm Death */
        dpp: [((83 + 125 + 85) / 3)]
    }
};

export const defaultSchoolProfile = (school) => {
        switch(school) {
            case 'Shadow':
            case 'Sun':
            case 'Moon':
            case 'Star':
            case '--':
            updateValue(spellAccuracyDisplay,`100%`);
            break;
            default: 
            updateValue(spellAccuracyDisplay,`${schoolData[school].acc}%`);
        }
        loreCheck.checked ? updateValue(spellAccuracyDisplay,`${Number(spellAccuracyDisplay.innerHTML.slice(0,-1))-5}%`) : null;
};

export const changeCardBackground = () => {}