var playerScore = 0;
var compScore = 0;

alert("Welcome to Salem's game of Rock, Paper, Scissors\nWin 2 out of the 3 rounds to be declared a winner")

//multiple rounds
for (let round = 1; round < 500; round++) {

    //players decision and round count
    var playerChoice = prompt("Round " + round + "\nRock, paper, or scissors? ").toLowerCase();

    //computer generates decision
    var gestureArray = ["rock", "paper", "scissors"];
    var randomize = Math.floor(Math.random() * gestureArray.length);
    var compChoice = gestureArray[randomize];

    alert("You chose " + playerChoice + "\nComputer chose " + compChoice);

    //decide round winner
    if (playerChoice == compChoice) {
        alert("It's a draw!");
    }
    else if (playerChoice == "rock" && compChoice == "paper") {
        alert("Round lost!");
        compScore += 1;
    }
    else if (playerChoice == "rock" && compChoice == "scissors") {
        alert("Round won!");
        playerScore += 1;
    }
    else if (playerChoice == "paper" && compChoice == "scissors") {
        alert("Round lost!");
        compScore += 1;
    }
    else if (playerChoice == "paper" && compChoice == "rock") {
        alert("Round won!");
        playerScore += 1;
    }
    else if (playerChoice == "scissors" && compChoice == "rock") {
        alert("Round lost!");
        compScore += 1;
    }
    else if (playerChoice == "scissors" && compChoice == "paper") {
        alert("Round won!");
        playerScore += 1;
    }

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        alert("Disqualified!")
        compScore += 1;
    }

    //print score
    alert("Score:  " + playerScore + " | " + compScore + "\n");

    //decide overall winner
    if (playerScore >= 2) {
        alert("Congrats, you won!!!");
        break;
    }
    if (compScore >= 2) {
        alert("Ruh roh, you lost...");
        break;
    }

}