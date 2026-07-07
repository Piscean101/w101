import { schoolData } from "./schoolData.js";
import { effectLibrary } from "./effectLibrary.js";

const spellDesc = document.getElementById("spellDesc");
const spellSchoolDisplay = document.getElementById("spellSchool");

const spellCostDisplay = document.getElementById("spellCostPip");
const spellCostInput = document.getElementById("spellCostInput");
const costTempDisplay = document.getElementById("costTempDisplay");
const shadowCostInput = document.getElementById("shadowCostInput");
const spellCostShadowDisplay = document.getElementById("spellCostShadow");

const countEffects = () => {
    var result = document.querySelectorAll('.effect').length;
    return result;
}

export const createEffect = (type='damage') => {

    if (spellSchoolDisplay.innerHTML == "--") {
        return alert('Please choose a primary school for your spell to continue')
    }

    if (countEffects() >= 5) {
        return alert(`Max Effect Count Reached!\n\nClick an existing effect to remove it`)
    }

    var weight = prompt("Choose a weight of 1-20");

    Number(weight) >= 20 ? weight = 20 : null;

    if(!weight || Number(weight) < 1 || isNaN(Number(weight))) { return alert(`Damage / Heal effects must include a number rating of 1-20\nThis rating determines how the total value of the spell will be distributed\n\nPlease try again`) }

    var newEffect = document.createElement("div");

    var [aoeChoice,otChoice,diffChoice] = [
        [...document.querySelectorAll(".chooseAoE")].filter((e) => { return e.checked == true})[0].value,
        [...document.querySelectorAll(".chooseOT")].filter((e) => { return e.checked == true})[0].value,
        document.getElementById("diffSelect").value.toLowerCase()];

    var metaData = `school:${diffChoice == 'none' ? spellSchoolDisplay.innerHTML.toLowerCase() : diffChoice};type:${type};aoe:${aoeChoice};ot:${otChoice};diff:${diffChoice};weight:${weight}`;
    var args = metaData.split(";");

    const parseArg = (index) => {
    return args[index].split(":")[1];
    }

    var effectPreDisplay = [
        parseArg(4) != 'none' ? parseArg(4) : parseArg(0),
        parseArg(1),
        parseArg(2) != 'false' ? 'aoe' : '',
        parseArg(3) == 'true' ? 'overtime' : parseArg(3) == 'def' ? 'deferred' : '',
        `WEIGHT: ${parseArg(5)}`
    ]

    effectPreDisplay = effectPreDisplay.filter((e) => { return e != 'none' && e != '' });

    newEffect.classList.add("effect",`${type}Effect`,metaData);
    newEffect.innerHTML = effectPreDisplay.join(" ").toUpperCase();
    newEffect.addEventListener("click", (e) => {
        // console.log(parseEffectData(e.target));
        var choice = confirm("Are you sure you want to remove this effect from your spell?");
        choice ? e.target.remove() : null;
    })

    spellDesc.appendChild(newEffect);
}

export const calcValue = (effect,factor) => {
    var result = 0;
    var pp = 0;
    var school = parseEffectData(effect)[1][0];
    school = school.charAt(0).toUpperCase() + school.slice(1);
    var type = parseEffectData(effect)[1][1];
    var aoe = parseEffectData(effect)[1][2];
    var ot = parseEffectData(effect)[1][3];
    var weight = parseEffectData(effect)[1][5];
    var spellValue = Number(spellCostInput.value);
    var shadowValue = Number(shadowCostInput.value);
    spellValue += (spellValue - 1) * 0.13;
    switch(type) {
        case 'damage':
            shadowValue != 0 ? pp = schoolData[school].dpp[2] : pp = schoolData[school].dpp[0];
            break;
        case 'heal':
            pp = schoolData[schoo].hpp;
            break;
        default: pp = 0;
        break;
    }
    school == 'Drain' ? pp = 75 : null;
    aoe == 'true' ? pp *= 0.75 : null;
    ot != 'false' ? pp *= 1.25 : null;
    result = Math.round((pp * (spellValue + shadowValue*3.6) * factor / 5)) * 5;
    console.log(result);
    return result;
}

export const convertEffects = () => {
    var resultList = [];
    var currWeight = 0;
    var totalWeight = 0;
    var effectList = document.querySelectorAll(".effect");
    effectList.forEach((e) => {
        currWeight = Number(parseEffectData(e)[1][5]);
        totalWeight += currWeight;
    });
    effectList.forEach((e) => {
        currWeight = Number(parseEffectData(e)[1][5]);
        calcValue(e,currWeight/totalWeight);
    });
}

export const parseEffectData = (effect) => {
    var result = [];
    var data = effect.classList[2];
    var args = data.split(";");
    args.forEach((e) => {
        result.push(e.split(":")[1]);
    });
    return [data,result];
}

export const handleEffects = (school='Fire',type='Damage',effectName='') => {
    var [pipVal,effectVal] = [0,0];

}

export const updateValue = (target,value) => {
        target.innerHTML = value;
};