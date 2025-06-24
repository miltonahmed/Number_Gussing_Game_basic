// Select the input field for Player One
let playerOneInputField = document.querySelector(".input_text_Box_one");

// Select the Player One submit button
let PlayerOneButton = document.querySelector(".player_one_submit_btn");

// Select the warning message element for Player One
let PlayerOneTextWarning = document.querySelector(".player_one_warning");

// Select the section for Player One
let playerOneSection = document.querySelector(".player_section_one");

// Select the section for Player Two
let playerTwoSection = document.querySelector(".player_section_two");

// Select the input field for Player Two
let playerTwoInputField = document.querySelector(".input_text_Box_two");

// Select the warning message element for Player Two
let playerTwoTextWarning = document.querySelector(".player_two_warning");

// Select the Player Two submit button
let playerTwoButton = document.querySelector(".player_two_submit_btn");

// Select the area where remaining chances will be shown
let chanceTitle = document.querySelector(".chance_title");

// Select the element where the chance count will be displayed
let chance = document.querySelector(".chance");

// Select the element where the winner message will be shown
let winner = document.querySelector(".winner");

// Select the heading text element
let titleHeading = document.querySelector(".heading");

// Initialize the chance counter (Player Two gets 5 tries)
let chanceCount = 5;

// Declare a variable to store the secret number from Player One
let secretNumber = null;

//  PLAYER ONE LOGIC

// When Player One clicks the submit button
PlayerOneButton.addEventListener("click", function () {
  // Get the value entered by Player One
  let value = playerOneInputField.value;

  // If input is empty
  if (value === "") {
    PlayerOneTextWarning.innerHTML = "Please enter a number. This field can't be left blank.";
  }
  // If input is not a number
  else if (isNaN(value)) {
    PlayerOneTextWarning.innerHTML = "Invalid input. Text is not accepted.";
    playerOneInputField.value = ""; // Clear the field
  }
  // If input is outside the range of 1-10
  else if (value < 1 || value > 10) {
    PlayerOneTextWarning.innerHTML = "Please enter a valid number between 1 to 10.";
    playerOneInputField.value = ""; // Clear the field
  }
  // If input is valid
  else {
    secretNumber = parseInt(value); // Store Player One's number
    playerOneSection.style.display = "none"; // Hide Player One section
    playerTwoSection.style.display = "block"; // Show Player Two section
    playerTwoInputField.value = ""; // Clear Player Two's input field
    PlayerOneTextWarning.innerHTML = ""; // Clear warning
  }
});

// ---------------------- PLAYER TWO LOGIC ------------------------

playerTwoButton.addEventListener("click", function () {
  // Get the guess entered by Player Two
  let guess = playerTwoInputField.value;

  // If input is empty
  if (guess === "") {
    playerTwoTextWarning.innerHTML = "Please enter a number. This field can't be left blank.";
  }
  // If input is not a number
  else if (isNaN(guess)) {
    playerTwoTextWarning.innerHTML = "Invalid input. Text is not accepted.";
    playerTwoInputField.value = ""; // Clear the field
  }
  // If input is outside the range of 1-10
  else if (guess < 1 || guess > 10) {
    playerTwoTextWarning.innerHTML = "Please enter a valid number between 1 to 10.";
    playerTwoInputField.value = ""; // Clear the field
  }
  // If input is valid
  else {
    guess = parseInt(guess); // Convert input to number
    playerTwoInputField.value = ""; // Clear the field
    playerTwoTextWarning.innerHTML = ""; // Clear any previous warnings
    chanceTitle.style.display = "block"; // Show the "Chance" heading

    // Check if guess is correct
    if (guess === secretNumber) {
      winner.innerHTML = "🎉 Player Two is the Winner!"; // Success message
      winner.style.color = "green"; // Change message color
      chanceTitle.style.display = "none"; // Hide chance counter
      playerTwoButton.style.display = "none"; // Hide guess button
      playerTwoInputField.style.display = "none"; // Hide input box
      titleHeading.style.display = "none"; // Hide title
    } else {
      chanceCount--; // Decrease the chance
      chance.innerHTML = chanceCount; // Update the display

      // If all chances are used
      if (chanceCount === 0) {
        winner.innerHTML = `❌ Game Over! The correct number was ${secretNumber}.`; // Show correct answer
        winner.style.color = "red"; // Red color for fail
        playerTwoButton.style.display = "none"; // Disable further play
        playerTwoInputField.style.display = "none";
        titleHeading.style.display = "none";
        chanceTitle.style.display = "none";
      } else {
        // Show remaining chances
        playerTwoTextWarning.innerHTML = `❌ Wrong guess! You have ${chanceCount} chance(s) left.`;
      }
    }
  }
});
