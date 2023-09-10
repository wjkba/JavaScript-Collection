// global variables are variables that are defined outside of any functions
// global variables should be defined by let, do not use var for global functions
let name = "John";

// let variables don't exist outside the block scope
// if we try to console.log(i) outside that block it won't be defined
for (let i = 1; i <= 3; i += 1) {
  console.log(i);
}

// var is not limited by the block scope so we can access it even after for loop ends
for (var j = 1; j <= 3; j += 1) {
  console.log(j);
}

// var can be limited by a function
// var is not accessible outside that function
myFunction();
function myFunction() {
  for (var k = 1; k <= 3; k += 1) {
    console.log(k);
  }
}
