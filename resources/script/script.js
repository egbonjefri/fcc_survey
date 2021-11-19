
let classes = (classes) => document.getElementsByClassName(classes);
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = classes('error')[1];
const newName = document.getElementById('name');
const nameError = classes('error')[0];
function nameFunction(event) {
 
    if (newName.value.trim() === "") {
      nameError.textContent = 'Name cannot be blank';
      failureIcon[0].style.opacity = "1";
      successIcon[0].style.opacity = "0";


    }
    else if (newName.validity.patternMismatch) {
      nameError.textContent = 'Bitch! Type your name *_*';
      successIcon[0].style.opacity = "0";
      failureIcon[0].style.opacity = "1";
  
    }
    else {
      nameError.style.display = 'none';
      successIcon[0].style.opacity = "1";
      failureIcon[0].style.opacity = "0";
    }
  }


newName.addEventListener('input', nameFunction);

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
    successIcon[1].style.opacity = "1";
    failureIcon[1].style.opacity = "0";

  } else {
    // If there is still an error, show the correct error
    showError();

  }
});
function newFunction(event) {
   if (newName.validity.valid === false){
    // If it isn't, we display an appropriate error message
    nameFunction();
    event.preventDefault();
    window.scrollTo(0, document.getElementById('title').offsetTop);

    // Then we prevent the form from being sent by canceling the event
  }
  
  else if(email.validity.patternMismatch === false) {
    showError();
    event.preventDefault();
    window.scrollTo(0, document.getElementById('name').offsetTop);

  }

}

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";



  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";


  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";


  }
  else {
    emailError.style.display = 'none';
    successIcon[1].style.opacity = "1";
    failureIcon[1].style.opacity = "0";


  }

  // Set the styling appropriately
  emailError.className = 'error active';

}

form.addEventListener('submit', newFunction);
