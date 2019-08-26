const middle = require("../middle");
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual([1, 2, 3], [1, 2, 3], true);
console.log(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
console.log(middle([1, 2]));