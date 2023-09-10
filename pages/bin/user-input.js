console.log("This is console.log message");
/*
-------------------------------------------
*/

let username;

document.getElementById("button1").onclick = function () {
  username = document.getElementById("input_username").value;
  console.log(username);
  document.getElementById("username_display").innerHTML = "Hello " + username;
};
