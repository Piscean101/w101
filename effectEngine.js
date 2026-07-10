import { schoolData } from "./schoolData.js";
import { effectLibrary } from "./effectLibrary.js";

const spellDesc = document.getElementById("spellDesc");
const schoolSelect = document.getElementById("schoolSelect");
const spellSchoolDisplay = document.getElementById("spellSchool");

const spellCostDisplay = document.getElementById("spellCostPip");
const spellCostInput = document.getElementById("spellCostInput");
const costTempDisplay = document.getElementById("costTempDisplay");
const shadowCostInput = document.getElementById("shadowCostInput");
const spellCostShadowDisplay = document.getElementById("spellCostShadow");
const loreCheck = document.getElementById("loreCheck");

const countEffects = () => {
    var result = document.querySelectorAll('.effect').length;
    return result;
};

export const createEffect = (type='damage',secondaryData=['','',0],singleTarget=true) => { 

    /** QUALITY ASSURANCE */
    var schoolName = spellSchoolImg.src.split('/').pop().split('.').shift();
    var [aoeChoice,otChoice,otTime,diffChoice,damageRange] = [
        [...document.querySelectorAll(".chooseAoE")].filter((e) => { return e.checked == true})[0].value,
        [...document.querySelectorAll(".chooseOT")].filter((e) => { return e.checked == true})[0].value,
        document.getElementById("chooseOTTime").value,
        document.getElementById("diffSelect").value.toLowerCase(),
        document.getElementById("chooseDamageRange").value
    ];
    if (spellSchoolImg.classList.contains("hidden") || schoolName == 'loading') { return alert('Please choose a primary school for your spell to continue') };

    if (countEffects() >= 5) { return alert(`Max Effect Count Reached!\n\nSelect an existing effect to remove it`) };
    if (type == 'heal' && otChoice == 'def') { return }
    /**   */

    var newEffect = document.createElement("div"); 

    if (type == 'secondary') {
        newEffect.classList.add("effect","secondaryEffect");
        var secondaryName = secondaryData[0].replace(" ","");
        if (singleTarget) {
            newEffect.classList.add("Single",secondaryName);
        } else {
            newEffect.classList.add("Mass",secondaryName);
        }
        newEffect.innerHTML = secondaryData[0];

    } else {

        var weight = prompt("Enter a weight of 1-20");
    
        Number(weight) >= 20 ? weight = 20 : null;
    
        if(!weight || Number(weight) < 1 || isNaN(Number(weight))) { return alert(`Damage / Heal effects must include a number rating of 1-20. This rating determines the relative potency of each effect\n\nPlease try again`) }
    
        var metaData = `school:${diffChoice == 'none' ? schoolSelect.value : diffChoice};type:${type};aoe:${aoeChoice};ot:${otChoice};time:${otTime};diff:${diffChoice};weight:${weight};range:${damageRange}`;
        var args = metaData.split(";");
    
        const parseArg = (index) => { return args[index].split(":")[1] };
    
        var effectPreDisplay = [
            parseArg(5) != 'none' ? parseArg(5) : parseArg(0),
            parseArg(1),
            Number(parseArg(7)) != 0 && parseArg(1) == 'damage' ? `Range: ${parseArg(7)}` : '',
            parseArg(2) != 'false' ? 'aoe' : '',
            parseArg(3) == 'true' ? 'overtime' : parseArg(3) == 'def' ? 'deferred' : '',
            `WEIGHT: ${parseArg(6)}`
        ];
    
        effectPreDisplay = effectPreDisplay.filter((e) => { return e != 'none' && e != '' });
    
        newEffect.classList.add("effect",`${type}Effect`,metaData);

        type == 'damage' || type == 'heal' ? newEffect.classList.add("calcEffect") : null;

        newEffect.innerHTML = effectPreDisplay.join(" ").toUpperCase();
        
    };
    
    newEffect.addEventListener("click", (e) => {

        if (!e.target.classList.contains("effect")) { return };
        var choice = confirm("Are you sure you want to remove this effect from your spell?");
        choice ? e.target.remove() : null;

    });

    spellDesc.appendChild(newEffect);

};

