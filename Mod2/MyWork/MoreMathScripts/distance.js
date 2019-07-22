// Distance Formula
// by John Torres

"use strict"

var xcoor1 = 8;
var xcoor2 = 4;
var ycoor1 = 3;
var ycoor2 = 6;

var xcoorfinal = Math.pow((xcoor2 - xcoor1), 2);
var ycoorfinal = Math.pow((ycoor2 - ycoor1), 2);
var distanceFormula = Math.sqrt(xcoorfinal + ycoorfinal);


console.log("When the first coordinate is located at (" +
    xcoor1 + "," + ycoor1 + ") and the second coordinate is located at (" +
    xcoor2 + "," + ycoor2 + "), the distance between the two points is " + distanceFormula + ".");