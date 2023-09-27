// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomNumber()
{
 var rnum = Math.floor(Math.random() * 10);
 return rnum;
}

function randomSymbol()
{
  var rnum = Math.floor(Math.random() * 30); 
  symStr = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
  rsym = symStr.charAt(rnum);
  return rsym;
}

function randomLower()
{
  var rnum = Math.floor(Math.random() * 26); 
  lowStr = "abcdefghijklmnopqrstuvwxyz";
  rlow = lowStr.charAt(rnum);
  return rlow;
}

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
  var pwlength = Math.abs(Math.floor(Number(pwinput))); 
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
  if ((pwlower) || (pwupper) || (pwnumeric) || (pwsymbol))
  {
    console.log ("Before While");
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
