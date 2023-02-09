const startGameBtn = document.getElementById('start-game-btn');

// * Global Constants 
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WINS ';
const AI_WIN = 'AI_WINS'

let gameIsRunning = false;

// ! Using a function as an expression
// const start = function() {
//     console.log('Game is starting....')
// }

// ! Using a function declaration
// function startGame() {
//     console.log('Game is starting....')
// }

const getPlayerChoice = () => {

    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS 
        ) {
            alert(`Invalid Selection! ${ROCK} chosen as default`);
            return DEFAULT_USER_CHOICE;
        }
    return selection;
}

const getComputerChoice = () => {
    // The AI will return a numerical value that will equal the output
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (computerChoice, playerChoice) => {

    // * Core Game Logic
    if (computerChoice === playerChoice) {
        return DRAW;
    } else if (
        computerChoice === ROCK && playerChoice === PAPER ||
        computerChoice === PAPER && playerChoice === SCISSORS ||
        computerChoice === SCISSORS && playerChoice === ROCK
        ) {
        return PLAYER_WIN;
    } else if (
        computerChoice === ROCK && playerChoice === SCISSORS ||
        computerChoice === PAPER && playerChoice === ROCK ||
        computerChoice === SCISSORS && playerChoice === PAPER
        ) {
        return AI_WIN;
    } 
}

// Event Listeners
startGameBtn.addEventListener('click', () => {
    // Checks to see that you cant start a new game when a game is currently running
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
});