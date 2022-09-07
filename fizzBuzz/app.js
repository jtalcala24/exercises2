let fizz = 0;
let buzz = 0;
let fizzBuzz = 0;

let count = [];
let fizzArr = [];
let buzzArr = [];
let fizzBuzzArr = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
function fizzle() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      fizzBuzz++;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      buzz++;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      fizz++;
    } else {
      console.log(i);
    }
  }

  // count.push(`FizzBuzz: ${fizzBuzz}`);
  // count.push(`Fizz: ${fizz}`);
  // count.push(`Buzz: ${buzz}`);
  // return count;
  fizzBuzzArr.push(`fizzbuzz`);
  fizzBuzzArr.push(fizzBuzz);
  buzzArr.push(`buzz`);
  buzzArr.push(buzz);
  fizzArr.push(`fizz`);
  fizzArr.push(fizz);
  count.push(fizzBuzzArr);
  count.push(fizzArr);
  count.push(buzzArr);
  const obj = Object.fromEntries(count);
  return obj;
}

console.log(fizzle());
