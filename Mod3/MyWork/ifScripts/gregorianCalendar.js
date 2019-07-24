// Leap Year Calculator
// by John Torres
"use strict"

// User Input
var testYear = 2001;

if (testYear % 4 == 0 && (testYear % 100 != 0 || testYear % 400 == 0)) {
    document.getElementById("answer").innerHTML = testYear + " is a leap year!";
    console.log(testYear + " is a leap year!");
} else {
    document.getElementById("answer").innerHTML = testYear + " is not a leap year.";
    console.log(testYear + " is not a leap year.");
}