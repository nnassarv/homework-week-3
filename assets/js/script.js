// **** Arrays for ALL available characters ****
// these are the arrays with usable characters for the password generator. Each array is differentiated by its "type of character"
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l,","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","$","%","&","^","+","*","-","_","="];


// this is the 'generate password' button
var generateBtn = document.querySelector("#generate");

// *******************************************
// this is the function that generates new passwords
function writePassword() {
  // this variable will get the LENGTH of password via a window prompt
  var getLength = prompt(
    "Enter the length of the password.\n\nNOTE: It must be a number between 8 and 128"
  );

  // condition in case the lenght input is less than the minimum required 8
  if (getLength < 8) {
    getLength = prompt("Please enter a number between 8 and 128"); 
  } 
  
  // condition in case the lenght input is more than the maximum allowed 128
  if (getLength > 128) {
    getLength = prompt("Please enter a number between 8 and 128");
  }
  console.log(getLength);

  // this boolean will define if the password should have LOWER CASE LETTERS via a window prompt
  var getLowerCase = confirm("do you want LOWER CASE characters?");
  console.log(getLowerCase);

  // this boolean will define if the password should have UPPER CASE LETTERS via a window prompt
  var getUpperCase = confirm("do you want UPPER CASE characters?");
  console.log(getUpperCase);

  // this boolean will define if the password should have NUMBERS via a window prompt
  var getNumbers = confirm("do you want numeric characters?");
  console.log(getNumbers);

  // this boolean will define if the password should have SPECIAL CHARACTERS via a window prompt
  var getSpecial = confirm("do you want SPECIAL characters?");
  console.log(getSpecial);

  // this condition will make sure that at least one criteria is selected. Otherwise, it will return a warning window prompt 
  if (!getLowerCase && !getUpperCase && !getNumbers && !getSpecial) {
    alert("You must select at least one criteria");
    return;
  }
  
  
  // **** Arrays for resulting password based on criteria selected ****

  // this array will contain ALL possible characters from the arrays of the "character types" selected
  var allUserOptions = [];
  
  // this array is where we store a guranteed value from the character types selected. This way we ensure that at least one value from each character type selected will be part of the resulting password 
  var guaranteedOptions = [];
  
  // this is the resulting array of characters for our password
  var result = [];

  // **** Conditions for resulting arrays ****
  // if the user selected LOWER CASE characters...
  if (getLowerCase) {
    // 1. concatenate all corresponding characters to the "character pool"
    allUserOptions = allUserOptions.concat(lowerLetters);
    // 2. define a random index based on the number of characters in the index
    var index = Math.floor(Math.random() * lowerLetters.length);
    // 3. add one random character into the "guaranteed pool"
    guaranteedOptions.push(lowerLetters[index]);
  }

    // if the user selected UPPER CASE characters...
  if (getUpperCase) {
    // 1. concatenate all corresponding characters to the "character pool"
    allUserOptions = allUserOptions.concat(upperLetters);
    // 2. define a random index based on the number of characters in the index
    var index = Math.floor(Math.random() * upperLetters.length);
    // 3. add one random character into the "guaranteed pool"
    guaranteedOptions.push(upperLetters[index]);
  }

  // if the user selected NUMBER characters...
  if (getNumbers) {
    // 1. concatenate all corresponding characters to the "character pool"
    allUserOptions = allUserOptions.concat(numbers);
    // 2. define a random index based on the number of characters in the index
    var index = Math.floor(Math.random() * numbers.length);
    // 3. add one random character into the "guaranteed pool"
    guaranteedOptions.push(numbers[index]);
  }

  // if the user selected SPECIAL characters...
  if (getSpecial) {
    // 1. concatenate all corresponding characters to the "character pool"
    allUserOptions = allUserOptions.concat(specialCharacters);
    // 2. define a random index based on the number of characters in the index
    var index = Math.floor(Math.random() * specialCharacters.length);
    // 3. add one random character into the "guaranteed pool"
    guaranteedOptions.push(specialCharacters[index]);
  }

  // here we check the length provided and we use it to retrieve random characters from the concatenated pool of all available characters based on the criteria selected, then we push those random numbers into the result array
  for (var i = 0; i < getLength; i++) {
    var index = Math.floor(Math.random() * allUserOptions.length);
    result.push(allUserOptions[index]);
  }

  // here we check how many criteria options were selected (max. 4) and based on that number we loop to retrieve and then add our guaranteed values into the result array
  for (var i = 0; i < guaranteedOptions.length; i++) {
    result[i] = guaranteedOptions[i];
  }
  // console.log(result);


  // now we take our result array, join it to make it a string, and then display this string of characters in the area defined in our website
  var passwordText = document.querySelector("#password");
  passwordText.value = result.join("");
}

// Add event listener to generate button
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