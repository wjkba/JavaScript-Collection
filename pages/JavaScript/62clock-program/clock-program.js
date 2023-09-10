const p1 = document.getElementById("p1");

update();
setInterval(update, 1000);
function update() {
  let date = new Date();
  p1.innerHTML = formatTime(date);
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
}
