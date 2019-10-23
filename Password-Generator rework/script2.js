//orginal script to switch to

//If linking .js file doesn't work, copy and paste to BOTTOM of .html

//Global variables
var pwLength = 0; // User chosen length of the password
var pwPotential = []; //Initially Empty array holding the character conditions chosen by the user
var pwCreated = []; // Empty array to hold the password
//Fields for the possible character fields
var password = ""; //Empty string to print in text field
var specChars = "!@#$%^~`&*()-=_+|}{?<>";
var numChars = "1234567890";
var lowChars = "abcedfghijklmnopqrstuvwxyz";
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// Pressing "Generate Password" button launches the password generator
//First User ask for password length (numeric value)




/*function specChars(pwSpecChars) {
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
function start() { //On click event to generate the password
    console.log("started")

    var step = 1;
    var passwordHasNotBeenChoosen = true;

    while (passwordHasNotBeenChoosen) {
        if (step === 1) {
            pwLength = prompt("How long would you like your password to be?")
            console.log("Password length will be " + pwLength + " characters long");
        }
        if (pwLength <= 8 && pwLength >= 128) { //constrain the length of the password to between 8 and 128
            // arr.length = pwLength; //if true, make the array the inputed length
            alert("Password must be between 8 and 128 characters long");

        } else {
            //(pwGen()===true)
            step = 2
            console.log("made it to step 2")

        }
        if (step === 2) {
            //if (specChars()===true) {
            console.log("made it to step 3")

            pwSpecChars = confirm("Click OK to confirm including special characters.");
            pwPotential.push(speChars);
            console.log(pwPotential);
            step = 3
        } else {
            step = 3
        }

    if (step === 3) {
        if (numChars() === true) {
            pwNumChars = confirm("Click OK to confirm including numbers.");
            pwPotential.push(numChars);
            console.log(pwPotential);
            step = 4
        } else {
            step = 4
        }
    } else if (step === 4) {
        if (lowChars() === true) {
            pwLowChars = confirm("Click OK to confirm including lowercase characters.");
            pwPotential.push(lowChars);
            console.log(pwPotential);
            step = 5
        } else {
            step = 5
        }
    } else if (step === 5) {
        if (upChars() === true) {
            pwUpChars = confirm("Click OK to confirm uppercase characters.");
            pwPotential.push(upChars);
            console.log(pwPotential);
            step = 6
        } else {
            step = 6
        }
    } else if (step === 6) {
        if (pwPotential.length <= 1) {
            alert("Password must contain at least one character set. Please.") //Prompts in the right situation, but doesn't return to the proper step
            step = 2
        } else {
             passwordHasNotBeenChoosen = false
        
            console.log(pwLength + " is the password length chosen by the user");
            console.log(pwPotential.length + " total length of the pwPotential array");
            //var i;
            //or (i = 0; i < pwLength; i++) {
            pwCreated += pwPotential[Math.floor(Math.random() * pwPotential.length) - 1]; // Picks random characters from the pwPotential array

            console.log(pwCreated + " is the pwCreated");
            //pwCreated = [i++];
            document.getElementById("password").innerHTML = pwCreated; // Print the password into the text box
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

    alert("Your password " + copyText.value + " was copied to your clipboard.");
}