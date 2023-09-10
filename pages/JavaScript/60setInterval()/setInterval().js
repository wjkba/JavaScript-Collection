inputUser = document.getElementById("inputUser");
buttonSubmit = document.getElementById("buttonSubmit");
p1 = document.getElementById("p1");

let count = 0;
let max = 0;
let timer1;

buttonSubmit.onclick = function () {
  max = Number(inputUser.value);
  timer1 = setInterval(countUp, 1000);
};

function countUp() {
  count += 1;
  p1.innerHTML += `<br>${count}`;
  if (count >= max) {
    clearInterval(timer1);
  }
}

// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const timer1 = setInterval(countUp, 1000);

// function countUp() {
//   count += 1;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(timer1);
//   }
// }
