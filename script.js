// Assignment code
var generateBtn = document.querySelector("#generate");
var getRandomLower;
var getRandomUpper;
var getRandomNumber;
var getRandomSymbol;
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Generator function

function getRandomLower() {
  return String.fromCharCode(math.floor(math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(math.floor(math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(math.floor(math.random() * 26) + 97);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[math.floor(math.random() * symbols.length)];
}

//Function used to determine the length of the password
function getPasswordLength() {
  passwordLength = prompt(
    "Choose how many characters long you'd like your password to be (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    getPasswordLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    getPasswordLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    getPasswordLength();
  } else {
    alert(
      "The next three screens will ask you what types of characters you would like to be included in your password."
    );
  }
  return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase() {
  uppercaseCheck = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers() {
  numberCheck = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial() {
  specialCheck = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator and
//the charAt method
function generatePassword() {
  getPasswordLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = getRandomLower;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += getRandomUpper + getRandomNumber + getRandomSymbol;
  } else if (uppercaseCheck && numberCheck) {
    characters += getRandomUpper + getRandomNumber;
  } else if (numberCheck && specialCheck) {
    characters += getRandomNumber + getRandomSymbol;
  } else if (uppercaseCheck && specialCheck) {
    characters += getRandomUpper + getRandomSymbol;
  } else if (uppercaseCheck) {
    characters += getRandomUpper;
  } else if (numberCheck) {
    characters += getRandomNumber;
  } else if (specialCheck) {
    characters += getRandomSymbol;
  } else {
    characters === getRandomLower;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
