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

const flatten = function(arr) {
  let tempArr = arr.toString().split(',');
  for(let i = 0; i < tempArr.length; i++) {
    tempArr[i] = parseInt(tempArr[i]); 
  }
  return tempArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
// assertArraysEqual([1, 2, 3], [1, 2, 3], true);