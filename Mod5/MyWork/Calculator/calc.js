"use strict"

let jNum1, jNum2;

function getNums() {
    jNum1 = Number(document.getElementById("pNum1").value);
    jNum2 = Number(document.getElementById("pNum2").value);
}

function addFx() {
    getNums();
    let sum = jNum1 + jNum2;
    document.getElementById("pAns").value = sum;
}

function subFx() {
    getNums();
    let sub = jNum1 - jNum2;
    document.getElementById("pAns").value = sub;
}

function mulFx() {
    getNums();
    let prod = jNum1 * jNum2;
    document.getElementById("pAns").value = prod;
}

function divFx() {
    getNums();
    let quot = jNum1 / jNum2;
    document.getElementById("pAns").value = quot;
}

function init() {
    const addBtn = document.getElementById("pAdd");
    addBtn.onclick = addFx;
    const subBtn = document.getElementById("pSub");
    subBtn.onclick = subFx;
    const mulBtn = document.getElementById("pMul");
    mulBtn.onclick = mulFx;
    const divBtn = document.getElementById("pDiv");
    divBtn.onclick = divFx;
}

window.onload = init;