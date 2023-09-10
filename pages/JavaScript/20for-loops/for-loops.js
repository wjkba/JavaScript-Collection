// for loop = repeat some code
//            certain amount of times

// for (let counter = 1; counter <= 10; counter += 1) {
//   console.log(counter);
// }

const buttonLoop1 = document.getElementById("buttonLoop1");
const buttonLoop2 = document.getElementById("buttonLoop2");

buttonLoop1.onclick = () => {
  for (let i = 0; i <= 100; i += 5) {
    console.log(i);
  }
};

buttonLoop2.onclick = () => {
  console.log("ODLICZANIE DO NOWEGO ROKU ");
  for (let i = 10; i >= 0; i -= 1) {
    console.log(i);
    if (i == 0) {
      console.log("HAPPY NEW YEAR!!!");
    }
  }
};
