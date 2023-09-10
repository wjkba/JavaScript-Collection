const selectBoolean = document.getElementById("selectBoolean");
let bool1;

selectBoolean.addEventListener("change", function () {
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  selection = selectBoolean.value;
  switch (selection) {
    case "boolTrue":
      p1.innerHTML = "boolean is TRUE";
      p1.style.backgroundColor = "green";
      p1.style.color = "white";
      var bool1 = true;
      break;
    case "boolFalse":
      p1.innerHTML = "boolean is FALSE";
      p1.style.backgroundColor = "red";
      p1.style.color = "white";
      var bool1 = false;
      break;
  }
  console.log(bool1);
  console.log(typeof bool1);
  var NOTbool1 = !bool1;
  p2.innerHTML = "IS NOT value: " + NOTbool1;
});
