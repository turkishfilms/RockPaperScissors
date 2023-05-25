
const introGame = () => alert(`"Welcome to Salem's game of Rock, Paper, Scissors\nWin 2 out of the 3 rounds to be declared a winner"'`)




const rockPaperScissorsGame = (maxScore, gs) => {


    const showGameStats = (scores) => alert("Score:  " + scores.playerScore + " | " + scores.computerScore + "\n");

    const getPlayerGesture = (gestures, round) => {
        const userGesture = prompt("Round " + round + "\nRock, paper, or scissors? ").toLowerCase()
        if (gestures.findIndex((gs) => gs == userGesture) == -1) return "dq"
        return userGesture
    }

    const getComputerGesture = (gestures) => { return gestures[Math.floor(Math.random() * gestures.length)] }


    const getComputerGesture2 = () => "scissors"

    const compareGestures = (playedGestures, gestures) => { //returns 0 0.5 1
        const p1 = playedGestures[0],
            p2 = playedGestures[1]
        alert("You chose " + p1 + "\nComputer chose " + p2);

        if (p1 == 'dq') {
            alert("Disqualified!")
            return 0
        }
        const beatsP1 = (gestures.findIndex((gs) => gs == p1) + 1)
        console.log("bp1", beatsP1, "p2", p2)
        const t = (p2 == gestures[(beatsP1 % 3)] ? 0 : 1)
        console.log(t)
        if (p2 == p1) return 0.5
        else return t
    }

    const increaseScore = (playerWon, scores) => {
        if (playerWon == 0.5) return
        playerWon ? scores.playerScore++ : scores.computerScore++
    }

    const displayGameWinner = playerWon => {
        if (playerWon == "player") alert("Congrats, you won!!!");
        else alert("Ruh roh, you lost...")
    }

    const displayHandWinner = playerWon => {
        if (playerWon == 0.5) alert("It's a draw!")
        else alert(`Round ${playerWon ? "Won" : "Lost"}!`)
    }

    const checkGameWinner = (score, maxScore) => {
        if (score.playerScore == maxScore) return "player"
        if (score.computerScore == maxScore) return "not player"
        return 0
    }

    //game code
    const GESTURES = gs || ['rock', 'paper', 'scissors']
    const MAXSCORE = maxScore || 2

    let round = 0
    const scores = {
        playerScore: 0,
        computerScore: 0
    }

    while (!checkGameWinner(scores, MAXSCORE)) {
        showGameStats(scores, round)
        const compG = getComputerGesture(GESTURES)
        const playerG = getPlayerGesture(GESTURES)
        const winner = compareGestures([playerG, compG], GESTURES)
        increaseScore(winner, scores)
        displayHandWinner(winner)
        round++
    }
    displayGameWinner(checkGameWinner(scores, MAXSCORE))
    if (prompt("play again?") == "yes") rockPaperScissorsGame()
    else alert("fine i didnt like you anyway")

}

rockPaperScissorsGame()