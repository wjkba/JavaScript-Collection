const header = document.getElementById("bigText");

let radios = document.getElementsByName("radios");

let listItems = document.getElementsByTagName("li");

let newClass = document.getElementsByClassName("newClass");

let Lists = document.querySelector(".Lists");
let List1 = document.querySelector("#List1");
Lists.firstElementChild.style.backgroundColor = "lightblue";
Lists.firstElementChild.nextElementSibling.style.backgroundColor = "#FFB3CB";
Lists.lastElementChild.style.backgroundColor = "lightgreen";
List1.children[2].style.color = "red";

let children = Array.from(Lists.children);
children.forEach((child) => {
  child.style.color = "#591D30";
});
