const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1f605} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f606} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);