import { schoolData } from "./schoolData.js";
import { effectLibrary } from "./effectLibrary.js";

const spellDesc = document.getElementById("spellDesc");
const spellSchoolDisplay = document.getElementById("spellSchool");

const countEffects = () => {
    var result = document.querySelectorAll('.effect').length;
    return result;
}

export const createEffect = (type='damage') => {

    console.log(spellSchoolDisplay.innerHTML);

    if (spellSchoolDisplay.innerHTML == "--") {
        return alert('Please choose a primary school for your spell to continue')
    }

    if (countEffects() >= 5) {
        return alert(`Max Effect Count Reached!\n\nClick an existing effect to remove it`)
    }

    var weight = prompt("Choose a weight of 1-20");

    Number(weight) >= 20 ? weight = 20 : null;

    if(!weight || Number(weight) < 1) { return alert(`Damage / Heal effects must include a rating of 1-20\nThis rating determines how the value will be divided\n\nPlease try again`) }

    var newEffect = document.createElement("div");

    var [aoeChoice,otChoice,diffChoice] = [
        [...document.querySelectorAll(".chooseAoE")].filter((e) => { return e.checked == true})[0].value,
        [...document.querySelectorAll(".chooseOT")].filter((e) => { return e.checked == true})[0].value,
        document.getElementById("diffSelect").value.toLowerCase()];

    var metaData = `school:${spellSchoolDisplay.innerHTML.toLowerCase()};type:${type};aoe:${aoeChoice};ot:${otChoice};diff:${diffChoice};weight:${weight}`;
    var args = metaData.split(";");

    function parseArg(index) {
        return args[index].split(":")[1];
    }

    var effectPreDisplay = [
        parseArg(4) != 'none' ? parseArg(4) : parseArg(0),
        parseArg(1),
        parseArg(2) != 'false' ? 'aoe' : '',
        parseArg(3) != 'false' ? 'overtime' : '',
        `WEIGHT: ${parseArg(5)}`
    ]

    effectPreDisplay = effectPreDisplay.filter((e) => { return e != 'none' && e != '' });

    console.log(effectPreDisplay)

    newEffect.classList.add("effect",`${type}Effect`,metaData);
    newEffect.innerHTML = effectPreDisplay.join(" ").toUpperCase();
    newEffect.addEventListener("click", (e) => {
        var choice = confirm("Are you sure you want to remove this effect from your spell?")
        choice ? e.target.remove() : null;
    })

    spellDesc.appendChild(newEffect);
}

export const handleEffects = (school='Fire',type='Damage',effectName='') => {
    var [pipVal,effectVal] = [0,0];

}

export const updateValue = (target,value) => {
        target.innerHTML = value;
};