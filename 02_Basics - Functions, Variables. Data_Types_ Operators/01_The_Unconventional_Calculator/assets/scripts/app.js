const defaultResult = 0;
let currentResult = defaultResult;
let calcEntries = [];

// gets input from input field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber) {
    const description = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, description); // from vendor file
}

function addNumbers() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult += enteredNumber; // currentResult = currentResult + enteredNumber
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    calcEntries.push(logEntry);
    console.log(logEntry);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult -= enteredNumber; // currentResult = currentResult - enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber);
    calcEntries.push(enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult *= enteredNumber; // currentResult = currentResult * enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber);
    calcEntries.push(enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult /= enteredNumber; // currentResult = currentResult / enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber);
    calcEntries.push(enteredNumber);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



