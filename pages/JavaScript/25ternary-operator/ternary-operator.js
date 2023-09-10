const inputAge = document.getElementById("inputAge");
const buttonAge = document.getElementById("buttonAge");
const p1 = document.getElementById("p1");

buttonAge.onclick = function () {
  age = inputAge.value;
  adult = checkAge(age);
  p1.innerHTML = "+18:  " + "<span>" + adult + "</span>";
};

function checkAge(age) {
  return age >= 18 ? true : false;
}

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// buttonAge.onclick = function () {
//   age = inputAge.value;
//   adult = checkAge(age);
//   console.log("+18: : " + "<span>" + adult + "</span>");
// };
