let count = 0;
document.getElementById("p_count").innerHTML = count;

document.getElementById("button_decrease").onclick = function () {
  count -= 1;
  document.getElementById("p_count").innerHTML = count;
  console.log(count);
};
document.getElementById("button_reset").onclick = function () {
  count = 0;
  document.getElementById("p_count").innerHTML = count;
};
document.getElementById("button_increase").onclick = function () {
  count += 1;
  document.getElementById("p_count").innerHTML = count;
};
