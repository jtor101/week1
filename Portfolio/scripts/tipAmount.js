"use strict"

var totalBill
var tipAmount;
var tipPercent = .15;
var foodBill = 150;

tipAmount = foodBill * tipPercent;
totalBill = foodBill + tipAmount;

console.log("The tip on a $" + totalBill.toFixed(2) + " food bill is $" + tipAmount.toFixed(2));