// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b));
// console.log(sum(a, b, c));
// console.log(sum(a, b, c, d));
// console.log(sum(a, b, c, d, e));

// function sum(a, b) {
//   return a + b;
// }
// function sum2(a, b, c) {
//   return a + b + c;
// }
// function sum3(a, b, c, d) {
//   return a + b + c + d;
// }
// function sum4(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

//every number in function goes through a for loop that adds each number to total
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
