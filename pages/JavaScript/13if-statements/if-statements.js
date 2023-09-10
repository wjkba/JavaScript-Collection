// let age = 65;

// if (age >= 65) {
//   console.log("You are a senior ");
// } else if (age >= 18) {
//   console.log("You are an adult");
// } else if (age <= 0) {
//   console.log("age error");
// } else {
//   console.log("You are under 18");
// }

let age;
document.getElementById("buttonSubmit").onclick = function () {
  age = document.getElementById("inputAge").value;
  age = Number(age);
  //IF STATEMENT
  if (age >= 65) {
    document.getElementById("pResult").innerHTML = "You are a senior.";
  }
  //
  else if (age >= 18) {
    document.getElementById("pResult").innerHTML = "You are an adult.";
  }
  //
  else if (age <= 0) {
    document.getElementById("pResult").innerHTML = "age error";
  }
  //
  else {
    document.getElementById("pResult").innerHTML = "You are under 18.";
  }
};

var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("imgOnline").style.visibility = "visible";
    console.log("Checkbox is checked..");
  } else {
    document.getElementById("imgOnline").style.visibility = "hidden";
    console.log("Checkbox is not checked..");
  }
});
