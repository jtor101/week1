// Federal Tax Calculations with Filing Status
// by John Torres
"use strict"

var incomeRange = 80000;
var filingStatus = "joint";
var taxRate;
var amtTaxed;

// Calculations
if (incomeRange < 12001 && filingStatus == "single") {
    taxRate = .05;
} else if (incomeRange < 25000 && filingStatus == "single") {
    taxRate = .1;
} else if (incomeRange < 75000 && filingStatus == "single") {
    taxRate = .15;
} else if (incomeRange < 12001 && filingStatus == "joint") {
    taxRate = 0;
} else if (incomeRange < 25000 && filingStatus == "joint") {
    taxRate = .06;
} else if (incomeRange < 75000 && filingStatus == "joint") {
    taxRate = .11;
} else {
    taxRate = .2;
}

amtTaxed = incomeRange * taxRate;

console.log("As a " + filingStatus + " filer on a $" +
    incomeRange + " per year income, you will be taxed $" +
    amtTaxed + " at a " + taxRate + " tax rate.");

// Refactor