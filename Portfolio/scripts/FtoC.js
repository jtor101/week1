// Fahrenheit to Celsius Conversion
// by John Torres

"use strict"

let tempFah;

function getFah() {
    tempFah = Number(document.getElementById("tempF").value);
}

function fToC() {
    getFah();
    let fahCalc = (tempFah - 32) * (5 / 9);
    document.getElementById("cAns").value = fahCalc;
}

function init() {
    const calcFBtn = document.getElementById("cCalc");
    calcFBtn.onclick = fToC;
}

window.onload = init;