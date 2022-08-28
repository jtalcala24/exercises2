const box = document.querySelector(".box");
const container = document.querySelector(".container");

//normal State
function changeBack() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "black";
}

//when mouse rolls over box

box.addEventListener("mouseover", changeBlue);

function changeBlue() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "blue";
}
//when mouse rolls off box

box.addEventListener("mouseout", changeBack);

//when mouse button held down and released

box.addEventListener("mousedown", changeRed);
box.addEventListener("mouseup", changeYellow);

function changeRed() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "red";
}

function changeYellow() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "yellow";
}

//when mouse is double clicked in square

box.addEventListener("dblclick", changeGreen);

function changeGreen() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "green";
}

//when mouse is scrolled

document.body.addEventListener("wheel", changeOrange);

function changeOrange() {
  const box = document.querySelector(".box");
  box.style.backgroundColor = "orange";
}
