// Select the input field for Player One
let PlayerOneInputField = document.querySelector(".input_text_Box_one");
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







// When Player One clicks the button, run a function
PlayerOneButton.addEventListener("click", function(){
  if(PlayerOneInputField.value === ""){
    // if the input filed is empty, show the warning massage 
    PlayerOneTextWarning.innerHTML =  "Please enter a number. This field can't be left blank.";
    
  } //if the input is a number, show the input value
  else if (isNaN(PlayerOneInputField.value)) {
    // if the input is not a number , show warning message
    PlayerOneTextWarning.innerHTML = '  Invalid input.  Text is not accepted.';
    // Clear the field
    PlayerOneInputField.value= "";
  }
  // if the input is a number between 1 to 10,
  else if (PlayerOneInputField.value < 1 || PlayerOneInputField.value > 10) {
    PlayerOneTextWarning.innerHTML = 'Please enter a valid number between 1 to 10';
    // Clear the field
    PlayerOneInputField.value= "";
  } else {
    //  If the input is a number between 1 to 10, hide the player one section and show the player two section
    playerOneSection.style.display = 'none';
    playerTwoSection.style.display = 'block';
    // Clear the field
    playerTwoInputFiled.value= "";
    
  }
  
});


