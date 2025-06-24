// Select the input field for Player One
let playerOneInputField = document.querySelector(".input_text_Box_one");

// Select the Player One submit button
let PlayerOneButton = document.querySelector(".player_one_submit_btn");

// Select the warning message element for Player One
let PlayerOneTextWarning = document.querySelector(".player_one_warning");

// Select the section for player One
let playerOneSection = document.querySelector(".player_section_one")

// Select the section for player Two
let playerTwoSection = document.querySelector(".player_section_two")

// Select the input field for Player Two
let playerTwoInputFiled = document.querySelector(".input_text_Box_two")

// Select the warning message element for Player Two
let playerTwoTextWarning = document.querySelector(".player_two_warning")

// Select the Player Two submit button
let playerTwoButton = document.querySelector(".player_two_submit_btn")

// Select the element to show the "Chances" title
let chanceTitle = document.querySelector('.chance_title');

// Select the element to show the remaining chances
let chance = document.querySelector(".chance");

// Select the element to display the winner
let winner = document.querySelector(".winner");

// Select the main title heading
let titleHeading = document.querySelector(".heading")

// Initialize total number of chances
let chanceCount = 5;

// When Player One clicks the button, run a function
PlayerOneButton.addEventListener("click", function(){
  if(playerOneInputField.value === ""){
    // If the input field is empty, show the warning message
    PlayerOneTextWarning.innerHTML =  "Please enter a number. This field can't be left blank.";
  } 
  else if (isNaN(playerOneInputField.value)) {
    // If the input is not a number, show warning message
    PlayerOneTextWarning.innerHTML = '  Invalid input.  Text is not accepted.';
    // Clear the field
    playerOneInputField.value= "";
  }
  else if (playerOneInputField.value < 1 || playerOneInputField.value > 10) {
    // If the number is not between 1 and 10, show a warning
    PlayerOneTextWarning.innerHTML = 'Please enter a valid number between 1 to 10';
    // Clear the field
    playerOneInputField.value= "";
  } else {
    // If input is valid, hide Player One section and show Player Two section
    playerOneSection.style.display = 'none';
    playerTwoSection.style.display = 'block';
    // Clear the Player Two input field
    playerTwoInputFiled.value= "";
  }
});

// When Player Two clicks the button, run a function
playerTwoButton.addEventListener("click", function () {
  if (playerTwoInputFiled.value === "") {
    // If the input field is empty, show the warning message
    playerTwoTextWarning.innerHTML = "Please enter a number. This field can't be left blank.";
  } 
  else if (isNaN(playerTwoInputFiled.value)) {
    // If the input is not a number, show warning message
    playerTwoTextWarning.innerHTML = "Invalid input. Text is not accepted.";
  } 
  else if (playerTwoInputFiled.value < 1 || playerTwoInputFiled.value > 10) {
    // If number is not between 1 and 10, show warning
    playerTwoTextWarning.innerHTML = "Please enter a valid number between 1 to 10";
  } 
  else {
    // If input is valid, clear warning and show chances
    playerTwoTextWarning.innerHTML = "";
    chanceTitle.style.display = "block";
    chance.innerHTML = chanceCount;

    if (chanceCount > 0) {
      // Decrease the chance count by 1
      chanceCount--;
      // Update chance display
      chance.innerHTML = chanceCount;

      if (playerOneInputField.value === playerTwoInputFiled.value) {
        // If guess is correct, show winner message
        winner.innerHTML = "Winner";
        winner.style.color = "red";

        // When the guess is correct, hide the chance counter and input fields
        playerTwoButton.style.display = "none";
        chanceTitle.style.display = "none";
        playerTwoInputFiled.style.display = "none"
      } else {
        // If guess is wrong, show remaining chances
        playerTwoTextWarning.innerHTML = ` Wrong guess! You have ${chanceCount} chance left.`;
      }
    }
  }
});
