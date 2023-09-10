sum(5, 3, displayDOM);

function sum(x, y, myFunction) {
  let result = x + y;
  myFunction(result);
}

function displayConsole(output) {
  console.log(output);
}
function displayDOM(output) {
  document.getElementById("p1").innerHTML = output;
}
