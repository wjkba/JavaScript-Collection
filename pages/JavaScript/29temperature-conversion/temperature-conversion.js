let temp = 0;
const labelTemp = document.getElementById("labelTemp");
const inputTemp = document.getElementById("inputTemp");
const buttonSubmit = document.getElementById("buttonSubmit");
const radioCelsius = document.getElementById("radioCelsius");
const radioFahrenheit = document.getElementById("radioFahrenheit");
const p1 = document.getElementById("p1");

radioCelsius.addEventListener("change", function () {
  labelTemp.innerHTML = "°F";
  labelTemp.style.visibility = "visible";
});
radioFahrenheit.addEventListener("change", function () {
  labelTemp.innerHTML = "°C";
  labelTemp.style.visibility = "visible";
});

buttonSubmit.onclick = function () {
  temp = Number(inputTemp.value);
  if (radioCelsius.checked == true) {
    temp = toCelsius(temp);
    p1.innerHTML = temp + "°C";
  } else if (radioFahrenheit.checked == true) {
    temp = toFahrenheit(temp);
    p1.innerHTML = temp + "°F";
  } else {
    console.log("x");
  }
};

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}
