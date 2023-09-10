const p1 = document.getElementById("p1");
const inputRows = document.getElementById("inputRows");
const inputColumns = document.getElementById("inputColumns");
const rectangle = document.getElementById("rectangle");
const buttonSubmit = document.getElementById("buttonSubmit");
const inputSymbol = document.getElementById("inputSymbol");

buttonSubmit.onclick = function () {
  rectangle.innerHTML = "";
  for (let i = 1; i <= inputRows.value; i += 1) {
    for (let j = 1; j <= inputColumns.value; j += 1) {
      rectangle.innerHTML += inputSymbol.value;
    }
    rectangle.innerHTML += "<br>";
  }
};
