const buttonNumbers = document.getElementById("buttonNumbers");
const butttonSquares = document.getElementById("butttonSquares");
const buttonCubes = document.getElementById("buttonCubes");
let arrayNumbers = [2, 4, 6, 8, 10, 12];

buttonNumbers.onclick = function () {
  console.clear();
  arrayNumbers.forEach(print);
};
buttonSquares.onclick = function () {
  console.clear();
  let arraySquares = arrayNumbers.map(square);
  arraySquares.forEach(print);
};
buttonCubes.onclick = function () {
  console.clear();
  let arrayCubes = arrayNumbers.map(cube);
  arrayCubes.forEach(print);
};

function print(x) {
  console.log(x);
}

function square(number) {
  return Math.pow(number, 2);
}
function cube(number) {
  return Math.pow(number, 3);
}
