// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring a random number generator
function randomInt(min, max){
  if(!max){
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max);
}
// Declaring random item selector function, selects item from list (array).
function randomItem (list){
  return list[randomInt(list.length)];
}
// Declaring the generatePassword function used in the writePassword function
function generatePassword(){
// Declaring the password length variable, the user is prompted and asked for the length.
  var passLength = window.prompt("How long would you like your password to be? ( Minimum 8 characters, maximum 128 characters. )");
  console.log(passLength);
// While loop for incorrect input from user, or cancellation. If the user hits cancel, the loop breaks and the function ends.
  while (true){
    if (passLength === null){
      return;
    }
    if (isNaN(passLength)){
      passLength = window.prompt("Please enter a numerical value between 8 and 128.");
      console.log(passLength);
    }
    else if (passLength <8 || passLength >128){
      passLength = window.prompt("Password length must be between 8 and 128 characters long.");
      console.log(passLength);
    }
    else{
      break;
    }
  }
  // Confirmation windows for each criteria.
 var passLower = window.confirm("Would you like to include lowercase letters?");
 var passUpper = window.confirm("Would you like to include uppercase letters?");
 var passNumbers = window.confirm("Would you like to include numbers?");
 var passSpecial = window.confirm("Would you like to include special characters?");

 // Arrays for password contents (lists).

 var numberList = [];
 // Sets the number array using a for loop.
 for (var i = 0; i < 10; i++){
  numberList[i] = i;
 }

 var symbolsList = ["!","@","#","$","%","^","&","*","(",")","<",">"];
 var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var uppercaseList = [];
 // Sets the uppercase array using the toUpperCase function within a for loop.
 for (var i = 0; i < lowercaseList.length; i++){
  uppercaseList[i] = lowercaseList[i].toUpperCase();
 }
 // Empty array that will be used to push each list into when the user selects criteria for their password.
 var criteria = [];


 
 if(passLower){
  criteria.push(lowercaseList);
 }
 if(passUpper){
  criteria.push(uppercaseList);
 }
 if(passNumbers){
  criteria.push(numberList);
 }
if(passSpecial){
  criteria.push(symbolsList);
}
// If no criteria are selected by the user, then numbers and uppercase characters will automatically be selected, and the user will be alerted with an appropriate message.
if(criteria.length === 0){
  criteria.push(numberList, uppercaseList);
  window.alert("Since no criteria were selected, uppercase letters and numbers will be used by default.");
}

// Declaring the generated password variable, this is the string variable that the proceeding for loop will store the randomly generated values into
var generatedPassword = "";
for (var i = 0; i < passLength; i++){
  var randomList = randomItem(criteria);
  var randomChar = randomItem(randomList);
  console.log(randomChar);
  generatedPassword += randomChar;
}

//Returns the value of generated password, this is the final product of the function, the users randomly generated password.
return generatedPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Changed '.value' to 'textContent' so that the data stored in the variable password would replace the placeholder text of the textarea element
  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
