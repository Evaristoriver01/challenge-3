// Assignment code here

  

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
function generatePassword () {
  var passwordLength = prompt("")
}

function writePassword() {
  document.getElementById(generateBtn).innerHTML = "#generate"
}
