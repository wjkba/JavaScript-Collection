//onload
const element = document.body;
element.onload = () => alert("This is an onload event");

//onclick
const myButton = document.getElementById("myButton");
myButton.onclick = () => alert("This is an onclick event");

//onchange
const myInput = document.getElementById("myInput");
myInput.onchange = () => alert("This is an onchange event");

//onmouseover/onmouseout
const myDiv = document.getElementById("myDiv");
myDiv.onmouseover = () => (myDiv.style.backgroundColor = "#89e757");
myDiv.onmouseout = () => (myDiv.style.backgroundColor = "#B3E8FF");

//onmousedown/onmouseup
const myDiv2 = document.getElementById("myDiv2");
myDiv2.onmousedown = () => (myDiv2.style.backgroundColor = "#c962c1");
myDiv2.onmouseup = () => (myDiv2.style.backgroundColor = "#B3E8FF");
