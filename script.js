// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Code Below this line.
// add variables for uppercase and lowercase 
const upperCase= [] = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
const lowerCase= [] = ("abcdefghijklmnopwqrstuvwxyz").split("")

// array of random special characters
const specialChar = [] = ("!@#$%&?+-*").split("")


// function to generate random number.
function randomNum() {
  num=Math.floor(Math.random()*10)
  console.log(num)
}

randomNum()
console.log(upperCase,lowerCase,specialChar)
function generatePassword() {
  
  
}

