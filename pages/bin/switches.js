let x;
const inputX = document.getElementById("inputX");
const p1 = document.getElementById("p1");
inputX.addEventListener("change", function () {
  x = inputX.value;
  switch (x) {
    case "A":
      p1.innerHTML = "Przypadek A - komunikat 1";
      p1.style.visibility = "visible";
      console.log("Przypadek A - komunikat 1");
      break;
    case "B":
      p1.innerHTML = "Przypadek B - komunikat 2";
      p1.style.visibility = "visible";
      console.log("Przypadek B - komunikat 2");
      break;
    case "C":
      p1.innerHTML = "Przypadek C - komunikat 3";
      p1.style.visibility = "visible";
      console.log("Przypadek C - komunikat 3");
      break;
    case "D":
      p1.innerHTML = "Przypadek D - komunikat 4 ";
      console.log("Przypadek D - komunikat 4");
      break;
    default:
      p1.innerHTML = "błąd";
      console.log("error!1");
  }
});

let y;
const inputY = document.getElementById("inputY");
const p2 = document.getElementById("p2");

inputY.addEventListener("change", function () {
  y = Number(inputY.value);
  switch (true) {
    case y > 100:
      p2.innerHTML = "Maksymalna ilość punktów wynosi 100";
      p2.style.visibility = "visible";
      console.log("Maksymalna ilość punktów wynosi 100");
      break;
    case y > 50:
      p2.innerHTML = "wynik POZYTYWNY";
      p2.style.visibility = "visible";
      console.log("wynik POZYTYWNY");
      break;
    case y <= 50:
      p2.innerHTML = "wynik NEGATYWNY";
      p2.style.visibility = "visible";
      console.log("wynik NEGATYWNY");
      break;
    default:
      console.log("błąd");
  }
});
