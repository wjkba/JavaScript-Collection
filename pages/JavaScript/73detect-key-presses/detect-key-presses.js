const p1 = document.getElementById("p1");
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event) {
  console.log(event.key);
  p1.textContent = `key pressed: ${event.key}`;
  switch (event.key) {
    case "w":
      y -= 15;
      myDiv.style.top = y + "px";
      break;
    case "s":
      y += 15;
      myDiv.style.top = y + "px";
      break;
    case "d":
      x -= 15;
      myDiv.style.right = x + "px";
      break;
    case "a":
      x += 15;
      myDiv.style.right = x + "px";
      break;
    default:
      break;
  }
}
