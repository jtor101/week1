// Tax Functions
// by John Torres

"use strict"

// getSocSecTax
function getSocSecTax(grossPay) {
    var socSecTax = grossPay * .062;
    return socSecTax;
}

// getMedicareTax
function getMedicareTax(grossPay) {
    var medicareTax = grossPay * .0145;
    return medicareTax;
}

// getFederalTax
function getFederalTax(grossPay, withholdingCode) {
    var federalTax;
    var fedTaxRt;
    if (withholdingCode == 0) {
        fedTaxRt = .23;
    } else if (withholdingCode == 1) {
        fedTaxRt = .21;
    } else if (withholdingCode == 2) {
        fedTaxRt = .195;
    } else if (withholdingCode == 3) {
        fedTaxRt = .185;
    } else if (withholdingCode >= 40) {
        fedTaxRt = 0;
    } else {
        fedTaxRt = .18 - ((withholdingCode - 4) * .005);
    }
    federalTax = grossPay * fedTaxRt;
    return federalTax;
}

// User Inputs
var myGrossPay = 111100;
var myWithholdingCode = 2;

// Function Calls
var mySocSecTax = getSocSecTax(myGrossPay);
var myMedicareTax = getMedicareTax(myGrossPay);
var myFederalTax = getFederalTax(myGrossPay, myWithholdingCode);

// Console Output
console.log("The Social Security tax on a gross pay of $" + myGrossPay + " is $" + mySocSecTax.toFixed(2));
console.log("The Medicare tax on a gross pay of $" + myGrossPay + " is $" + myMedicareTax.toFixed(2));
if (myWithholdingCode >= 0) {
    console.log("The Federal tax on a gross pay of $" + myGrossPay +
        " with a withholding code of " + myWithholdingCode +
        " is $" + myFederalTax.toFixed(2));
} else {
    console.log("Please enter a withholding code of 0 or greater.");
}