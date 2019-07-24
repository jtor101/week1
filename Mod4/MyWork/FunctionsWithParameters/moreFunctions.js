// More Functions
// by John Torres

"use strict"

// Mailing Label function
function displayMailingLabel(name, address, city, state, zip) {
    console.log("Name: " + name);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Zip: " + zip);
}

// Mailing Label User Input
var myName = "Michael Irvin";
var myAddress = "Cowboys Stadium";
var myCity = "Arlington";
var myState = "TX";
var myZip = "76001";
displayMailingLabel(myName, myAddress, myCity, myState, myZip);


// Add Number function
function addNumbers(num1, num2) {
    var addResult = num1 + num2;
    console.log("The addition result is " + addResult);
}

// Add Number User Input
var myNum1 = 10
var myNum2 = 10
addNumbers(myNum1, myNum2);


// Subtract Number function
function subNumbers(num3, num4) {
    var subResult = num3 - num4;
    console.log("The subtraction result is " + subResult);
}

// Subtract Number User Input
var myNum3 = 10
var myNum4 = 10
subNumbers(myNum3, myNum4);


// Multiply Number function
function multiNumbers(num5, num6) {
    var multiResult = num5 * num6;
    console.log("The multiplication result is " + multiResult);
}

// Multiply Number User Input
var myNum5 = 10
var myNum6 = 10
multiNumbers(myNum5, myNum6);


// Divide Number function
function divNumbers(num7, num8) {
    var divResult = num7 / num8;
    console.log("The division result is " + divResult);
}

// Divide Number User Input
var myNum7 = 10
var myNum8 = 10
divNumbers(myNum7, myNum8);



// Display Receipt function
function displayReceipt(totalDue, amountPaid) {
    var changeDue = amountPaid - totalDue;
    if (amountPaid < totalDue) {
        console.log("You owe us $" + (totalDue - amountPaid).toFixed(2));
    } else {
        console.log("Total Due: $" + totalDue.toFixed(2));
        console.log("Amount Paid: $" + amountPaid.toFixed(2));
        console.log("Your change is $" + changeDue.toFixed(2));
    }
}

// Display Receipt User Input
var myTotalDue = 210
var myAmountPaid = 209
displayReceipt(myTotalDue, myAmountPaid);