const buttonItems = document.getElementById("buttonItems");
let fruits = ["apple", "orange", "banana", "mango", "lemon"];
let vegetables = ["tomato", "potato", "onion"];
let meats = ["chicken", "beef", "pork", "fish"];
let groceryList = [fruits, vegetables, meats];

buttonItems.onclick = function () {
  inputEvent();
  for (let list of groceryList) {
    for (let food of list) {
      console.log(food);
    }
  }
};

function inputEvent() {
  const inputX = document.getElementById("inputX");
  const inputY = document.getElementById("inputY");
  const inputItem = document.getElementById("inputItem");
  x = Number(inputX.value);
  y = Number(inputY.value);
  item = String(inputItem.value);
  groceryList[x][y] = item;
}
