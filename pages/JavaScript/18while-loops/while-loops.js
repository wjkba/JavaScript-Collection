// while loop = repeat some code while
//              condition is true, potentially infinite

const buttonWhile = document.getElementById("buttonWhile");
let userName = "";

buttonWhile.onclick = function () {
  while (userName == "" || userName == null) {
    userName = window.prompt(
      "This while loop won't stop unless you input a text(e.g username): "
    );
  }
  console.log("Welcome " + userName);
  document.getElementById("p1").innerHTML = "Welcome " + userName;
};
