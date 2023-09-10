// function = Define code once, and use it many time.
//            To perform some code, cal  the funtion name

// const p1 = document.getElementById("p1");
// myFunction();
// function myFunction() {
//   for (i = 1; i <= 6; i += 1) {
//     for (j = 1; j <= 6; j += 1) {
//       var symbol = "@";
//       p1.innerHTML += symbol;
//     }
//     p1.innerHTML += "<br>";
//   }
// }

const buttonSubmit = document.getElementById("buttonSubmit");

function generateCard() {
  var pSurname = document.getElementById("pSurname");
  var inputSurname = document.getElementById("inputSurname");
  var pName = document.getElementById("pName");
  var inputName = document.getElementById("inputName");
  var spanNumber = document.getElementById("spanNumber");
  pSurname.innerHTML = String(inputSurname.value).toUpperCase();
  pName.innerHTML = String(inputName.value).toUpperCase();
  spanNumber.innerHTML = String(
    Math.floor(Math.random() * 999999999 + 100000000)
  );
}
