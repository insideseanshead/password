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
const lowerCase= [] = ("abcdefghijklmnopqrstuvwxyz").split("")

// array of random special characters
const specialChar = [] = ("!@#$%&?+-*").split("")

// array of numbers 1 to 10.
const numbers = [1,2,3,4,5,6,7,8,9]

function generatePassword() {
  let passLength = prompt("How many characters would you like your password to be?")
  // check pass length between 12 & 72 characters in length
  if(passLength < 12 || passLength > 72){
    alert("please pick a number between 12 and 72")
  } else {
  //TODO: confirm if user wants Uppercase Letters
    let upperCaseSelect = confirm("Would you like your password to contain uppercase letters?")
  //TODO: if true push upperCase array to passValues Array
    if(upperCaseSelect){
      passValues.push(upperCase)
    }
  //TODO: confirm if user wants lowercase Letters
    let lowerCaseSelect = confirm("Would you like your password to contain lowercase letters?")
  //TODO: if true push lowercase array to passValues Array
    if(lowerCaseSelect){
      passValues.push(lowerCase)
    }
  //TODO: confirm if user wants specialChar
    let spectialSelect = confirm("Would you like your password to contain special characters?")
  //TODO: if true push specialChar array to passValues Array
    if(spectialSelect){
      passValues.push(specialChar)
    }
  //TODO: confirm if user wants numbers
    let numSelect = confirm("Would you like your password to contain numbers?")
  //TODO: if true push numbers array to passValues Array
    if(numSelect){
      passValues.push(numbers)
    }
  //TODO: Check to make sure user added at least one type of character
    if(upperCaseSelect === false && lowerCaseSelect === false && spectialSelect === false && numSelect === false){
      alert("You must select at least one type of character to include in your password.")
    } else {
    //TODO: use loop to pull random characters from passValues Array
      
    //TODO: Make sure given password has at least one of each selected character

    //TODO: If password does not meet condition create new password from pre selected optopns until conditions are met.

    //TODO: If password meets all conditions return password
    }
  
  }
}

