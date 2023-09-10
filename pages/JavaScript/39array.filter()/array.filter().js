const buttonAges = document.getElementById("buttonAges");
const buttonAgesAdult = document.getElementById("buttonAgesAdult");

let arrayAges = [14, 16, 17, 18, 19, 20, 21, 23];
let arrayAgesAdult = arrayAges.filter(checkAge);

buttonAges.onclick = function () {
  console.clear();
  arrayAges.forEach(print);
};
buttonAgesAdult.onclick = function () {
  console.clear();
  arrayAgesAdult.forEach(print);
};

function checkAge(element) {
  return element >= 18;
}
function print(x) {
  console.log(x);
}
