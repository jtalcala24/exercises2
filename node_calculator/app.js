const readline = require("readline-sync");

const number1 = readline.question("Please enter your first number  ");

const number2 = readline.question("Please enter your second number  ");

const operation = readline.question(
  "Please enter the operation to perform: add, sub, mult, div  "
);

const num1 = Number(number1);

const num2 = Number(number2);

const calculator = function calculate(num1, num2) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "sub") {
    return num1 - num2;
  } else if (operation === "mult") {
    return num1 * num2;
  } else if (operation === "div") {
    return num1 / num2;
  } else {
    console.log("not valid operation");
  }
};

console.log(`The result is: ${calculator(num1, num2)}`);
