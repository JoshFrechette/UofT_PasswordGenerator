//Global Variables

var pwLength = 0; // User chosen length of the password
var pwPotential = []; //Initially Empty array holding the character conditions chosen by the user
var pwCreated = []; // Empty array to hold the password
//Fields for the possible character fields
var password = ""; //Empty string to print in text field
var specChars = "!@#$%^~`&*()-=_+|}{?<>";
var numChars = "1234567890";
var lowChars = "abcedfghijklmnopqrstuvwxyz";
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function start() {  // Pressing "Generate Password" button launches this function
    console.log("Password Generate Button was pressed")
    pwLength = prompt("How many characters would you like your password to be?") 
    console.log(pwLength + " is the password length chosen by the user"); 
    if (pwLength >= 8 && pwLength <= 128) { //constrain the length of the password to between 8 and 128
        pwSpecChars = confirm("Click OK to confirm including special characters.");
        pwNumChars = confirm("Click OK to confirm including numbers.");
        pwLowChars = confirm("Click OK to confirm including lowercase characters.");
        pwUpChars = confirm("Click OK to confirm uppercase characters.");
          if (pwSpecChars === true) { 
              pwPotential.push(specChars); //Add special characters to the pwPotential array
              console.log(pwPotential.length + " is the length of the pwPotential array and Special Characters have been added");
          }
          if (pwNumChars === true) { 
              pwPotential.push(numChars);//Add numbers to the pwPotential array
              console.log(pwPotential.length + " is the length of the pwPotential array and Numeric Characters have been added");
          }
          if (pwLowChars === true) { 
              pwPotential.push(lowChars);//Add lowercase characters to the pwPotential array
              console.log(pwPotential.length + " is the length of the pwPotential array and Lowercase Characters have been added");
          }
          if (pwUpChars === true) { 
              pwPotential.push(upChars); //Add Uppercase characters to the pwPotential array
              console.log(pwPotential.length + " is the length of the pwPotential array and Uppercase Characters have been added");

          }
          /*if (pwPotential.length <= 1) {
              alert("Password must contain at least one character set. Please.") //Prompts in the right situation, but doesn't return to the proper step
              start(pwLength >= 8 && pwLength <= 128) //Return to the first step of chosing the inclusion of character sets
              
          }*/
        for (let i = 0; i < pwLength; i++){ //Continue the loop until the length choson by the user has been reached
            let makePW = Math.floor(Math.random() * Math.floor(pwPotential.length));//Create the process by which random characters are drawn from pwPotential array
            pwCreated.push(pwPotential[makePW][Math.floor(Math.random() * Math.floor(pwPotential[makePW].length - 1))])//Picks random characters from the pwPotential array
          
        } 
        pwCreated = pwCreated.join(""); // Turn the array into a string that can be printed onto the webpage
      } else {
        alert("Password must be between 8 and 128 characters long");
        start() //Return to the beginning of the function
      }
        console.log(pwCreated + " is the generated password");
        
        document.getElementById("password").innerHTML = pwCreated;// Print the password into the text box
}


// Last function, copy generated password to the clipboard
//Will this work without the <p> tag and just the <textarea> tag? "innerHtml" for <textarea>, maybe?

function pwCopy() {
    var copyText = document.getElementById("password");

    copyText.select();
    document.execCommand("copy");

     alert("Your password "+ copyText.value + " was copied to your clipboard.");
}

