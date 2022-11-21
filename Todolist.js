localStorage.setItem("email", "abc@gmail.com");
localStorage.setItem("pass", 123);

let username = localStorage.getItem("email");
let code = localStorage.getItem("pass");

document.getElementById("show").onclick = function show() {
  event.preventDefault();
  let showpass = document.getElementById("pass");

  if (showpass.type == "password") {
    showpass.type = "text";
    console.log(showpass.type);
  } else {
    showpass.type = "password";
  }
};
document.getElementById("login").onclick = function () {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if (email == username && pass == code) {
    window.location = "webtask.html";
    alert("logged in");
  } else {
    alert("not logged in");
  }
};
