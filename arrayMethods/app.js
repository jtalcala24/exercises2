var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

const indexOfOrange = fruit.indexOf("orange");
console.log(indexOfOrange);

fruit.push(indexOfOrange);

console.log(fruit);

const lengthOfVegetables = vegetables.length;
console.log(lengthOfVegetables);

vegetables.push(lengthOfVegetables);
console.log(vegetables);

let food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

let foodString = food.toString();
console.log(foodString);

food = foodString.split(",");
console.log(food);
