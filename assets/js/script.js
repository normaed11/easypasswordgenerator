// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// // Assignment code here
function generatePassword() {
  alert("Welcome to easy password ! Please answer the prompts to generate password. Let's get started ! Cancel=NO OK=YES ")
  // creating the prompt for number of characters between 8 and 128
  var passLength = prompt("Choose number of characters between 8 and 128")
  while (passLength > 128 || passLength < 8) {
    passLength = prompt("Choose number of characters between 8 and 128")

  }
  var number = confirm("Include numbers ?")
  var lowercase = confirm("Include lowercase ?")
  var uppercase = confirm("Include uppercase?")
  var symbols = confirm("Include symbols?")
  console.log(passLength, number, lowercase, uppercase,
    symbols)

  var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var lowercaseArray = 
    
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
