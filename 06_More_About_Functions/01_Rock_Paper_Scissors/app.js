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
            return;
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

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {

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
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else  {
        winner = getWinner(computerChoice);
    }
    let message = `you picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore `;
    if (winner === DRAW) {
        message = message + 'the match ended in a draw';
    } else if (winner === PLAYER_WIN) {
        message = message + 'you win!';
    } else {
        message = 'Computer Wins'
    }
    alert(message);
    gameIsRunning = false;
});

// Not related to the game

const combine = (resultHandler, operation, ...numbers) => {

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};
// const combine = (numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };

// const subtractUp = function(resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum -= num;
//     } 
//     resultHandler(sum);
// };

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1 , 5, 10, -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1 , 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10 , 15, 20);