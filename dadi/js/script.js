// Variables

var userDiceInput = Math.floor(Math.random() * 6) + 1;
var computerDiceInput = Math.floor(Math.random() * 6) + 1;

console.log("User dice input: " + userDiceInput);
console.log("Computer dice input: " + computerDiceInput);

if (userDiceInput == computerDiceInput) {
  alert("Nessuno ha vinto");
} else if (userDiceInput < computerDiceInput) {
  alert("Il computer ha vinto!");
} else {
  alert("Hai vinto contro il computer!");
}
