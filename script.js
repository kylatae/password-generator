// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates random number to add to the password
function randomNumber()
{
 var rnum = Math.floor(Math.random() * 10);
 return rnum;
}

// Creates symbol string and pulls a character randomly to add to the password
function randomSymbol()
{
  var rnum = Math.floor(Math.random() * 30); 
  symStr = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
  rsym = symStr.charAt(rnum);
  return rsym;
}

// Creates lowercase alphabet string and pulls a character randomly to add to the password
function randomLower()
{
  var rnum = Math.floor(Math.random() * 26); 
  lowStr = "abcdefghijklmnopqrstuvwxyz";
  rlow = lowStr.charAt(rnum);
  return rlow;
}

// Creates uppercase alphabet string and pulls a character randomly to add to the password
function randomUpper()
{
  var rnum = Math.floor(Math.random() * 26); 
  upStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rup = upStr.charAt(rnum);
  return rup;
}

function generatePassword()
{
  var pwinput = prompt("How long do you want your password to be?(use a number between 8 and 128)");
  // Taking the password length and pulling out the Absolute value and removing any decimal by rounding it down and turning pwinput into a number if possible
  var pwlength = Math.abs(Math.floor(Number(pwinput))); 
  // Testing for failure making, If the password length is not a Number, less than 8, or greater than 128, function returns
  if (isNaN(pwlength)|| pwlength < 8 || pwlength > 128) 
  {
    alert("You failed to enter a number between 8 and 128") ;
    return;
  }
  var pwlower = confirm("Use Lowercase Characters?");
  var pwupper = confirm("Use Uppercase Characters?");
  var pwnumeric = confirm("Use Numeric Characters?");
  var pwsymbol = confirm("Use Special Characters?");
  var nextchar = 0;
  var charcount = 0;
  genpass = "";
  // Checks to see if at least one character type was selected to continue
  if ((pwlower) || (pwupper) || (pwnumeric) || (pwsymbol))
  {
    console.log ("Before While");
    // used While instead of For because I only wanted to count a loop IF a random character was added to length
    // Does a random number to try and call a chara to be added to the string and if that type was selected by the random number and user it will add it
    while (charcount < pwlength)
    {
     nextChar = Math.floor(Math.random() * 4);
     if (nextChar === 0 && (pwlower))
     {
      genpass = genpass + randomLower();
      charcount++;
     }
     if (nextChar === 1 && (pwupper))
     {
      genpass = genpass + randomUpper();
      charcount++;
     }
     if (nextChar === 2 && (pwnumeric))
     {
      genpass = genpass + randomNumber();
      charcount++;
     }
     if (nextChar === 3 && (pwsymbol))
     {
      genpass = genpass + randomSymbol();
      charcount++;
     }
    }
  }
  else
  {
    alert("You failed to select any valid characters for your password!");
  }  
  return genpass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
