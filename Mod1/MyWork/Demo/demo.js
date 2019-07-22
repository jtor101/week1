var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
var totalDue = foodCost + tax + tip;

// simple output
console.log("The total due is " + totalDue);

// or more complicated output
console.log("Food cost is " + foodCost + " and tax is " + tax);
console.log("Tip is " + tip.toFixed(2));
console.log("Total Due is " + totalDue);