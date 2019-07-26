// Leap Year Calculator
// by John Torres
"use strict"

// User Input
let testYear;

function getTestYear() {
    testYear = Number(document.getElementById("testYear").value);
}

function lyTest() {
    getTestYear();
    if (testYear % 4 == 0 && (testYear % 100 != 0 || testYear % 400 == 0)) {
        document.getElementById("lyAns").value = testYear + " is a leap year!";
    } else {
        document.getElementById("lyAns").value = testYear + " is not a leap year.";
    }
}

function init() {
    const lyCalcBtn = document.getElementById("lyCalc");
    lyCalcBtn.onclick = lyTest;
}

window.onload = init;