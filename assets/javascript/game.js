var letters = ["a", "h", "p", "k"];
var playerGuess = [];
var jsGuess  = null;
var attempts = 0;
var guessLeft = 9;
var won = 0;
var loss = 0;
var usedArray  = [];



var jsGuess = function() {
letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}
var updateGuessesSoFar = function() {
document.getElementById("payerGuess").innerHTML = playerGuess.join(", ");
}
   
var reset = function() {
    attempts = 0;
    guessLeft = 9;
    playerGuess = [];
    jsGuess();
}


document.onkeyup = function(event) {
var playerGuess = event.key;


if (attempts === 9) {
loss++;
}
if (playerGuess === jsGuess) {
won++;
}

if (playerGuess !== jsGuess) {
attempts++;
guessLeft--;
}
if (guessLeft < 0) {
reset();
}

if (usedArray.indexOf(playerGuess) >= 0) {

} else {
usedArray.push(playerGuess);
document.getElementById('playerGuess').innerHTML = usedArray;
console.log(usedArray);

}



document.getElementById('won').innerHTML = won;
document.getElementById('loss').innerHTML = loss;
document.getElementById('attempts').innerHTML = attempts;
document.getElementById('guessLeft').innerHTML = guessLeft;

won.innerText = ("winner", won);
         
};

