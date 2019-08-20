const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`Assertion Passed: First Array: ${arr1} Second Array: ${arr2} === ${expected}`);
  } else {
    console.log(`Assertion Failed: First Array: ${arr1} Second Array: ${arr2} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};

assertArraysEqual([1, 2, 3], [1, 2, 3], true);