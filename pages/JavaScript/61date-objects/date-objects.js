const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

let date = new Date();
console.log(date); //Date Sun Sep 03 2023 14:45:00 GMT+0200 (Central European Summer Time)
date = date.toLocaleString(); // makes the date more readable
p1.innerHTML += ` ${date}`;

let date2 = new Date(2004, 5, 3, 12, 30, 40);
date2 = date2.toLocaleString();
p2.innerHTML += ` ${date2}`;

let date3 = new Date();
let year = date3.getFullYear();
let month = date3.getMonth();
let day = date3.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
p3.innerHTML += `Year: ${year} <br>Month: ${month}<br>Day: ${dayNames[day]}`;
