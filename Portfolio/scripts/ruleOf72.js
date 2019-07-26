"use strict"

var svngsAcctCurrVal = 100.50;
var interestRtPercent = 5;
var svngsAcctFutureVal;
var numOfYrs;

numOfYrs = 72 / interestRtPercent;
svngsAcctFutureVal = svngsAcctCurrVal * 2;

console.log("At a " + interestRtPercent + "% interest rate, your savings account will be worth $" + svngsAcctFutureVal.toFixed(2) + " in " + numOfYrs.toFixed(1) + " years ");