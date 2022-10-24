"use strict";

window.onload = init;

function init() {
    const calBtn = document.getElementById("calBtn");
    const resBtn = document.getElementById("resBtn");

    calBtn.onclick = calBtnOnClick;
    resBtn.onclick = resBtnOnClick;
}

/* Calculate Button */
function calBtnOnClick() {
    
    const deposit = document.getElementById("deposit");
    const intRate = document.getElementById("intRate");
    const numYears = document.getElementById("numYears");

    let answer1 = Number(deposit.value);
    let answer2 = Number(intRate.value);
    let answer3 = Number(numYears.value);

    let apyPercent = answer2 / 100;
    let apyAmount = answer1 (Math.pow(1 + (apyPercent / 365),(365 * answer3)));
    let intEarned = apyAmount - answer1; 

    const futValue = document.getElementById("futValue");
    const totInt = document.getElementById("totInt");

    futValue.value = apyAmount;
    totInt.value = intEarned;
}




