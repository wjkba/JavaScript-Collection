//LINES
let canvas1 = document.getElementById("myCanvas1"); // canvas is picture and the frame together
let context1 = canvas1.getContext("2d"); // painting within a picture frame
context1.strokeStyle = "green";
context1.lineWidth = 10;
context1.beginPath();
context1.moveTo(0, 0); //picking a starting position
context1.lineTo(250, 250);
context1.lineTo(250, 500);
context1.moveTo(500, 0); //move brush to (x.y)
context1.lineTo(250, 250);
context1.stroke();

//TRIANGLE
let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");
context2.strokeStyle = "red";
context2.fillStyle = "#b81c8d";
context2.lineWidth = 10;
context2.beginPath();
context2.moveTo(0, 400);
context2.lineTo(500, 400);
context2.lineTo(250, 0);
context2.lineTo(0, 400);
context2.stroke();
context2.fill();

//DRAW RECTANGLE
let canvas3 = document.getElementById("myCanvas3");
let context3 = canvas3.getContext("2d");

context3.fillStyle = "red";
context3.fillRect(0, 0, 250, 250); //start point (0,0) end point (250,250)

context3.fillStyle = "green";
context3.fillRect(250, 0, 250, 250);

context3.fillStyle = "blue";
context3.fillRect(0, 250, 250, 500);

context3.fillStyle = "black";
context3.fillRect(250, 250, 250, 250);

// CIRCLE
// (x,y,r, startAngle, endAngle, counterclockwise)
let canvas4 = document.getElementById("myCanvas4");
let context4 = canvas4.getContext("2d");
context4.lineWidth = 5;
context4.fillStyle = "#ff6d53";
context4.beginPath();
context4.arc(250, 250, 200, 0, 2 * Math.PI);
context4.stroke();
context4.fill();

// DRAW TEXT
let canvas5 = document.getElementById("myCanvas5");
let context5 = canvas5.getContext("2d");
context5.font = "50px Georgia";
context5.textAlign = "center";
context5.fillText("sample text", canvas5.width / 2, canvas5.height / 2);
