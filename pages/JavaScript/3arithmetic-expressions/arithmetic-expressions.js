console.log("This is console.log message");

let number = 20; // changeable
number1 = number + 1;
number2 = number - 1;
number3 = number * 2;
number4 = number / 2;
number5 = number / 3;
number_remainder = number % 3;

document.getElementById("h2num").innerHTML = "Number: " + number;
document.getElementById("p1").innerHTML = number + "+1 = " + number1;
document.getElementById("p2").innerHTML = number + "-1 = " + number2;
document.getElementById("p3").innerHTML = number + "*2 = " + number3;
document.getElementById("p4").innerHTML = number + "/2 = " + number4;
document.getElementById("p5").innerHTML =
  number +
  "/3 = " +
  Math.round(number5) +
  " reszta z dzielenia: " +
  number_remainder;
