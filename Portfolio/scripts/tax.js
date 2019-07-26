"use strict"

let grossPay, withCode;

function getInputs() {
    grossPay = Number(document.getElementById("grossPayInput").value);
    withCode = Number(document.getElementById("withCodeInput").value);
}
// getSocSecTax
function getSocSecTax(grossPay) {
    let socSecTax = grossPay * .062;
    return socSecTax;
}

// getMedicareTax
function getMedicareTax(grossPay) {
    let medtax = grossPay * .0145;
    return medtax;
}

// getFederalTax
function getFederalTax(grossPay, withCode) {
    let federalTax, fedTaxRt;
    if (withCode == 0) {
        fedTaxRt = .23;
    } else if (withCode == 1) {
        fedTaxRt = .21;
    } else if (withCode == 2) {
        fedTaxRt = .195;
    } else if (withCode == 3) {
        fedTaxRt = .185;
    } else if (withCode >= 40) {
        fedTaxRt = 0;
    } else {
        fedTaxRt = .18 - ((withCode - 4) * .005);
    }
    federalTax = grossPay * fedTaxRt;
    return federalTax;
}

function processPayroll() {
    getInputs();
    let sstax = getSocSecTax(grossPay);
    let medtax = getMedicareTax(grossPay);
    let fedtax = getFederalTax(grossPay, withCode);
    document.getElementById("ssAns").value = sstax.toFixed(2);
    document.getElementById("mcAns").value = medtax.toFixed(2);
    document.getElementById("fedAns").value = fedtax.toFixed(2);
}



function init() {
    const taxCalcBtn = document.getElementById("taxCalc");
    taxCalcBtn.onclick = processPayroll;

}

window.onload = init;

// grossPay
// withholding

// SSTax
// MCTax
// FedTax