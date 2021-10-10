// this is the list of usable characters for the passwrod generator
var lowerLetters = ["a","b","c","d"];
var upperLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","$","%","&","^","+","*","-","_","="];

// // Assignment Code
// this is the 'generate password' button
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// this is the function that generates new passwords
function writePassword() {
  // get LENGTH of password
  var getLength = prompt(
    "Enter the length of the password.\nNOTE: It must be a number between 8 and 128"
  );

  if (getLength < 8) {
    getLength = prompt("Please enter a number between 8 and 128"); 
  } 
  
  if (getLength > 128) {
    getLength = prompt("Please enter a number between 8 and 128");
  }
  console.log(getLength);

  // get LOWER CASE boolean
  var getLowerCase = confirm("do you want LOWER CASE characters?");
  console.log(getLowerCase);

  // get UPPER CASE boolean
  var getUpperCase = confirm("do you want UPPER CASE characters?");
  console.log(getUpperCase);

  // get NUMERIC CHARACTER boolean
  var getNumbers = confirm("do you want numeric characters?");
  console.log(getNumbers);

  // define SPECIAL CHARACTER boolean
  var getSpecial = confirm("do you want SPECIAL characters?");
  console.log(getSpecial);

  var passwordText = document.querySelector("#password");

  if (!getLowerCase && !getUpperCase && !getNumbers && !getSpecial) {
    alert("You must select at least one criteria");
    return;
  }

  var allUserOptions = [];
  var guaranteedOptions = [];
  var result = [];

  if (getLowerCase) {
    allUserOptions = allUserOptions.concat(lowerLetters);
    var index = Math.floor(Math.random() * lowerLetters.length);
    guaranteedOptions.push(lowerLetters[index]);
  }

  if (getUpperCase) {
    allUserOptions = allUserOptions.concat(upperLetters);
    var index = Math.floor(Math.random() * upperLetters.length);
    guaranteedOptions.push(upperLetters[index]);
  }

  if (getNumbers) {
    allUserOptions = allUserOptions.concat(numbers);
    var index = Math.floor(Math.random() * numbers.length);
    guaranteedOptions.push(numbers[index]);
  }

  if (getSpecial) {
    allUserOptions = allUserOptions.concat(specialCharacters);
    var index = Math.floor(Math.random() * specialCharacters.length);
    guaranteedOptions.push(specialCharacters[index]);
  }

  for (var i = 0; i < getLength; i++) {
    var index = Math.floor(Math.random() * allUserOptions.length);
    result.push(allUserOptions[index]);
  }

  for (var i = 0; i < guaranteedOptions.length; i++) {
    result[i] = guaranteedOptions[i];
  }

  console.log(result);

  var passwordText = document.querySelector("#password");
  passwordText.value = result.join("");
}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---- GUIDE PROVIDED -----
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
