const PI = 3.14159;
let radius;
let circ;

document.getElementById("button_submit").onclick = function () {
  radius = document.getElementById("input_radius").value;
  radius = Number(radius);
  circ = 2 * PI * radius;
  document.getElementById("p_result").innerHTML =
    "<b>Obwód wynosi: </b>" + circ;
  console.log(radius);
  console.log(typeof radius);
};
