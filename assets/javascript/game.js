//array for all choices by the computer

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsScore = 0;
var lossesScore = 0;
var guessesLeft = 9;
var guessesMade = [];

document.onkeyup = function(event) { 
    var winsScoreHTML = document.getElementById("winsScore");
    var lossesScoreHTML = docuemnt.getElementById("lossesScore");
    var guessesLeftHTML = document.getElementById("guessesLeft");
    var yourChoiceHTML = document.getElementById("guessesMade");

    var userChoice = event.key;

    var index = Math.floor(Math.random() * computerChoices.length);

    yourChoiceHTML.innerHTML = " " + unserChoice;

}