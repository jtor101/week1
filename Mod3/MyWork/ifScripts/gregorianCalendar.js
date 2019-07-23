// Leap Year Calculator
// by John Torres
"use strict"

// User Inputs
var testYear = 2000;

if (testYear % 4 == 0 && (testYear % 100 != 0 || testYear % 400 == 0)) {
    console.log(testYear + " is a leap year!");
} else {
    console.log(testYear + " is not a leap year.");
}