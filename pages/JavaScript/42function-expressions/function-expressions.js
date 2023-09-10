const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const pCount = document.getElementById("pCount");

let count = 0;

increaseButton.onclick = function () {
  count += 1;
  pCount.innerHTML = count;
};
decreaseButton.onclick = function () {
  count -= 1;
  pCount.innerHTML = count;
};
