//If linking .js file doesn't work, copy and paste to BOTTOM of .html

//Global variables

var pwPotential = [];//Initially Empty array holding the character conditions chosen by the user

var pwCreated = [];

var pwLength = 0; // User chosen length of the password


function pwGen(pwLength) {// Pressing "Generate Password" button launches the password generator
//First User ask for password length (numeric value)

    pwLength = prompt("How many characters would you like your password to be?")    
    console.log("Password length will be " + pwLength + " characters long");
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
 /*function pwCheck() {
    if (pwSpecChars === false || pwNumChars === false || pwLowChars === false || pwUpChars === false) {
    alert("Password must contain at least one character set. Okay?")
    return false
    }
 }
*/






function start(){ //On click event to generate the password
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
                alert("Password must contain at least one character set. Please.")//Prompts in the right situation, but doesn't return to the proper step
                return false               
            }
            else {
                passwordHasNotBeenChoosen != true
                
                console.log(pwLength + "is the password length chosen by the user");
                console.log(pwPotential.length + " total length of the pwPotential array");
                //var i;
                //for (i = 0; i < pwLength; i++) {
                    pwCreated += pwPotential[Math.floor(Math.random() * pwPotential.length) -1];// Picks random characters from the pwPotential array
                    
                    console.log(pwCreated + " is the pwCreated");
                    //pwCreated = [i++];
                    document.getElementById("password").innerHTML = pwCreated;// Print the password into the text box
                    break;
                }          
            }
    }           
}


//return pwPotential([]);

// Last function, copy generated password to the clipboard
//Will this work without the <p> tag and just the <textarea> tag? "innerHtml" for <textarea>, maybe?

function pwCopy() {
    var copyText = document.getElementById("password");

    copyText.select();
    document.execCommand("copy");

     alert("Your password "+ copyText.value + "was copied to your clipboard.");
}


