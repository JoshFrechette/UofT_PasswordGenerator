//If linking .js file doesn't work, copy and paste to BOTTOM of .html

//Global variables
//Initially Empty array holding the character conditions chosen by the user
var pwPotential = [];
//Where the password will be born from, once turned into a string
var pwCreated = [];


function pwGen(pwLength) {// Pressing "Generate Password" button launches the password generator
//First User ask for password length (numeric value)

    pwLength = prompt("How many characters would you like your password to be?")    
    console.log(pwLength);
    if (pwLength >= 8 && pwLength <= 128) { //constrain the length of the password to between 8 and 128
       // arr.length = pwLength; //if true, make the array the inputed length
        return true
    } else {
        alert("Password must be between 8 and 128 characters long");
        return false
    }  
}


function specChars(pwSpecChars) {
    pwSpecChars = confirm("Click OK to confirm including special characters.");

    if (pwSpecChars) { 
        return true
    }

    if (pwSpecChars === false || pwNumChars === false || pwLowChars === false || pwUPChars === false) {
        return false
    }
}

function numChars(pwNumChars) {
    pwNumChars = confirm("Click OK to confirm including numbers.");
    
    if (pwNumChars) { 
        return true
    }
}

function lowChars(pwLowChars) {
    pwLowChars = confirm("Click OK to confirm including lowercase characters.");
        
    if (pwLowChars) { 
        return true
    }
}
    function upChars(pwUpChars) {
        pwUpChars = confirm("Click OK to confirm uppercase characters.");
        
        if (pwUpChars) { 
            return true
        }
 }







function start(){
    console.log("started")
    var step = 1;
    var passwordHasNotBeenChoosen = true;
    while(passwordHasNotBeenChoosen){
        if(step===1){
            if (pwGen()===true) {
                step = 2
            } 
        } else if(step===2) {
            if (specChars()===true) {
                pwPotential.push("!", "#", "%", "&","(",")", "*", "+", "-" , ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", ",", "{", "|", "}", "~");
                console.log(pwPotential);
                step = 3
            }
            else {
                step = 3
            }
        } else if(step===3) {
           if (numChars()===true) {
               console.log(pwPotential);
               pwPotential.push("0","1", "2", "3", "4", "5", "6", "7", "8", "9");
               step = 4
           }
           else {
               step = 4
           }
        } else if(step===4) {
            if (lowChars()===true) {
                pwPotential.push("a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
                console.log(pwPotential);
                step = 5
            }
            else {
                step = 5
            }
        } else if(step===5) {
            if (upChars()===true) {
                pwPotential.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
                console.log(pwPotential);
                step = 6
            }
            else {
                 step = 6
            }
        } else if(step===6) {
            if (pwPotential.length <= 1) {
                alert("Password must contain at least one character set.")
                return false
                step = 2
            }
            else {
                passwordHasNotBeenChoosen != true;
            }
            
}

}
return pwPotential([]);
}


//If array is empty, return to step 2
//If pwPotential.length <= 1; alert user, return to step 2

/*
function pwGenerate() {
    if (specChars = true) {
        pwPotential.push ("!", "#", "%", "&","(",")", "*", "+", "-" , ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", ",", "{", "|", "}", "~");
    }
    if (numChars = true) {
        pwPotential.push ("1 2 3 4 5 6 7 8 9");
    }
    if (lowChars = true) {
        pwPotential.push ("a b c d e f g h i j k l m n o p q r s t u v w x y z");
    }
    if (upChars = true) {
        pwPotential.push ("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
    }
}
*/




/*

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

//console.log("Password length will be " + pwLength + " long");
