// Federal Tax Withholding Calculation
// by John Torres

"use strict"

var salaryPerMonth = 2000;
var fedTaxRt = .23;

var amtWithheld = salaryPerMonth * fedTaxRt;


console.log("When the federal tax rate is " + fedTaxRt +
    ", the amount of taxes withheld on a $" + salaryPerMonth +
    " per month salary is $" + amtWithheld.toFixed(2) + ".");