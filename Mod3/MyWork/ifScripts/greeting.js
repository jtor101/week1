// Greetings by Hour
// by John Torres
"use strict"

//User Input
var d = new Date();
var currentTime = d.getUTCHours();

// Calculations

if (currentTime < 10) {
    console.log("Good morning! The time is " + currentTime);
} else if (currentTime < 17) {
    console.log("Good day! The time is " + currentTime)
} else {
    console.log("Good evening! The time is " + currentTime)
}