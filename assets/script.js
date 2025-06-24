// Select the input field for Player One
let PlayerOneInputField = document.querySelector(".input_text_Box_one");
// Select the Player One submit button
let PlayerOneButton = document.querySelector(".player_one_submit_btn");
// Select the warning message element for Player One
let PlayerOneTextWarning = document.querySelector(".player_one_warning");

// When Player One clicks the button, run a function
PlayerOneButton.addEventListener("click", function(){
  if(PlayerOneInputField.value === ""){
    // if the input filed is empty, show the warning massage 
    PlayerOneTextWarning.innerHTML =  "Please enter a number. This field can't be left blank.";
    
  } 
  
});
