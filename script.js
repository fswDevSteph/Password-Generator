// JavaScript code here

// Reference to the #generate element which is a button.
var generateBtn = document.querySelector('#generate');

// Function to write password to the #password input
function writePassword() {
  console.log('Running from my button Click');

  // Prompt the user for the password length until a valid input is provided
  var userPasswordLength;
  do {
    // The "do while" loop ensures that the code for the prompt will be executed at least once and then repeated UNTIL the specified conditions within the "while" part are met and valid inputs from the user are given.
    userPasswordLength = parseInt(
      prompt(
        'Choose the length of your password. It MUST be between 8-128 characters'
      )
    );
  } while (
    isNaN(userPasswordLength) ||
    userPasswordLength < 8 ||
    userPasswordLength > 128
  );

  // Ask user if they want to include lowercase
  var includeLowercase;
  do {
    includeLowercase = prompt(
      "Do you want to include any random lowercase letters? Enter '1' for Yes and '0' for No"
    );
  } while (includeLowercase !== '1' && includeLowercase !== '0');

  if (includeLowercase === '1') {
    alert('Sure! We will include lowercase letters.');
  } else {
    alert("Okay, we won't include lowercase letters.");
  }

  // Ask user if they want to include numbers 0-9
  var includeNum = prompt(
    "Do you want to include any random numbers from 0-9? Enter '1' for Yes and '0' for No"
  );

  if (includeNum === '1') {
    alert('Sure! We will include numbers.');
  } else if (includeNum === '0') {
    alert("Okay, we won't include any numbers.");
  } else {
    alert('Invalid answer. Try again.');
    return;
  }

  // Ask user if they want to include special chars !@#$%^&*+
  var includeNSpeChar = prompt(
    "Do you want to include any random Special Characters? They will be from a random selection of !@#$%^&*+. Enter '1' for Yes and '0' for No"
  );

  if (includeNSpeChar === '1') {
    alert('Sure! We will include special characters.');
  } else if (includeNSpeChar === '0') {
    alert("Okay, we won't include any special characters.");
  } else {
    alert('Invalid answer. Try again.');
    return;
  }

  // Generate password based on user inputs
  var characters = '';

  // Strings for character sets
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*+';

  // Include uppercase characters
  var includeUppercase = prompt(
    "Do you want to include any random UPPERCASE letters? Enter '1' for Yes and '0' for No"
  );
  if (includeUppercase === '1') {
    characters += uppercaseChars;
  }

  // Include lowercase characters
  if (includeLowercase === '1') {
    characters += lowercaseChars;
  }

  // Include numeric characters
  if (includeNum === '1') {
    characters += numericChars;
  }

  // Include special characters
  if (includeNSpeChar === '1') {
    characters += specialChars;
  }

  // Check if any character set is selected
  if (characters.length === 0) {
    alert('You must select at least one character set. Please try again.');
    return;
  }

  // Generate the password
  var generatedPassword = '';
  for (var i = 0; i < userPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters.charAt(randomIndex);
  }

  alert('Generated Password: ' + generatedPassword);

  return; //this should stop the program after the pass word is gneerated and displayed.
}

// Add event listener to the #generate button
generateBtn.addEventListener('click', writePassword);
