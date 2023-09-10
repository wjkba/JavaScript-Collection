// break = breaks out of a loop entirely
// continue = skip an iteraion ofa loop
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.onclick = function () {
  console.clear();
  console.log("Count 1 to 20 break at 13");
  for (let i = 1; i <= 20; i += 1) {
    if (i == 13) {
      break;
    }
    console.log(i);
  }
};

button2.onclick = function () {
  console.clear();
  console.log("Count 1 to 20 without 13");
  for (let i = 1; i <= 20; i += 1) {
    if (i == 13) {
      continue;
    }
    console.log(i);
  }
};
