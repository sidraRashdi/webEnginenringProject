// const togglePassword = document.querySelector(".toggle-password");

// togglePassword.addEventListener("click", function () {
//   this.classList.toggle("fa-eye-slash");
// });

const user = document.getElementById("username");
const pass = document.getElementById("password");
let userName = "user";
let UserPass = "pass";
localStorage.setItem("user", userName);
localStorage.setItem("pass", UserPass);
const signIn = document.querySelector(".signUp");
signIn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    localStorage.getItem("user") === user.value &&
    localStorage.getItem("pass") === pass.value
  ) {
    user.value = "";
    pass.value = "";
    window.location.href = "choose.html";
  } else {
    document.querySelector(".errorMessage").textContent =
      "inavlid username or password";

    user.value = "";
    pass.value = "";
  }
});
