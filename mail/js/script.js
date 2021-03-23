var userEmailAdress = [
  "pincopopallo@gmail.com",
  "pallopinco@gmail.com",
  "gattusoringhio@gmail.com",
  "delpieroalessandro@gmail.com",
  "gabibborosso@gmail.com",
  "tapiro@gmail.com",
  "zahariea.c@gmail.com",
];

var userEmailInput = prompt("Inserisca il suo indirizzo email:");

var userEmailValid = false;

for (var i = 0; i < userEmailAdress.length; i++) {
  if (userEmailAdress[i] == userEmailInput) {
    userEmailValid = true;
  }
}

if (userEmailValid === true) {
  alert("Bentornato!");
} else {
  alert("Email non valida!");
}
