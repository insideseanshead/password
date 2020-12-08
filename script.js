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

// Empty Password Array
let passValues = [];

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
  let passLength = prompt("How many characters would you like your password to be?")
  // check pass length between 12 & 72 characters in length

  //TODO: confirm if user wants Uppercase Letters

  //TODO: if true push upperCase array to passValues Array

  //TODO: confirm if user wants lowercase Letters

  //TODO: if true push lowercase array to passValues Array

  //TODO: confirm if user wants specialChar

  //TODO: if true push specialChar array to passValues Array

  //TODO: confirm if user wants numbers

  //TODO: if true push numbers array to passValues Array

  //TODO: Check to make sure user added at least one type of character

  //TODO: use loop to pull random characters from passValues Array

  //TODO: Make sure given password has at least one of each selected character

  //TODO: If password does not meet condition create new password from pre selected optopns until conditions are met.

  //TODO: If password meets all conditions return password
}

