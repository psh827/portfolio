const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const randomNum = Math.floor(Math.random() * colors.length);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginsubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `こんにちは`;
  greeting2.innerText = `${username}様`;
  greeting.style.color = colors[randomNum];
  greeting2.style.color = colors[randomNum];
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting2.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreetings(savedUsername);
}
