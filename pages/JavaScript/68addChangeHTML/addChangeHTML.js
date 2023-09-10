const itemList = document.querySelector(".itemList");

let listItem1 = document.createElement("li");
listItem1.textContent = "hat";
listItem1.style.color = "#9e85c4";
itemList.prepend(listItem1);

let listItem2 = document.createElement("li");
listItem2.textContent = "shoes";
listItem2.style.color = "#9e85c4";
itemList.append(listItem2);

const content = document.querySelector(".content");
const newElement = document.createElement("p");
newElement.textContent = "new paragraph";
newElement.style.color = "#c83c4c";
newElement.style.fontSize = "1.5rem";
content.append(newElement);
