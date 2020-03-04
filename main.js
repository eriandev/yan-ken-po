
const TITLE_TEXT = '¡Yan Ken Po!'
const CHOSE_ROCK = 0
const CHOSE_PAPER = 1
const CHOSE_SCISSORS = 2
const ANSWER_TABLE = [
        2, 0, 1,
        1, 2, 0,
        0, 1, 2
    ];
const MESSAGES = ['¡Ganaste!', '¡Perdiste!', '¡Empate!']
const IMAGES = [['images/piedra.png', 'Símbolo de piedra'], ['images/papel.png', 'Símbolo de papel'], ['images/tijera.png', 'Símbolo de tijera']]
let playerPoints = 0
let machinePoints = 0
let winner

const title = document.getElementById('title')
title.textContent = TITLE_TEXT

const playerScore = document.getElementById('player-score')
playerScore.textContent = playerPoints

const machineScore = document.getElementById('machine-score')
machineScore.textContent = machinePoints

const playerChoiceImg = document.getElementById('player-choice')
const machineChoiceImg = document.getElementById('machine-choice')
const gameResult = document.getElementById('game-result')
const matchScore = document.getElementById('match-score')

const rockSymbol = document.getElementById('rock-option')
rockSymbol.addEventListener( 'click', () => decideGame(CHOSE_ROCK) )

const paperSymbol = document.getElementById('paper-option')
paperSymbol.addEventListener( 'click', () => decideGame(CHOSE_PAPER) )

const scissorsSymbol = document.getElementById('scissors-option')
scissorsSymbol.addEventListener( 'click', () => decideGame(CHOSE_SCISSORS) )



function decideGame(playerChoice){
    let machineChoice = Math.round(Math.random() * 2)
    winner = ANSWER_TABLE[playerChoice + machineChoice * 3]
    let finalAnswer = [
        MESSAGES[winner], IMAGES[playerChoice][0], IMAGES[playerChoice][1], IMAGES[machineChoice][0], IMAGES[machineChoice][1]
    ];
    updateScore(finalAnswer)
}

function updateScore(finalAnswer){
    switch (winner) {
        case 0:
            playerPoints++
            playerScore.textContent = playerPoints
            break;
        case 1:
            machinePoints++
            machineScore.textContent = machinePoints
            break;
    }
    playerChoiceImg.src = finalAnswer[1]
    playerChoiceImg.alt = finalAnswer[2]
    machineChoiceImg.src = finalAnswer[3]
    machineChoiceImg.alt = finalAnswer[4]
    gameResult.textContent = finalAnswer[0]

    matchScore.classList.remove('hidden')
}
