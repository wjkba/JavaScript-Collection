const buttonSet = document.getElementById("buttonSet");
const buttonClear = document.getElementById("buttonClear");
const p1 = document.getElementById("p1");
let timer1, timer2, timer3;
buttonSet.onclick = function () {
  timer1 = setTimeout(firstMessaage, 3000); // 1000ms = 1s
  timer2 = setTimeout(secondMessaage, 6000);
  timer3 = setTimeout(thirdMessaage, 9000);
  p1.innerHTML = "Timers set";
  turnBlue(p1);
};
buttonClear.onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  p1.innerHTML = "Timers cleared";
  turnBlue(p1);
};

function firstMessaage() {
  p2.innerHTML = `MESSAGE #1`;
}
function secondMessaage() {
  p2.innerHTML += `<br>MESSAGE #2`;
}
function thirdMessaage() {
  p2.innerHTML += `<br>MESSAGE #3`;
}
function turnBlue(element) {
  element.style.backgroundColor = "#4191ee";
}
