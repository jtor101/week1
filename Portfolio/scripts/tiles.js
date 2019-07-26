// Floor Tiling Demand Calculation
// by John Torres

"use strict"

var rmLength = 12;
var rmWidth = 13;
var rmArea = rmLength * rmWidth;

var tilesPerBox = 12;

var tilesNeeded = Math.ceil(rmArea);
var boxesNeeded = Math.ceil(tilesNeeded / tilesPerBox);

var rmAreaOverage = rmArea * 1.1;
var tilesNeededOverage = Math.ceil(rmAreaOverage);
var boxesNeededOverage = Math.ceil(tilesNeededOverage / 12);


console.log("The room area is " + rmArea +
    " square feet, and each tile is 1 square foot.  If each box contains " +
    tilesPerBox + " tiles, we would need a minimum of " + boxesNeeded +
    " boxes.  If we purchase 10% more tiles, we would need a total of " +
    tilesNeededOverage + " tiles, for a total of " + boxesNeededOverage + " boxes.")