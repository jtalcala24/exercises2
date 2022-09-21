//////////////PRELIMS//////////////////

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// const fruit = ["banana", "orange", "apple", "kiwi"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

/////////////////BRONZE////////////////////////
// let numbers = [];

// for (let i = 0; i < 10; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// const newFruit = [];

// for (let i = 0; i < fruit.length; i++) {
//   if (i % 2 === 0) {
//     newFruit.push(fruit[i]);
//   }
// }

// console.log(newFruit);
/////////////////SILVER////////////////////////
// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor",
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer",
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician",
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer",
//   },
// ];

// // ["Harrison Ford", "Vladimir Putin"] // names
// // ["Singer", "Entertainer"] // occupations

// for (let i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }

// let names = [];
// let occupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation);
// }

// console.log(names);
// console.log(occupations);

// names = [];
// occupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
//   if (i % 2 === 0) {
//     names.push(peopleArray[i].name);
//   } else {
//     occupations.push(peopleArray[i].occupation);
//   }
// }

// console.log(names);
// console.log(occupations);

//////////////////GOLD//////////////////
row = [];
newArray = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 1; j++) {
    row.push(0);
  }
  newArray.push(row);
}

console.log(newArray);

newArray = [];

for (let i = 0; i < 3; i++) {
  row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i);
  }
  newArray.push(row);
}

console.log(newArray);

row = [];
newArray = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 1; j++) {
    row.push(i);
  }
  newArray.push(row);
}

console.log(newArray);
