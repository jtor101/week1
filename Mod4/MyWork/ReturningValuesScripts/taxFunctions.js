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
    if (withholdingCode == 0) {
        var federalTax = grossPay * .23;
        return federalTax;
    } else if (withholdingCode == 1) {
        var federalTax = grossPay * .21;
        return federalTax;
    } else if (withholdingCode == 2) {
        var federalTax = grossPay * .195;
        return federalTax;
    } else if (withholdingCode == 3) {
        var federalTax = grossPay * .185;
        return federalTax;
    } else {
        var federalTax = grossPay * (.18 - ((withholdingCode - 4) * .005));
        return federalTax;
    }
}

// User Inputs
var myGrossPay = 1100;
var myWithholdingCode = 6;

// Function Calls
var mySocSecTax = getSocSecTax(myGrossPay);
var myMedicareTax = getMedicareTax(myGrossPay);
var myFederalTax = getFederalTax(myGrossPay, myWithholdingCode);

// Console Output
console.log("The Social Security tax on a gross pay of $" + myGrossPay + " is $" + mySocSecTax.toFixed(2));
console.log("The Medicare tax on a gross pay of $" + myGrossPay + " is $" + myMedicareTax.toFixed(2));
console.log("The Federal tax on a gross pay of $" + myGrossPay + " with a withholding code of " + myWithholdingCode + " is $" + myFederalTax.toFixed(2));