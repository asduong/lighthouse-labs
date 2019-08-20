const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1f605} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f606} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);