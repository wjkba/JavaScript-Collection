const inputUsername = document.getElementById("inputUsername");
const buttonLogin = document.getElementById("buttonLogin");
const p1 = document.getElementById("p1");

let username = "";
let userInbox = 0;

buttonLogin.onclick = function () {
  username = String(inputUsername.value);
  login();
};

function login() {
  // You can access the following functions only after logging in ^
  displayUsername();
  displayUserInbox();

  // These are nested functions
  function displayUsername() {
    p1.innerHTML = `Welcome <b>${username}</b>`;
  }
  function displayUserInbox() {
    let pNewElement = document.createElement("p");
    p1.appendChild(pNewElement);
    pNewElement.innerHTML = `You have ${userInbox} new messages.`;
  }
}
