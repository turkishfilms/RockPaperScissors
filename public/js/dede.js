/**
 * TODONE: introducce game
 * TODONE:stats
 * TODO:ask for input
 * TODO:get computers answrr
 * 
 * TODO:compare
 * 
 * TODO:assign points
 * TODO:Check winner
 * TODO:if no abck to stats
 * TODO:if yes show winner, wait
 * TODO:
 * TODO:
 * TODO:
 * TODO:

 */

const introGame = () => alert('howdy')

const showGameStats = (scores) => alert(`current stats are${scores}`)

const getPlayerGesture = (gestures) => {
    const userGesture = alert(`pick dude`)
    if (gestures.findIndex(userGesture) == -1) return "dq"
    return userGesture
}

const getComputerGesture = (gestures) => { return gestures[Math.floor(Math.random(0, gestures.length))] }

const compareGestures = (playedGestures, gestrures) => {
    const p1 = playedGestures[0]
    if (gestures[1] == gestrures) console.log("yay")
}

//does two things :( also ""player"" eww
const increaseScore = winner => winner == 'player' ? playerScore++ : computerScore++

const checkGameWinner = (scores, maxScore) => {
    const playerScore = scores[0],
        computerScore = scores[1]
    if (playerScore == maxScore) return "player"
    if (computerScore == maxScore) return "computer"
    return 0
}

const displayWinner = winner => alert(`${winner} is winner, the other guy is trash`)

const rockPaperScissorsGame = (maxScore, []) => {
    const GESTURES = ['rock', 'paper', 'scissors']
    const MAXSCORE = 2

    let playerScore = 0
    let computerScore = 0
    let winnner

    while (checkGameWinner([playerScore, computerScore], MAXSCORE)) {
        showGameStats([playerScore, computerScore])
        const compG = getComputerGesture(GESTURES)
        const playerG = getPlayerGesture(GESTURES)
        const winner = compareGestures([playerG, compG])
        increaseScore(winner)
        winnner = checkGameWinner([playerScore, computerScore], MAXSCORE)
    }
    displayWinner(winnner)
    alert("play again")
}
