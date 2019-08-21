const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`Assertion Passed: First Array: ${arr1} Second Array: ${arr2} === ${expected}`);
  } else {
    console.log(`Assertion Failed: First Array: ${arr1} Second Array: ${arr2} !== ${expected}`);
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


const letterPositions = function(sentence) {
  const results = {};
  let arr = sentence.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== " ") {
      if(results[arr[i]]) {
        results[arr[i]].push(i);
      } else {
        results[arr[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1], true);