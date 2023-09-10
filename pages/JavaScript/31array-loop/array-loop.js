buttonLoop1 = document.getElementById("buttonLoop1");
buttonLoop2 = document.getElementById("buttonLoop2");
let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for (let number of numbers) {
  console.log(number);
}

buttonLoop1.onclick = function () {
  console.clear();
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
  }
};

buttonLoop2.onclick = function () {
  console.clear();
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    console.log(numbers[i]);
  }
};
