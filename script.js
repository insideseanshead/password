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
let passUnshuffled = [];
let finalPass = []

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
  // confirm if user wants Uppercase Letters
    let upperCaseSelect = confirm("Would you like your password to contain uppercase letters?")
  // if true push upperCase array to passValues Array
    if(upperCaseSelect){
      passValues.push(upperCase)
    }
  // confirm if user wants lowercase Letters
    let lowerCaseSelect = confirm("Would you like your password to contain lowercase letters?")
  // if true push lowercase array to passValues Array
    if(lowerCaseSelect){
      passValues.push(lowerCase)
    }
  // confirm if user wants specialChar
    let spectialSelect = confirm("Would you like your password to contain special characters?")
  // if true push specialChar array to passValues Array
    if(spectialSelect){
      passValues.push(specialChar)
    }
  // confirm if user wants numbers
    let numSelect = confirm("Would you like your password to contain numbers?")
  // if true push numbers array to passValues Array
    if(numSelect){
      passValues.push(numbers)
    }
  // Check to make sure user added at least one type of character
    if(upperCaseSelect === false && lowerCaseSelect === false && spectialSelect === false && numSelect === false){
      alert("You must select at least one type of character to include in your password.")
    } else {
    // use loop to pull random characters from passValues Array
    // Make sure given password has at least one of each selected character
      for(i=0;i<passValues.length;i++){
        passUnshuffled.push(passValues[i][Math.floor(Math.random()*passValues[i].length)])
      };

      for(e=0; e<passLength-passValues.length; e++){
        let randomArray = Math.floor(Math.random()*passValues.length)
        passUnshuffled.push(passValues[randomArray][Math.floor(Math.random()*passValues[randomArray].length)])
      }

      // return password as string
      finalPass = passUnshuffled.join()
      var res = finalPass.replace(/,/g, "")
      return res
    }
  
  }
}

