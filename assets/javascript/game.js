//array for all choices by the computer

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsScore = 0;
var lossesScore = 0;
var guessesLeft = 9;
var guessesMade = [];

var computerChoice = "";



var winsScoreHTML = document.getElementById("winsScore");
var lossesScoreHTML = document.getElementById("lossesScore");
var guessesLeftHTML = document.getElementById("guessesLeft");
var yourChoiceHTML = document.getElementById("guessesMade");

document.onkeyup = function (event) {

    if (guessesLeft === 9) {
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computers choice " + computerChoice);
    }

    var userChoice = event.key;
    console.log("users choice " + userChoice);

    guessesMade.push(userChoice);

    yourChoiceHTML.innerHTML = " " + guessesMade;
    
    if (userChoice === computerChoice) {
        winsScore++;
        guessesLeft = 9;
        winsScoreHTML.innerHTML = winsScore;
        alert("you win!");
        guessesMade.length = 0;
        yourChoiceHTML.innerHTML = " " + guessesMade;
        console.log("win");
    }
    else if (guessesLeft === 1) {
        lossesScore++;
        lossesScoreHTML.innerHTML = lossesScore;
        alert("you lose!");
        guessesLeft = 9;
        guessesMade.length = 0;
        yourChoiceHTML.innerHTML = " " + guessesMade;
        console.log("loss");

    } else if (userChoice != computerChoice) {
        guessesLeft--;
        guessesLeftHTML.innerHTML = " " + guessesLeft;
        console.log("miss");

    }




}