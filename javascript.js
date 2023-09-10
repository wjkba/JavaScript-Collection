const inputSearch = document.getElementById("inputSearch");
let aList = document.querySelectorAll("a");

inputSearch.addEventListener("keyup", filter);

function filter() {
  aList.forEach((a) => {
    const match = new RegExp(inputSearch.value, "gi").test(a.textContent);

    if (!match) {
      a.parentElement.style.display = "none";
      a.style.display = "none";
    } else {
      a.parentElement.style.display = "block";
      a.style.display = "block";
    }
  });
}
