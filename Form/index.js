const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //   Add error class
    setErrorFor(username, "Username can't be Empty");
  } else {
    // Show Success
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email Can't be Empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not Valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Passowrd Can't be Empty");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Passowrd Can't be Empty");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not Matched");
  } else {
    setSuccessFor(password2);
  }

  if()

  }

function setErrorFor(input, massage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  //Add error massage inside small
  small.innerText = massage;
  //Class for the error Border
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
