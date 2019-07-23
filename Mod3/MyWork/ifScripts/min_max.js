// Min-Max Identifier
// by John Torres
"use strict"

// User Input
var a = 111;
var b = 12;
var c = 13;

// Calculations
if (a > b && a > c) {
    console.log("The max number is a: " + a);
} else if (b > a && b > c) {
    console.log("The max number is b: " + b);
} else {
    console.log("The max number is c: " + c);
}


if (a < b && a < c) {
    console.log("The min number is a: " + a);
} else if (b < a && b < c) {
    console.log("The min number is b: " + b);
} else {
    console.log("The min number is c: " + c);
}