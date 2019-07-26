"use strict"

let hrsWorked = document.getElementById("hrsWorked").value;
hrsWorked = Number(hrsWorked);

let payRate = document.getElementById("payRate").value;
payRate = Number(payRate);

let pay = hrsWorked * payRate;

const resultField = document.getElementById("result");
resultField.innerHTML = "Pay is $" + pay.toFixed(2);