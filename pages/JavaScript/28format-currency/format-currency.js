const pNum = document.getElementById("pNum");
const inputNum = document.getElementById("inputNum");

inputNum.addEventListener("change", function () {
  number = Number(inputNum.value);
  pNum.innerHTML = number;
});

let selection;
const selector = document.getElementById("selector");
selector.addEventListener("change", function () {
  selection = selector.value;
  console.log(selection);
  switch (selection) {
    case "PLN":
      pNum.innerHTML = number.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
      break;
    case "EURO":
      pNum.innerHTML = number.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      });
      break;
    case "USD":
      pNum.innerHTML = number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      break;
    case "GBP":
      pNum.innerHTML = number.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
      break;
    default:
      break;
  }
});
