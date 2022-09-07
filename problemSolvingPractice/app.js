// test data
// console.log(largest([6, 13, 250, 3])); // => 250
// console.log(largest([3, 5, 2, 8, 1])); // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])); // => 40

// let array = [6, 13, 250, 3];
// let array = [3, 5, 2, 8, 1];
let array = [-13, 40, 3, 0, 19, 22];

function largest() {
  let largestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

console.log(largest(array));

// test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// array = ["$hello!", "%%^%%", "test!"]
array = ["#3", "$$$", "C%4!", "Hey!"];
array = ["yellow", "green", "^up^", "down", "dog"];
let character = "!";
character = "h";
let newArray = [];

function lettersWithStrings(array, character) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(character)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(lettersWithStrings(array, character));

// test data
console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false

function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(10, 6));
