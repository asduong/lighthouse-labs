const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);