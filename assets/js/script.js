// Assignment Code
// this is the 'generate password' button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this is the function that generated new passwords
function writePassword() {
  var password = generatePassword();
  // this is where the new password will be displayed
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
