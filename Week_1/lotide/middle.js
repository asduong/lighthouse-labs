const assertEqual = function(arr1, arr2, expected) {
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

const middle = function (array) {
  let emptyArr = [];
  if(array.length <= 2) {
    return emptyArr;
   } 
  if(array.length % 2 === 0) {
    emptyArr.push(array[array.length/2 - 1]);
    emptyArr.push(array[array.length/2]);
  } else if (array % 2 !== 0) {
    emptyArr.push(array[(array.length -1) /2]);
  }
  return emptyArr;
};

// assertEqual([1, 2, 3], [1, 2, 3], true);
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([1, 2]));