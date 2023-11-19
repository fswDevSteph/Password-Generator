// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log('Running from my button Click');

  // 1. Prompt the user for the password length until a valid input is provided
  var userPasswordLength;
  do {
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

  // userPasswordLength is a valid number between 8 and 128
  alert('Password length valid! Please continue');

  // 2. Ask the user if they want uppercase
  var includeUppercase = prompt(
    "Do you want to include any random UPPERCASE letters? Enter '1' for Yes and '0' for No"
  );

  if (includeUppercase === '1') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert('Sure! We will include Uppercase letters.');
  } else if (includeUppercase === '0') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert("Okay, we won't include Uppercase letters.");
  } else {
    alert('Invalid answer. Try again.');
  }

  // 3. Ask user if they want to include lowercase.
  var includeLowercase = prompt(
    "Do you want to include any random lowercase letters? Enter '1' for Yes and '0' for No"
  );
  if (includeLowercase === '1') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert('Sure! We will include lowercase letters.');
  } else if (includeLowercase === '0') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert("Okay, we won't include lowercase letters.");
  } else {
    alert('Invalid answer. Try again.');
  }

  // 4. Ask user if they want to include numbers 0-9
  var includeNum = prompt(
    "Do you want to include any random numbers from 0-9? Enter '1' for Yes and '0' for No"
  );

  if (includeNum === '1') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert('Sure! We will include numbers.');
  } else if (includeNum === '0') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert("Okay, we won't include any numbers.");
  } else {
    alert('Invalid answer. Try again.');
  }

  // 5. Ask user if they want to include special chars !@#$%^&*+
  var includeNSpeChar = prompt(
    "Do you want to include any random Special Characters? They will be from a random selection of !@#$%^&*+. Enter '1' for Yes and '0' for No"
  );

  if (includeNSpeChar === '1') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert('Sure! We will include special characters.');
  } else if (includeNSpeChar === '0') {
    // Corrected: compare against string
    // Acknowledge their answer
    alert("Okay, we won't include any special characters.");
  } else {
    alert('Invalid answer. Try again.');
  }

  // Continue with other questions or password generation logic as needed
  // For now, displaying a message
  alert('Password generated and displayed!');
}

// Add event listener to the #generate button
generateBtn.addEventListener('click', writePassword);
