// Distance Formula
// by John Torres
"use strict"

// User Input
let xcoor1, xcoor2, ycoor1, ycoor2;

function getCoordinates() {
    xcoor1 = Number(document.getElementById("xc1").value);
    xcoor2 = Number(document.getElementById("xc2").value);
    ycoor1 = Number(document.getElementById("yc1").value);
    ycoor2 = Number(document.getElementById("yc2").value);
}

function disTest() {
    getCoordinates();
    let xcoorfinal = Math.pow((xcoor2 - xcoor1), 2);
    let ycoorfinal = Math.pow((ycoor2 - ycoor1), 2);
    let disFormula = Math.sqrt(xcoorfinal + ycoorfinal);
    document.getElementById("disAns").value = disFormula;
}

function init() {
    const disCalcBtn = document.getElementById("disCalc");
    disCalcBtn.onclick = disTest;
}

window.onload = init;