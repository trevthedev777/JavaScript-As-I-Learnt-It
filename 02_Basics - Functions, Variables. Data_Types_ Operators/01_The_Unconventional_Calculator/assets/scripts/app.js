const defaultResult = 0;
// Variable declared and initialized
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber) {
    const description = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
}

// Functions
function addNumbers() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

// addEventListener() takes two params
// 1. The method to fire off the function
// 2. The name of the function to execute
// its important to keep in mind that the function you call here should not include the () or any arguments
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



