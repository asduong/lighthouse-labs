const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1f605} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f606} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("Bootcamp", "Bootcamp"));

const head = function(arr) {
  return arr[0];
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));