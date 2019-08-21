const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  str = str.replace(/ /g, '');
  let arr = str.split('');
  let alphabetCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (alphabetCount[arr[i]]) {
      alphabetCount[arr[i]] += 1;
    } else {
      alphabetCount[arr[i]] = 1;
    }
  }
  return alphabetCount;
};

console.log(countLetterscountLetters("lighthouse in the house"));