// Overtime Pay Calculator
// by John Torres
"use strict"

// User Inputs
var payRate = 15;
var hoursWorked = 50;

var overtimeHours = hoursWorked - 40;

var grossPay = payRate * hoursWorked;
var overtimePay = overtimeHours * payRate;

// if hoursWorked > 40, pay increases by 1.5 for hours over 40.
if (hoursWorked > 40) {
    overtimePay *= 1.5;
} else {
    overtimeHours = 0;
    overtimePay = 0;
}

var totalPay = grossPay + overtimePay;

console.log("Your gross pay is $" + grossPay);
console.log("You worked " + overtimeHours + " hours of overtime.");
console.log("You earned $" + overtimePay + " in overtime pay.");
console.log("Your total pay is $" + totalPay);