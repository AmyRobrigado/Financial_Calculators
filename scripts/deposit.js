"use strict";

window.onload = init;

function init() {
    const calBtn = document.getElementById("calBtn");
    const resBtn = document.getElementById("resBtn");

    calBtn.onclick = calBtnOnClick;
    // resBtn.onclick = resBtnOnClick;
}

/* Calculate Button */
function calBtnOnClick() {
    
    const deposit = document.getElementById("deposit");
    const intRate = document.getElementById("intRate");
    const numYears = document.getElementById("numYears");

    let depNum = Number(deposit.value);
    let intNum = Number(intRate.value);
    let yearsNum = Number(numYears.value);

    let apyPercent = intNum / 100;
    //let apyAmount = answer1 (Math.pow(1 + (apyPercent / 365),(365 * answer3)));
    let apyAmount = depNum * (1 + intNum/yearsNum)Math.pow(yearsNum);
    let intEarned = apyAmount - depNum; 

    const futValue = document.getElementById("futValue");
    const totInt = document.getElementById("totInt");

    futValue.value = apyAmount;
    totInt.value = intEarned;
}




