let a;
let b;
let c;

document.getElementById("button_calc").onclick = function () {
  a = document.getElementById("input_a").value;
  b = document.getElementById("input_b").value;
  a = Number(a);
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("p_result").innerHTML = "c = " + c;
  console.log(a, b);
  console.log(c);
  console.log(typeof a, typeof b);
};
