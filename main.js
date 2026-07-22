import { schoolData, defaultSchoolProfile } from "./schoolData.js";
import { createEffect, convertEffects, updateValue } from "./effectEngine.js";
import { effectLibrary, displayLibrary } from "./effectLibrary.js";
import html2canvas from "./node_modules/html2canvas";


document.addEventListener("DOMContentLoaded", () => {
    // ** **//
    localStorage.removeItem("schoolpip")
    displayLibrary(effectLibrary);
    const buttons = document.querySelectorAll("button");

    buttons.forEach((e) => { e.addEventListener("click", (f) => { f.preventDefault() })});

    //** **//
    
    const spellNameDisplay = document.getElementById("spellName");
    const spellNameInput = document.getElementById("spellNameInput");

    const spellSchoolDisplay = document.getElementById("spellSchool");
    const spellSchoolInput = document.getElementById("schoolSelect");
    const spellSchoolImg = document.getElementById("spellSchoolImg");
    const schoolName = spellSchoolImg.src.split('/').pop().split('.').shift();

    const spellCostDisplay = document.getElementById("spellCostPip");
    const spellCostInput = document.getElementById("spellCostInput");
    const costTempDisplay = document.getElementById("costTempDisplay");
    const shadowCostInput = document.getElementById("shadowCostInput");
    const spellCostShadowDisplay = document.getElementById("spellCostShadow");
    const spellCostSchoolPip = document.getElementById("spellCostSchoolPip");
    const schoolPipInput = document.getElementById("schoolPipInput");

    const spellAccuracyDisplay = document.getElementById("spellAccuracy");

    const spellTypeDisplay = document.getElementById("spellType");
    const spellTypeInput = document.getElementById("spellTypeInput");

    const addEffectButtons = document.querySelectorAll(".addEffectButton");
    const addEffectSecondaryButton = document.getElementById("addEffectSecondary");
    const hiddenEffectPanel = document.getElementById("hiddenEffectWrap");
    const closeHiddenWindow = document.getElementById("closeHiddenWindow");
    const secondaryEffectSelect = document.querySelectorAll(".secondaryEffectSelect");

    const loreCheck = document.getElementById("loreCheck");

    const chooseOTTime = document.getElementById("chooseOTTime");
    const OTTimeTemp = document.getElementById("OTTimeTemp");

    const chooseDamageRange = document.getElementById("chooseDamageRange");
    const damageRangeTemp = document.getElementById("damageRangeTemp");

    const refreshSpellButton = document.getElementById("refreshSpell");

    const generateSpellButton = document.getElementById("generateSpell");

    const download = document.getElementById("download");

    chooseOTTime.addEventListener("change", (e) => {
        updateValue(OTTimeTemp,e.target.value);
    });

    spellNameInput.addEventListener("change", (e) => {
        updateValue(spellNameDisplay,e.target.value);
    });

    spellSchoolInput.addEventListener("change", (e) => {
        defaultSchoolProfile(e.target.value);
        localStorage.setItem("school",e.target.value);
        spellSchoolImg.classList.remove("hidden");
        var schoolIcon = `${e.target.value}.png`;
        e.target.value == '--' ? schoolIcon = 'loading.png' : null;
        var icon = `./images/iconSchool/${schoolIcon}`;
        spellSchoolImg.src = icon;
    });

    schoolPipInput.addEventListener("change", (e) => {
        if (e.target.value == 'none') {
            spellCostSchoolPip.classList.add("hidden");
            localStorage.removeItem("schoolpip");
        } else {
            localStorage.setItem("schoolpip",e.target.value);
            spellCostSchoolPip.classList.contains("hidden") ? spellCostSchoolPip.classList.remove("hidden") : null;
            spellCostSchoolPip.src = `./images/iconpips/${e.target.value}.png`;
        }
    });

    loreCheck.addEventListener("click", (e) => {
        defaultSchoolProfile(spellSchoolInput.value);
    });

    spellCostInput.addEventListener("change", (e) => {
        updateValue(costTempDisplay,e.target.value);
        Number(e.target.value == 1) ? updateValue(spellCostDisplay,`${e.target.value} <img src=./images/iconpips/Pip.png>`) : updateValue(spellCostDisplay,`${e.target.value} <img src=./images/iconpips/Pip.png>`)
    });

    shadowCostInput.addEventListener("change", (e) => {
        Number(e.target.value) == 0 ? updateValue(spellCostShadowDisplay,''): 
        Number(e.target.value) == 1? updateValue(spellCostShadowDisplay,`${e.target.value} <img src=./images/iconpips/Pip_Shadow.png>`) : 
        updateValue(spellCostShadowDisplay,`${e.target.value} <img src=./images/iconpips/Pip_Shadow.png>`) ;
    });

    spellTypeInput.addEventListener("change", (e) => {
        // e.target.value == 'false' ? updateValue(spellTypeDisplay,'--') : updateValue(spellTypeDisplay,e.target.value);
        if (e.target.value == 'false') { return } else {
            spellTypeDisplay.src = `./images/iconschool/${e.target.value}.png`;
        }
    });

    refreshSpellButton.addEventListener("click", (e) => {
        var refreshChoice = confirm("Would you like to remove all active effects?");
        if (!refreshChoice) {
            return
        } else {
            var effectList = document.querySelectorAll(".effect");
            effectList.forEach((e) => { e.remove() });
        }
    });

    generateSpellButton.addEventListener("click", (e) => {
        convertEffects();
    });

    addEffectButtons.forEach((e) => {
        e.addEventListener("click", (f) => {
            createEffect(f.target.id.slice(9).toLowerCase());
        })
    });

    secondaryEffectSelect.forEach((e) => {
        e.addEventListener("click", (f) => {
            if (!f.target.classList.contains("secondaryEffectSelect")) {
                return 
            } else {
                var c = f.target.children;
                if (f.target.classList.contains("singleTarget")) {
                    createEffect('secondary',[c[0].innerHTML,c[1].innerHTML,Number(c[2].innerHTML)]);
                } else {
                    createEffect('secondary',[c[0].innerHTML,c[1].innerHTML,Number(c[2].innerHTML)],false);
                }
                hiddenEffectPanel.classList.add('hidden');
            }
        })
    });

    addEffectSecondaryButton.addEventListener("click", (e) => {
        if (spellSchoolImg.classList.contains("hidden") || schoolName == 'loading') { return alert('Please choose a primary school for your spell to continue') };
        hiddenEffectPanel.classList.remove("hidden");
    });

    closeHiddenWindow.addEventListener("click", (e) => {
        hiddenEffectPanel.classList.add("hidden");
    });

    download.addEventListener("click", () => {
        const spellImg = document.getElementById("spellImage");
        html2canvas(spellImg).then(canvas => {
            var url = canvas.toDataURL("image/png");
            console.log(url);
        })
    })

});

