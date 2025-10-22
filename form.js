// console.log("this is workling");
const fname = document.getElementById("frname");
const lname = document.getElementById("ltname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const eircode = document.getElementById("eircode");
const nameRegEx = /^[a-zA-Z0-9]+$/;

function validateNames() {
  const nameRegEx = /^[a-zA-Z0-9]+$/;
  //Variable to track if both names are valid
  let isValid = true;

  // FIRST ANS LAST NAME VALIDATION
  const firstName = fname.value.trim(); // Remove spaces before checking
  const lastName = lname.value.trim(); // Remove spaces

  // Check if name has only letters
  if (!nameRegEx.test(firstName)) {
    alert("First Name must be alphanumeric ");
    document.getElementById("frnameError").innerText =
      "Please enter a valid First Name (alphanumeric).";
    isValid = false;
  }
  // Check the length condition (must not exceed 20 characters)
  else if (firstName.length > 20) {
    alert("First Name cannot be longer than 20 characters.");
    document.getElementById("frnameError").innerText =
      " First Name must be under 20 characters.";
    isValid = false;
  } else {
    // Clear error message if valid
    document.getElementById("frnameError").innerText = "";
  }

  // Check if name has only letters
  if (!nameRegEx.test(lastName)) {
    alert("Last Name must be alphanumeric");
    document.getElementById("ltnameError").innerText =
      " Please enter a valid Last Name (alphanumeric).";
    isValid = false;
  }
  // Check the length condition (must not exceed 20 characters)
  else if (lastName.length > 20) {
    alert("Last Name cannot be longer than 20 characters.");
    document.getElementById("ltnameError").innerText =
      "Last Name must be under 20 characters.";
    isValid = false;
  } else {
    // Clear error if valid
    document.getElementById("ltnameError").innerText = "";
  }

  // Return final validation result
  return isValid;
}
function validateEmail() {
  const userEmail = email.value.trim();
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = true;
  // Validate the EMAIL format
  if (!emailRegEx.test(userEmail)) {
    alert("Please enter a valid email address (e.g., user@example.com)");
    document.getElementById("emailError").innerText =
      "Invalid email format. Please check your entry.";
    isValid = false;
  } else {
    // Clear the error if email is valid
    document.getElementById("emailError").innerText = "";
  }

  // Return the validation result
  return isValid;
}

function validateForm() {
  const namesAreValid = validateNames();
  const emailIsValid = validateEmail();
  return true;
}
