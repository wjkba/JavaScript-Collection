const inputUsername = document.getElementById("inputUsername");
let username = "";
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const pTotal = document.getElementById("pTotal");
const buttonItemDecrease = document.getElementById("buttonitemDecrease");
const pCount = document.getElementById("pCount");
const buttonItemIncrease = document.getElementById("buttonItemIncrease");

let itemCount = 0;
let price = 7.5;
let total;
inputUsername.addEventListener("change", function () {
  username = inputUsername.value;
  p1.innerHTML = `Hello ${username}`;
  inputUsername.style.visibility = "hidden";
});
buttonItemIncrease.onclick = function () {
  itemCount += 1;
  pCount.innerHTML = itemCount;
  p2.innerHTML = `You have ${itemCount} items in your cart`;
  total = checkTotal(itemCount, price);
  p3.innerHTML = `Your total is ${total}PLN`;
  pTotal.innerHTML = `${total}PLN`;
};

buttonItemDecrease.onclick = function () {
  if (itemCount == 0) {
    console.log("0");
  } else {
    itemCount -= 1;
    pCount.innerHTML = itemCount;
    p2.innerHTML = `You have ${itemCount} items in your cart`;
    total = checkTotal(itemCount, price);
    p3.innerHTML = `Your total is ${total}PLN`;
    pTotal.innerHTML = `${total}PLN`;
  }
};

function checkTotal(itemCount, price) {
  return itemCount * price;
}
