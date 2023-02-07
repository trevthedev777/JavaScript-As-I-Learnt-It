const startGameBtn = document.getElementById('start-game-btn');

// Using a function as an expression
const start = function() {
    console.log('Game is starting....')
}

// function startGame() {
//     console.log('Game is starting....')
// }

// Event Listeners
startGameBtn.addEventListener('click', start);