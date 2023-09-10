// do while loop = do something,
//                 then check the condition,
//                 repeat if true
//

const buttonWhile = document.getElementById("buttonWhile");
const input01 = document.getElementById("input01");

buttonWhile.onclick = function () {
  do {
    userName = window.prompt("input text(e.g username): ");
  } while (userName == "" || userName == null);

  document.getElementById("p1").innerHTML = "Welcome " + userName;
};
