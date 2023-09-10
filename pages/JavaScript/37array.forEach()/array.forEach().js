const buttonFruits = document.getElementById("buttonFruits");
let fruits = ["apple", "orange", "banana", "mango", "lemon"];

buttonFruits.onclick = function () {
  fruits.forEach(displayFruits);
};

function displayFruits(fruit) {
  document.getElementById("labelFruits").innerHTML += " " + fruit;
}

function displayConsole(fruit) {
  console.log(fruit);
}
