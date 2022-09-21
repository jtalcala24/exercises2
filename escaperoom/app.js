const readline = require("readline-sync");

const answer = readline.question(
  "What do you want to do? 1. Put hand in hole? (press 1) 2. Find the key? (press 2) 3. Open the door? (press 3)"
);
if (answer == 1) {
  console.log("You died, why didn't you look for the key you dingus?");
} else if (answer == 2) {
  const keyAnswer = readline.question(
    "You have found the key, now what? 1. Put hand in hole? (press 1) 2. Find the key? (press 2) 3. Open the door?"
  );
  if (keyAnswer == 1) {
    console.log(
      "You DIED! Why wouldn't you just open the door and leave you dingus!?"
    );
  } else if (keyAnswer == 2) {
    console.log(
      "You already have a key, why would you look for another one dingus!?"
    );
  } else if (keyAnswer == 3) {
    console.log("You Escaped! Congrats, you're not a dingus!");
  } else {
    console.log("Invalid input, you dingus!");
  }
} else if (answer == 3) {
  const doorAnswer = readline.question(
    "You need a key for the door dingus! What do you want to do now? 1. Put hand in the hole (Press 1) 2. Look for key (press 2)"
  );
  if (doorAnswer == 1) {
    console.log("You DIED!Why did you do that you dingus!?");
  } else if (doorAnswer == 2) {
    const secondTry = readline.question(
      "What do you want to do? 1. Put hand in hole? (press 1) 2. Find the key? (press 2) 3. Open the door? (press 3)"
    );
    if (secondTry == 1) {
      console.log("You DIED! All you had to do was open the door dingus!!");
    } else if (secondTry == 2) {
      console.log("Why are you looking for another key? You have one dingus!");
    } else if (secondTry == 3) {
      console.log("You escaped! You're not a dingus after all");
    } else {
      console.log("Invalid input you dingus!");
    }
  } else {
    console.log("Invalid input, you dingus!");
  }
}
