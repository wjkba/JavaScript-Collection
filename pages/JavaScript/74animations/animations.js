const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");
const myButton3 = document.getElementById("myButton3");
const myButton4 = document.getElementById("myButton4");

const divSlide = document.getElementById("divSlide");
const divRotate = document.getElementById("divRotate");
const divSkew = document.getElementById("divSkew");
const divScale = document.getElementById("divScale");

//slide
myButton1.addEventListener("click", beginSlide);
function beginSlide() {
  let timerId = null;
  let x = 0;
  let y = 0;

  timerId = setInterval(frame, 5);
  function frame() {
    if (x >= 300) {
      clearInterval(timerId);
    } else {
      x += 1;
      divSlide.style.left = x + "px";
    }
  }
}

//rotate
myButton2.addEventListener("click", beginRotate);
function beginRotate() {
  let timerId = null;
  let degrees = 0;
  timerId = setInterval(frame, 5);
  function frame() {
    if (degrees >= 360) {
      clearInterval(timerId);
    } else {
      degrees += 1;
      divRotate.style.transform = `rotateZ(${degrees}deg)`;
    }
  }
}

//skew
myButton3.addEventListener("click", beginSkew);
function beginSkew() {
  let timerId = null;
  let deg1 = 0;
  timerId = setInterval(frame, 5);
  function frame() {
    if (deg1 >= 30) {
      clearInterval(timerId);
    } else {
      deg1 += 1;
      divSkew.style.transform = `skew(${deg1}deg)`;
    }
  }
}

//scale
myButton4.addEventListener("click", beginScale);
function beginScale() {
  let x = 1;
  let y = 1;
  let timerId = null;
  timerId = setInterval(frame, 100);
  function frame() {
    if (x <= 0.5 || y <= 0.5) {
      clearInterval(timerId);
    } else {
      x -= 0.05;
      y -= 0.05;
      divScale.style.transform = `scale(${x}, ${y})`;
    }
  }
}
