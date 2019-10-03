//If linking .js file doesn't work, copy and paste to BOTTOM of .html

// Establishing first instance of Generated Password array to be filled by criteria
var passWord = [];

// Pool of acceptable, user chosen criteria to be added to the passWord array
var passwordPotentials = [];

// Not sure if I should make these variable arrays, or just variable spans (?)
// Special characters, if True, add to passwordPotentials array
var specChars = " ! # % &'()*+,-./:;<=>?@[\]^_`{|}~";

// Numeric characters, if True, add to passwordPotentials array
var numChars = "1 2 3 4 5 6 7 8 9";

// Lowercase characters, if True, add to passwordPotentials array
var lowChars = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

//Uppercase characters, if True, add to passwordPotentials array
var upChars = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

// Create variable for where password will appear in the HTML (This might have to have a "Write" constructor//move to the end of the code?)
var passwordText = document.getElementById("password");

function pwGen() {// Pressing "Generate Password" button launches the password generator
//First User ask for password length (numeric value)
    var pwLength = prompt("How many characters would you like your password to be?")    

if (pwLength >= 8 && pwLength <= 128) { //constrain the length of the password to between 8 and 128
    arr.length = pwLength; //if true, make the array the inputed length
    
} else {
    prompt("Password must be between 8 and 128 characters long");
    
}

//Second User-ask for special characters (T or F)
var pwSpecChars = confirm("Click OK to confirm including special characters.");

if (pwSpecChars) {
    //Include Special Characters to the passwordPotentials array/or other
    passwordPotential  = [ "" + specChars];
 } else {
    passwordPotential = [""];
 }
//Third User-ask for numeric characters (T or F)
var pwNumChars = confirm("Click OK to confirm including numeric characters.");
}
if (pwNumChars) {
//Include Special Characters to the passwordPotentials array/or other
    passwordPotential  = [ "" + numChars];
 } else {
    passwordPotential = [""];
//Fourth User-ask for lowercase (T or F)
var pwLowChars = confirm("Click OK to confirm including lowercase characters.");
 }
if (pwNumChars) {
//Include Special Characters to the passwordPotentials array/or other
    passwordPotential  = [ "" + numChars];
 } else {
    passwordPotential = [""];
 }
// Pool of variables for copying and pasting
/*
 //First User ask for password length (numeric value)
var pwLength = prompt("How many characters would you like your password to be?");
//Second User-ask for special characters (T or F)
var pwSpecChars = confirm("Click OK to confirm including special characters.");
//Third User-ask for numeric characters (T or F)
var pwNumChars = confirm("Click OK to confirm including numeric characters.");
//Fourth User-ask for lowercase (T or F)
var pwLowChars = confirm("Click OK to confirm including lowercase characters.");
//Fifth User-ask for uppercase (T or F)
var pwUpChars = confirm("Click OK to confirm including uppercase characters.");
*/

//create variables for where the password will appear


// Last function, copy generated password to the clipboard
//Will this work without the <p> tag and just the <textarea> tag? "innerHtml" for <textarea>, maybe?

function pwCopy() {
    var copyText = document.getElementById("password");

    copyText.querySelector();
     document.execCommand("copy");

     alert("Your password "+ copyText.value + "was copied to your clipboard.");
}

//Console.log for debugging purposes

console.log("Password length will be " + pwLength + " long");
