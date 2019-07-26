// Celsius To Fahrenheit Conversion
// by John Torres

"use strict"

let tempCel;

function getCel() {
    tempCel = Number(document.getElementById("tempC").value);
}

function cToF() {
    getCel();
    let celCalc = tempCel * (9 / 5) + 32;
    document.getElementById("fAns").value = celCalc;
}

function init() {
    const calcCBtn = document.getElementById("fCalc");
    calcCBtn.onclick = cToF;
}

window.onload = init;