// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log('Running from my button Click');
  function GenRandoPass(length, numbers, lowercase, uppercase, spechar) {
    var allowedInputs = '';

    if (numbers) {
      characters += '1234567890';
    }

    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (spechar) {
      characters += '!@#$%^&*()-_=+';
    }
  }
  //1.Ask user for length of password between 8-128 char
  //1.1 Validate
  //1.1.1If length is not between 8-128 char ...? exit and alert and restart
  //1.1.2If it is between 8-128char, move on to next criteria
  //2. Ask which char types to include:
  // 2.2lower? confirm y/n
  // validate
  // 2.3UPPER? confirm y/n
  // validate
  // 2.4numeric? confirm y/n
  // validate
  // 2.5$pecial? - confirm y/n
  // validate
  //at least 1 char type must* be selected
  //3.Store responses
  //3.3 Randomly combine user specifications into their password (generate pass when all steps have been answered)
  //display the pass
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
