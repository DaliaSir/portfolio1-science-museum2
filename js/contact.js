const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const text = document.querySelector("#contact-message");
const textError = document.querySelector("#textError");
const textCounter = document.querySelector("#textCounter");
const select = document.querySelector("#select-subject");
const selectError = document.querySelector("#selectError");


function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 1) === true) {
    nameError.style.display = "none";
    name.className = "contact_form-name";
  } else {
    nameError.style.display = "block";
    name.className = "form-error-border";
  }

  if (checkLength(text.value, 1) === true) {
    textError.style.display = "none";
    text.className = "contact_form-text";
  } else {
    textError.style.display = "block";
    text.className = "form-error-border";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.className = "contact_form-email";
  } else {
    emailError.style.display = "block";
    email.className = "form-error-border";
  }

  if (checkValue(select.value) === true) {
    selectError.style.display = "block";
    select.className = "form-error-border"; 
  } else {
    selectError.style.display = "none";
    select.className = "contact_form-select";
  }


  if (checkLength(name.value, 1) && validateEmail(email.value) && checkLength(text.value, 1) ) {
    message.innerHTML = '<div class="message">Your message has been sent</div>';
    form.reset();
  } else {
    message.innerHTML = "";
  }
}


form.addEventListener("submit", validateForm);



//---------------------------------NAME--//

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

//---------------------------------EMAIL--//

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

//---------------------------------SELECT--//

function checkValue() {
  if (select.value === "") {
    return true;
  } else {
    return false;
  }
}

//---------------------------------TEXTAREA--//

text.addEventListener("input", textCount);

function textCount () {
  const target = event.currentTarget;
  const maxLength = target.attributes.maxLength.value;
  const currentLength = target.value.trim().length;

  if (currentLength <= maxLength) {
    textCounter.style.display = "block";
    textCounter.innerHTML = `${maxLength - currentLength}`;
  } else {
    textCounter.innerHTML = "";
  }
}
