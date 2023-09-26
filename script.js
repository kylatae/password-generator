// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){


  var pwinput = prompt("How long do you want your password to be?(use a number between 8 and 128)");
  var pwlength = Math.abs(Math.floor(Number(pwinput))); 
  if (isNaN(pwlength)|| pwlength < 8 || pwlength > 128) {
     alert("You failed to enter a number between 8 and 128") ;
    return;
  }

  console.log(pwlength);
  var pwlower = confirm("Use Lowercase Characters?")
  var pwalpha = confirm("Use Alpha Characters?")
  var pwnumeric = confirm("Use Numeric Characters?")
  var pwsymbol = confirm("Use Special Characters?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
