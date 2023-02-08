const startGameBtn = document.getElementById('start-game-btn');

// * Global Constants 
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

// ! Using a function as an expression
// const start = function() {
//     console.log('Game is starting....')
// }

// ! Using a function declaration
// function startGame() {
//     console.log('Game is starting....')
// }

const getPlayerChoice = function() {

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

// Event Listeners
startGameBtn.addEventListener('click', function() {
    // Checks to see that you cant start a new game when a game is currently running
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});