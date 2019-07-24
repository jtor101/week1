// Fahrenheit to Celsius Conversion 
// by John Torres

"use strict"

// Fahrenheit to Celsius Conversion Function
function convertFtoC(myCurrentTemp) {
    var celsiusTemp = (myCurrentTemp - 32) * (5 / 9);
    return celsiusTemp
}

// Fahrenheit to Celsius Conversion User Input
var currentTemp = 212;
var celsiusTemp = convertFtoC(currentTemp);

console.log("The temperature is " + celsiusTemp + " degrees Celsius");