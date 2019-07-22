"use strict"

var fedTaxRt = .23;
var salaryPerMonth = 15430.05;
var amtWithheld = salaryPerMonth * fedTaxRt;

console.log("When the federal tax rate is " + fedTaxRt + ", the amount of taxes withheld on a $" + salaryPerMonth + " per month salary is $" + amtWithheld.toFixed(2))