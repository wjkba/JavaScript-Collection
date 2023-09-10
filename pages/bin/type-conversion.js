console.log("This is console.log message");
/*
-------------------------------------------
*/

let age;

document.getElementById("submit_age").onclick = function () {
  age = document.getElementById("input_age").value;
  document.getElementById("p1").innerHTML = "You are " + age + " years old.";
  document.getElementById("p2").innerHTML =
    "In 3 years you will be " + (Number(age) + 3) + " years old.";
};
