// Charter Van Rental Cost Calculation
// by John Torres

"use strict"

var totalPassengers = 38;

var vanCost = 250;
var vanCapacity = 15;

var totalNumberOfVans = Math.ceil(totalPassengers / vanCapacity);
var totalCost = totalNumberOfVans * vanCost;

var costPerPerson = Math.ceil((totalCost / totalPassengers) * 100) / 100;


console.log("If " + totalPassengers +
    " people want to go on the trip, we will need to charter " + totalNumberOfVans +
    " vans to accommadate everyone.  The total cost would be $" + totalCost +
    ".  As a result, each person would have to pay $" + costPerPerson.toFixed(2) + ".")