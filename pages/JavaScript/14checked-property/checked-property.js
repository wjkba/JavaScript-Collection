let Checkbox = document.getElementById("myCheckbox");
Checkbox.addEventListener("change", function () {
  if (myCheckbox.checked) {
    document.querySelector(".checkContainer").style.backgroundColor = "#7ab965";
    document.querySelector(".checkContainer").style.color = "black";
    console.log("Checkbox is checked..");
  }
  //
  else {
    document.querySelector(".checkContainer").style.backgroundColor = "#de5cb8";
    document.querySelector(".checkContainer").style.color = "white";
    console.log("Checkbox is not checked..");
  }
});

const visaButton = document.getElementById("visaButton");
const mastercardButton = document.getElementById("mastercardButton");
const blikButton = document.getElementById("blikButton");
const paypalButton = document.getElementById("paypalButton");
let p2 = document.getElementById("p2");

visaButton.addEventListener("change", function () {
  if (visaButton.checked) {
    p2.innerHTML = "You have selected Visa";
    console.log("VISA Selected");
  }
});
mastercardButton.addEventListener("change", function () {
  if (mastercardButton.checked) {
    p2.innerHTML = "You have selected MasterCard";
    console.log("MasterCard Selected");
  }
});

blikButton.addEventListener("change", function () {
  p2.innerHTML = "You have selected BLIK";
  if (blikButton.checked) {
    console.log("BLIK Selected");
  }
});

paypalButton.addEventListener("change", function () {
  p2.innerHTML = "You have selected Paypal";
  if (paypalButton.checked) {
    console.log("Paypal Selected");
  }
});
