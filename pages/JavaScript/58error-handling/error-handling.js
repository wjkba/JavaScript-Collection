const inputUser = document.getElementById("inputUser");
const buttonSubmit = document.getElementById("buttonSubmit");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
let input;

buttonSubmit.onclick = function () {
  try {
    input = Number(inputUser.value);
    if (isNaN(input)) {
      p1.innerHTML = "This is not a number";
      turnRed(p1);
    }
    if (input == "") {
      p1.innerHTML = "This is empty";
      turnRed(p1);
    }
    if (input > 0) {
      p1.innerHTML = "OK";
      turnGreen(p1);
    }
  } catch (error) {
    console.log(error);
  }
};

function turnRed(element) {
  element.style.backgroundColor = "red";
}
function turnGreen(element) {
  element.style.backgroundColor = "green";
}

// try {
//   let x = window.prompt("Enter a number");
//   x = Number(x);
//   if (isNaN(x)) throw "That wasn't a number";
//   if (x == "") throw "That was empty";
//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("This always executes");
// }
