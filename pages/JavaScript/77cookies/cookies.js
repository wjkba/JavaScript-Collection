const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const buttonSubmit = document.getElementById("buttonSubmit");
const buttonGetCookies = document.getElementById("buttonGetCookies");
const buttonDelCookies = document.getElementById("buttonDelCookies");

buttonSubmit.addEventListener("click", () => {
  setCookie("firstName", inputFirstName.value, 365);
  setCookie("lastName", inputLastName.value, 365);
  console.log(getCookie("firstName"));
  console.log(getCookie("lastName"));
  console.log(document.cookie);
});
buttonGetCookies.addEventListener("click", () => {
  inputFirstName.value = getCookie("firstName");
  inputLastName.value = getCookie("lastName");
});
buttonDelCookies.addEventListener("click", () => {
  deleteCookie("firstName");
  deleteCookie("lastName");
  console.log(document.cookie);
});

// setCookie("firstName", "John", 365);
// setCookie("lastName", "Kowalski", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

function setCookie(name, value, expire) {
  const date = new Date();
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path:/; SameSite=Strict;`;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
