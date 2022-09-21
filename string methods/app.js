// => "HELLOhello"
let input = "HelLo";
function capitalizeAndLowercase(input) {
  var upperCase = input.toUpperCase();
  var lowerCase = input.toLowerCase();

  var combined = `${upperCase}${lowerCase}`;

  return combined;
}

console.log(capitalizeAndLowercase(input));

input = "Hello";

function findMiddleIndex(input) {
  const middle = Math.floor(input.length / 2);

  return middle;
}

console.log(findMiddleIndex(input));

input = "hello world";

function returnFirstHalf(input) {
  const half = Math.floor(input.length / 2);
  const answer = input.slice(0, half);
  return answer;
}

console.log(returnFirstHalf(input));

input = "hello world";

function capilizeAndLowercase(input) {
  const length = input.length;
  const half = Math.floor(input.length / 2);

  const sliceFirst = input.slice(0, half);
  const sliceSecond = input.slice(half + 1, length);

  const answerOne = sliceFirst.toUpperCase();
  const answerTwo = sliceSecond.toLowerCase();

  const combined = `${answerOne} ${answerTwo}`;

  return combined;
}

console.log(capilizeAndLowercase(input));
