// Variables

var userDiceInput = Math.floor(Math.random() * 6) + 1;
var computerDiceInput = Math.floor(Math.random() * 6) + 1;

console.log("User dice input: " + userDiceInput);
console.log("Computer dice input: " + computerDiceInput);

var resultMessage;

if (userDiceInput == computerDiceInput) {
  resultMessage = "Nessuno ha vinto";
} else if (userDiceInput < computerDiceInput) {
  resultMessage = "Il computer ha vinto!";
} else {
  resultMessage = "Hai vinto contro il computer!";
}

alert(resultMessage);
