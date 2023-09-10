let area;
let width;
let height;
const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");
const buttonSubmit = document.getElementById("buttonSubmit");
const p1 = document.getElementById("p1");

buttonSubmit.addEventListener("click", function () {
  width = inputWidth.value;
  height = inputHeight.value;
  area = getArea(width, height);
  p1.innerHTML = "<span>Area/Pole:</span> " + width + "x" + height + "=" + area;
});

function getArea(width, height) {
  return width * height;
}
