const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");

//both elements are waiting for click while sharing some space with each other
outerDiv.addEventListener("click", changeWhite, true); //third argument - 'true' makes outerDiv preffered and it is first to change onclick
innerDiv.addEventListener("click", changeWhite);

function changeWhite() {
  alert(`You have changed ${this.id} element to white`);
  this.style.backgroundColor = "white";
}
