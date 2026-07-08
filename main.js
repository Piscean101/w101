import { schoolData, defaultSchoolProfile } from "./schoolData.js";
import { createEffect, convertEffects, updateValue } from "./effectEngine.js";


document.addEventListener("DOMContentLoaded", () => {
    // ** **//

    const buttons = document.querySelectorAll("button");

    buttons.forEach((e) => { e.addEventListener("click", (f) => { f.preventDefault() })});

    //** **//
    
    const spellNameDisplay = document.getElementById("spellName");
    const spellNameInput = document.getElementById("spellNameInput");

    const spellSchoolDisplay = document.getElementById("spellSchool");
    const spellSchoolInput = document.getElementById("schoolSelect");

    const spellCostDisplay = document.getElementById("spellCostPip");
    const spellCostInput = document.getElementById("spellCostInput");
    const costTempDisplay = document.getElementById("costTempDisplay");
    const shadowCostInput = document.getElementById("shadowCostInput");
    const spellCostShadowDisplay = document.getElementById("spellCostShadow");

    const spellAccuracyDisplay = document.getElementById("spellAccuracy");

    const spellTypeDisplay = document.getElementById("spellType");
    const spellTypeInput = document.getElementById("spellTypeInput");

    const addEffectButtons = document.querySelectorAll(".addEffectButton");

    const loreCheck = document.getElementById("loreCheck");

    const chooseOTTime = document.getElementById("chooseOTTime");
    const OTTimeTemp = document.getElementById("OTTimeTemp");

    const chooseDamageRange = document.getElementById("chooseDamageRange");
    const damageRangeTemp = document.getElementById("damageRangeTemp");

    const generateSpell = document.getElementById("generateSpell");

    chooseOTTime.addEventListener("change", (e) => {
        updateValue(OTTimeTemp,e.target.value);
    });

    // chooseDamageRange.addEventListener("change", (e) => {
    //     console.log(chooseDamageRange.value)
    //     updateValue(damageRangeTemp,e.target.value);
    // })

    spellNameInput.addEventListener("change", (e) => {
        updateValue(spellNameDisplay,e.target.value);
    });

    spellSchoolInput.addEventListener("change", (e) => {
        defaultSchoolProfile(e.target.value)
        updateValue(spellSchoolDisplay,e.target.value);
    });

    loreCheck.addEventListener("click", (e) => {
        defaultSchoolProfile(spellSchoolDisplay.innerHTML);
    })

    spellCostInput.addEventListener("change", (e) => {
        updateValue(costTempDisplay,e.target.value);
        Number(e.target.value == 1) ? updateValue(spellCostDisplay,`${e.target.value} Pip`) : updateValue(spellCostDisplay,`${e.target.value} Pips`)
    });

    shadowCostInput.addEventListener("change", (e) => {
        Number(e.target.value) == 0 ? updateValue(spellCostShadowDisplay,''): 
        Number(e.target.value) == 1? updateValue(spellCostShadowDisplay,`${e.target.value} Shadow Pip`) : 
        updateValue(spellCostShadowDisplay,`${e.target.value} Shadow Pips`) ;
    });

    spellTypeInput.addEventListener("change", (e) => {
        updateValue(spellTypeDisplay,e.target.value);
    });

    generateSpell.addEventListener("click", (e) => {
        convertEffects();
    })

    addEffectButtons.forEach((e) => {
        e.addEventListener("click", (f) => {
            createEffect(f.target.id.slice(9).toLowerCase());
        })
    });

})

