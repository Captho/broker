let usermail = document.querySelector("#email");
const userpassword = document.querySelector("#password");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const form_2 = document.querySelector("#form");
const closemail = document.querySelector(".closemail");

//get events
function usernameDisplay() {
  email.style.display = "inline";
  form_2.disabled = true;
}
function closeUsername() {
  if (usermail.length === null) {
    alert("input email");
  } else {
    email.style.display = "none";
    password.style.display = "inline";
  }
}

//set event listener
form.addEventListener("click", function () {
  usernameDisplay();
});
closemail.addEventListener("click", function () {
  closeUsername();
});
