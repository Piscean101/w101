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

    var [aoeChoice,otChoice,otTime,diffChoice,damageRange] = [
        [...document.querySelectorAll(".chooseAoE")].filter((e) => { return e.checked == true})[0].value,
        [...document.querySelectorAll(".chooseOT")].filter((e) => { return e.checked == true})[0].value,
        document.getElementById("chooseOTTime").value,
        document.getElementById("diffSelect").value.toLowerCase(),
        document.getElementById("chooseDamageRange").value
    ];

    var metaData = `school:${diffChoice == 'none' ? spellSchoolDisplay.innerHTML.toLowerCase() : diffChoice};type:${type};aoe:${aoeChoice};ot:${otChoice};time:${otTime};diff:${diffChoice};weight:${weight};range:${damageRange}`;
    var args = metaData.split(";");

    const parseArg = (index) => {
    return args[index].split(":")[1];
    }

    var effectPreDisplay = [
        parseArg(5) != 'none' ? parseArg(5) : parseArg(0),
        parseArg(1),
        Number(parseArg(7)) != 0 && parseArg(1) == 'damage' ? `Range: ${parseArg(7)}` : '',
        parseArg(2) != 'false' ? 'aoe' : '',
        parseArg(3) == 'true' ? 'overtime' : parseArg(3) == 'def' ? 'deferred' : '',
        `WEIGHT: ${parseArg(6)}`
    ]

    effectPreDisplay = effectPreDisplay.filter((e) => { return e != 'none' && e != '' });

    newEffect.classList.add("effect",`${type}Effect`,metaData);
    type == 'damage' || type == 'heal' ? newEffect.classList.add("calcEffect") : null;
    newEffect.innerHTML = effectPreDisplay.join(" ").toUpperCase();
    newEffect.addEventListener("click", (e) => {
        // console.log(parseEffectData(e.target));
        var choice = confirm("Are you sure you want to remove this effect from your spell?");
        choice ? e.target.remove() : null;
    })

    spellDesc.appendChild(newEffect);

}

export const calcValue = (effect,factor,count=0) => {

    var [result,pp,calc] = [[],0,0];
    var school = parseEffectData(effect)[1][0];
    school = school.charAt(0).toUpperCase() + school.slice(1);
    var type = parseEffectData(effect)[1][1];
    var aoe = parseEffectData(effect)[1][2];
    var ot = parseEffectData(effect)[1][3];
    var otLength = Number(parseEffectData(effect)[1][4]);
    var weight = Number(parseEffectData(effect)[1][6]);
    var spellValue = Number(spellCostInput.value);
    var shadowValue = Number(shadowCostInput.value);
    spellValue += (spellValue - 1) * 0.13;

    switch(type) {    
        case 'damage':
            shadowValue != 0 ? pp = schoolData[school].dpp[0] : pp = schoolData[school].dpp[0];
            break;
        case 'heal':
            pp = schoolData[school].hpp;
            break;
        default: pp = 0;
        break;
    }

    if (ot != 'false') {
        pp *= (1.1+(otLength*0.05));
    }
    
    calc = Math.ceil((pp * (spellValue + shadowValue*3.6) * factor / 5)) * 5;

    count > 0 ? result.push('and') : null;

    switch (type) {
        case 'damage':
            result.push(`${calc} ${school} Damage`);
            break;
        case 'heal':
            result.push(`Heal ${calc}`);
            break;
        default: null; break;
    }

    switch(ot) {
        case 'true':
            result.push(`over ${otLength} Rounds`);
            break;
        case 'def': 
            result.push(`after ${otLength} Rounds`);
            break;
        default: null; break;
    }

    if (aoe == 'true') {
        type == 'damage' ? result.push('to all enemies') : result.push('to all allies');
        pp *= 0.75;
    }

    school == 'Drain' ? pp = 75 : null;
    return result.join(' ');
}

export const convertEffects = () => {
    var resultList = [];
    var currWeight = 0;
    var totalWeight = 0;
    var effectList = document.querySelectorAll(".calcEffect");
    effectList.forEach((e) => {
        currWeight = Number(parseEffectData(e)[1][6]);
        totalWeight += currWeight;
    });
    effectList.forEach((e,i) => {
        currWeight = Number(parseEffectData(e)[1][6]);
        e.innerHTML = calcValue(e,currWeight/totalWeight,i);
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