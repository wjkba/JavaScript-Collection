// Variables

//string
let firstName = "John";
console.log("Hello", firstName);

//number
let age = 21;
console.log("You are", age, "years old");

//boolean
let student = false;
console.log("Are you a student?", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Are you a student? " + student;
