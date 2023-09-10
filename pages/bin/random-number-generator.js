let a;
let b;
let c;

document.getElementById("button_4s").onclick = function () {
  a = Math.floor(Math.random() * 4) + 1; //Computers always start with 0 that's why we have to add +1
  document.getElementById("p_4s").innerHTML = a;
};

document.getElementById("button_6s").onclick = function () {
  b = Math.floor(Math.random() * 6) + 1; //Computers always start with 0 that's why we have to add +1
  document.getElementById("p_6s").innerHTML = b;
};

document.getElementById("button_12s").onclick = function () {
  c = Math.floor(Math.random() * 12) + 1; //Computers always start with 0 that's why we have to add +1
  document.getElementById("p_12s").innerHTML = c;
};
