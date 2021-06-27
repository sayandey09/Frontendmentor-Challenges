//
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#firstName"),
    firstNameValue = firstName.value,
    lastName = document.querySelector("#lastName"),
    lastNameValue = lastName.value,
    email = document.querySelector("#email"),
    emailValue = email.value,
    password = document.querySelector("#password"),
    passwordValue = password.value;

  console.log(firstNameValue, lastNameValue, emailValue, passwordValue);

  if (firstNameValue === "") {
    addError("firstName", "First Name cannot be empty");
  } else {
    removeErr("firstName");
  }
  if (lastNameValue === "") {
    addError("lastName", "Last Name cannot be empty");
  } else {
    removeErr("lastName");
  }
  if (emailValue == "") {
    addError("email", "Email cannot be empty");
  } else if (!iSValid(emailValue)) {
    addError("email", "Looks like this is not an email");
  } else {
    removeErr("email");
  }
  if (passwordValue === "") {
    addError("password", "Password cannot be empty");
  } else {
    removeErr("password");
  }
});

function addError(field, msg) {
  console.log(field);
  let formControl = form[field].parentNode;
  formControl.classList.add("error");
  let small = formControl.querySelector("small");

  small.innerText = msg;
  //   small.style.opacity = "1";
}

function removeErr(field) {
  console.log(field);
  let formControl = form[field].parentNode;
  formControl.classList.remove("error");
  let small = formControl.querySelector("small");

  //   small.innerText = msg;
  //   small.style.opacity = "0";
}

function iSValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