export const calcValue = (effect,factor,count=0,checkOT=false,effectTax=0) => {
    var [result,pp,calc,min,max] = [[],0,0,0,0];
    var school = parseEffectData(effect)[1][0];
    school = school.charAt(0).toUpperCase() + school.slice(1);
    var type = parseEffectData(effect)[1][1];
    var aoe = parseEffectData(effect)[1][2];
    var ot = parseEffectData(effect)[1][3];
    var otLength = Number(parseEffectData(effect)[1][4]);
    var weight = Number(parseEffectData(effect)[1][6]);
    var range = Number(parseEffectData(effect)[1][7]);
    var spellValue = Number(spellCostInput.value);
    var shadowValue = Number(shadowCostInput.value);
    var schoolIcon = new Image();
    schoolIcon.src = `./images/iconeffects/${school}.png`;
    schoolIcon.classList.add("schoolIcon","spellIcon");
    
    const adjustTax = () => {
        spellValue >= 8 ? effectTax *= 0.5 : null;
        console.log(effectTax);
        spellValue -= effectTax;
        spellValue += (spellValue - 1) * 0.13;
    }

    adjustTax();
    
    if (school == 'Drain') { 

        loreCheck.checked ? pp = 85 : pp = 75;
        
    } else {
        
        switch(type) {    
            case 'damage':
                loreCheck.checked ? pp = schoolData[school].dpp[1] : pp = schoolData[school].dpp[0];
                break;
            case 'heal':
                pp = schoolData[school].hpp;
                break;
            default: pp = 0;
            break;
        }

    }

    school == 'Drain' ? pp = 75 : null;

    if (checkOT == true) {
        pp *= (1.1+(otLength*0.05));
    }

    if (aoe == 'true') {
        pp *= 0.75;
    }

    /** ASSUME VALUE OF SCHOOL PIPS IS 2.6 */
    
    calc = Math.ceil((pp * (spellValue + shadowValue*3.6) * factor / 5)) * 5;

    min = Math.round(calc - range/2);
    max = Math.round(calc + range/2);

    count > 0 ? result.push('and') : null;

    switch (type) {
        case 'damage':
            range > 0 && ot != 'true' ? result.push(`${min} - ${max} <img src='${schoolIcon.src}' class='spellIcon'/>`) : result.push(`${calc} <img src='${schoolIcon.src}' class='spellIcon'/>`);
            result.push(`<img src='./images/iconeffects/Damage.png' class="spellIcon"/>`);
            break;
        case 'heal':
            result.push(`${calc} <img src='./images/iconeffects/Heal.png' class="spellIcon"/>`);
            break;
        default: null; break;
    }

    switch(ot) {
        case 'true':
            result.push(`over ${otLength} <img src='./images/iconeffects/Round.png' class="spellIcon"/>`);
            break;
        case 'def': 
            result.pop();
            result.push(`<img src=./images/iconeffects/Overtime_Def.png> &nbsp; after ${otLength} <img src='./images/iconeffects/Round.png' class="spellIcon"/>`);
            break;
        default: null;
        break;
    }

    if (aoe == 'true') {
        type == 'damage' ? result.push(`<img src='./images/iconeffects/Enemies.png' class="spellIcon"/>`) : result.push(`<img src='./images/iconeffects/Allies.png' class="spellIcon"/>`);
    }

    return result.join(' ');
};

export const calcEffectTax = () => {

    var result = 0;
    var secondaryEffectList = document.querySelectorAll(".secondaryEffect");
    secondaryEffectList.forEach((e) => {
        var name = e.classList[3].replace(" ","");
        result += Number(effectLibrary[e.classList[2]][name].cost);
    });
    secondaryEffectList.length > 0 ? result += 1 : null;
    return result;

};

export const convertEffects = (effectTax = calcEffectTax()) => {
    var resultList = [];
    var currWeight = 0;
    var totalWeight = 0;
    var checkOT = false;
    var effectList = document.querySelectorAll(".calcEffect");
    var secondaryEffectList = document.querySelectorAll(".secondaryEffect");
    effectList.forEach((e) => {
        currWeight = Number(parseEffectData(e)[1][6]);
        totalWeight += currWeight;
        if (parseEffectData(e)[1][3] != 'false' && checkOT == false) {
            checkOT = true;
        }
    });
    effectList.forEach((e,i) => {
        currWeight = Number(parseEffectData(e)[1][6]);
        e.innerHTML = calcValue(e,currWeight/totalWeight,i,checkOT,effectTax);
    });
    secondaryEffectList.forEach((e) => {
        var secondaryEffectDisplay = '';
        var name = e.classList[3].replace(" ","");
        if(e.classList.contains("Single")) {
            secondaryEffectDisplay = effectLibrary['Single'][name].html;
        } else {
            secondaryEffectDisplay = effectLibrary['Mass'][name].html;
        }
        e.innerHTML = secondaryEffectDisplay;
    })
};

export const parseEffectData = (effect) => {
    var result = [];
    var data = effect.classList[2];
    var args = data.split(";");
    args.forEach((e) => {
        result.push(e.split(":")[1]);
    });
    return [data,result];
};

export const handleEffects = (school='Fire',type='Damage',effectName='') => {
    var [pipVal,effectVal] = [0,0];

};

export const updateValue = (target,value) => {
    target.innerHTML = value;
};