const buttonOpen = document.getElementById("buttonOpen");
const p1 = document.getElementById("p1");

buttonOpen.onclick = function () {
  //start
  console.time("Response time");

  alert("Measuring your response time, click the button");

  //end
  console.timeEnd("Response time");
  p1.innerHTML = "Response time sent to console";
};
