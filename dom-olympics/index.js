///QUALFIER ////////////////////////////////

const header = document.getElementById("header");
const newHeader = document.createElement("h1");
const smallerHeader = document.createElement("h3");
const spanName = document.createElement("span");

//BIG HEADER //
newHeader.textContent = "JavaScript Made This!!";

header.append(newHeader);

//SMALL HEADER //
smallerHeader.textContent = "wrote the JavaScript";

header.append(smallerHeader);

// SPAN name//
spanName.innerHTML = "Tyler " + " ";
smallerHeader.prepend(spanName);
spanName.style.color = "#FEDABA";

//BRONZE////////////////////////////////////////////////

document.querySelector(".message-one").textContent = "I'm all out of LOVE.";

document.querySelector(".message-two").textContent =
  "I'm SOOO lost without you!";

document.querySelector(".message-three").textContent = "I know you were Right!";

document.querySelector(".message-four").textContent =
  "Believing for SOOO LONG!";

//Query Selector ALL not working...???
const clear = document.querySelector("#clear-button");

clear.addEventListener("click", clearMessages);

function clearMessages() {
  document.querySelector(".messages").textContent = "";
}

//SILVER ////////////////////////////////////////

const dropDown = document.querySelector("#theme-drop-down");
const leftMessages = document.querySelectorAll(".left");
const rightMessages = document.querySelectorAll(".right");

dropDown.addEventListener("change", changeTheme);

function changeTheme() {
  if (dropDown.value === "theme-two") {
    for (let i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "black";
      leftMessages[i].style.color = "white";
    }
    for (let j = 0; j < rightMessages.length; j++) {
      rightMessages[j].style.backgroundColor = "red";
      rightMessages[j].style.color = "white";
    }
  } else if (dropDown.value === "theme-three") {
    for (let i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "green";
      leftMessages[i].style.color = "yellow";
    }
    for (let j = 0; j < rightMessages.length; j++) {
      rightMessages[j].style.backgroundColor = "yellow";
      rightMessages[j].style.color = "green";
    }
  } else {
    for (let i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "burlywood";
      leftMessages[i].style.color = "black";
    }
    for (let j = 0; j < rightMessages.length; j++) {
      rightMessages[j].style.backgroundColor = "lightblue";
      rightMessages[j].style.color = "black";
    }
  }
}

//GOLD /////////////////////////////////////////

// const button = document.querySelector("button");
// const messages = document.querySelector(".messages");
// const form = document.querySelector("#form");

// function sendMessage() {
//   const input = document.querySelector("#input");
//   const newMessage = document.createElement("div");
//   newMessage.textContent = input.value;
//   let i = 0;

//   messages.append(newMessage)
// }

// form.addEventListener("submit", sendMessage);

////////////////////////////////////////////

const button = document.querySelector("button");
const messages = document.querySelector(".messages");
const form = document.querySelector("#form");
let i = 0;

function counter() {
  i += 1;
  return i;
}

function sendMessage() {
  const input = document.querySelector("#input");
  const newMessage = document.createElement("div");
  newMessage.textContent = input.value;

  if (i % 2 == 0) {
    newMessage.style.alignSelf = "flex-start";
    if (dropDown.value === "theme-two") {
      newMessage.style.backgroundColor = "black";
      newMessage.style.color = "white";
    } else if (dropDown.value === "theme-three") {
      newMessage.style.backgroundColor = "green";
      newMessage.style.color = "yellow";
    } else {
      newMessage.style.backgroundColor = "burlywood";
      newMessage.style.color = "black";
    }
    const leftMessage = messages.append(newMessage);

    return leftMessage;
  } else {
    newMessage.style.alignSelf = "flex-end";
    if (dropDown.value === "theme-two") {
      newMessage.style.backgroundColor = "red";
      newMessage.style.color = "white";
    } else if (dropDown.value === "theme-three") {
      newMessage.style.backgroundColor = "yellow";
      newMessage.style.color = "green";
    } else {
      newMessage.style.backgroundColor = "lightblue";
      newMessage.style.color = "black";
    }
    const rightMessage = messages.append(newMessage);

    return rightMessage;
  }
}

form.addEventListener("submit", sendMessage);
form.addEventListener("submit", counter);

form.addEventListener("submit", reset);

function reset() {
  form.reset();
}
