// Celsius To Fahrenheit Conversion
// by John Torres

"use strict"

// Celsius To Fahrenheit Conversion Function
function convertCtoF(myCurrentTemp) {
    var fahTemp = myCurrentTemp * (9 / 5) + 32;
    return fahTemp
}

// Celsius To Fahrenheit Conversion User Input
var currentTemp = 100;
var fahTemp = convertCtoF(currentTemp);

console.log("The temperature is " + fahTemp + " degrees Fahrenheit");