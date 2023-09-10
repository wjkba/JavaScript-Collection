// && AND (BOTH conditions must be true)
// && || OR (EITHER condition can be true)

let num;

button01.onclick = function () {
  var button01 = document.getElementById("button01");
  var input01 = document.getElementById("input01");
  var p01 = document.getElementById("p01");
  num = input01.value;
  num = Number(num);
  if (num <= 100 && num >= 80) {
    p01.innerHTML = "A";
  } else if (num < 80 && num >= 60) {
    p01.innerHTML = "B";
  } else if (num < 60 && num >= 40) {
    p01.innerHTML = "C";
  } else if (num < 40 && num >= 20) {
    p01.innerHTML = "D";
  } else if (num < 20 && num >= 1) {
    p01.innerHTML = "E";
  } else {
    p01.innerHTML = "error";
  }
};

// && || OR (EITHER condition can be true)

const input02 = document.getElementById("input02");
const green = document.getElementById("green");
const red = document.getElementById("red");

input02.addEventListener("change", function () {
  var input = input02.value;
  if (input == 1 || input == 3 || input == 5 || input == 7 || input == 9) {
    console.log("OK");
    green.style.visibility = "visible";
    red.style.visibility = "hidden";
  } else {
    console.log("Use one of the following numbers: 1, 3, 5, 7, 9");
    red.style.visibility = "visible";
    green.style.visibility = "hidden";
  }
});
