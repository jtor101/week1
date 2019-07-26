// Discount Calculator
// by John Torres
"use strict"

var subtotal, baseTax, baseSubtotal, discPct;
var tax = .08;

function getInputs() {
    subtotal = Number(document.getElementById("subt").value);
}

function decideDisc() {
    if (subtotal < 100) {
        // If subtotal is less than 100
        discPct = 0;
        console.log("There is no discount on orders under $100");
    } else if (subtotal >= 100 && subtotal < 250) {
        // If subtotal is greater than or equal to 100, but less than 250, 10% off
        discPct = 0.1;
        console.log("You got a 10% discount, leading to a savings of $" + (subtotal * discPct).toFixed(2));
    } else {
        // If subtotal is greater than or equal to 250, 20% off
        discPct = .25;
        console.log("You got a 25% discount, leading to a savings of $" + (subtotal * discPct).toFixed(2));
    }
    subtotal = subtotal * (1 - discPct);
    baseTax = subtotal * tax; // Price Calculations with no discount
    baseSubtotal = subtotal + baseTax;
}

function processTransact() {
    getInputs();
    document.getElementById("subt").value = baseSubtotal;
    document.getElementById("salesTax").value = baseTax;
    document.getElementById("finalTotal").value = subtotal;
}

function init() {
    const discCalcBtn = document.getElementById("discCalc");
    discCalcBtn.onclick = processTransact;
}

window.onload = init;