/*The Password Validator: You are building a password validation feature. Create a function that checks if a 
given password meets the following criteria: at least 8 characters long, 
contains both uppercase and lowercase letters, and includes at least one digit.*/

let str = "gta";
let charCodeA = str.charCodeAt(0);
// console.log(charCodeA);

function passwordValidator(password){
    if (password.length < 8) {
      return false;
    } 
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    // Loop through each character of the password
    for (let i = 0; i < password.length; i++) {
      let charCode = password.charCodeAt(i);
  
      // Check if character is uppercase (between A-Z)
      if (charCode >= 65 && charCode <= 90) {
        hasUppercase = true;
      }
      // Check if character is lowercase (between a-z)
      else if (charCode >= 97 && charCode <= 122) {
        hasLowercase = true;
      }
      // Check if character is a digit (between 0-9)
      else if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      }
    }
    // Check if all criteria are met
    if (hasUppercase && hasLowercase && hasDigit) {
      return true;
    } else {
      return false;
    }
  }

  
function passwordValidator2(password) {
    if (password.length < 8) {
      return false;
    } 
    // Check for at least one uppercase letter
    let hasUppercase = /[A-Z]/.test(password);  
    // Check for at least one lowercase letter
    let hasLowercase = /[a-z]/.test(password);
    // Check for at least one digit
    let hasDigit = /\d/.test(password);  
    // Return true only if all criteria are met
    return hasUppercase && hasLowercase && hasDigit;
  }
  
  // Test the function
  let password1 = "Passw0rd"; // Meets all criteria
  console.log(passwordValidator(password1)); // Output: true
  
  let password2 = "abc123"; // Missing uppercase letter
  console.log(passwordValidator(password2)); // Output: false
  
  let password3 = "StrongPassword"; // Missing digit
  console.log(passwordValidator(password3)); // Output: false
  
  let password4 = "short"; // Less than 8 characters
  console.log(passwordValidator(password4)); // Output: false
  