const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", (e) => {
  const subItem = createSubItem(e);
  document.getElementById("list").appendChild(subItem);
});

function createDropDown() {
  const dropDown = document.createElement("select");
  const input = document.querySelector("#input");
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = colors[i];
    option.value = input.value;
    dropDown.append(option);
  }
  dropDown.addEventListener("change", function (e) {
    e.target.parent.style.backgroundColor = e.target.option.value; ///cant change color
  });
  return dropDown;
}

function createSubItem(e) {
  const subItem = document.createElement("div");
  var subItemValue = document.getElementById("input");
  subItem.textContent = subItemValue.value;
  const dropDown = createDropDown();
  subItem.appendChild(dropDown);
  subItem.setAttribute("class", "subItem");
  return subItem;
}
