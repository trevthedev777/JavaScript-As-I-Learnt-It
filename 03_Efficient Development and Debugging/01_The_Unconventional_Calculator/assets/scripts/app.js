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

function writeToLog(operator, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    calcEntries.push(logEntry);
    console.log(logEntry);
}

function addNumbers() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult += enteredNumber; // currentResult = currentResult + enteredNumber
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD',initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult -= enteredNumber; // currentResult = currentResult - enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT',initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult *= enteredNumber; // currentResult = currentResult * enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY',initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    currentResult /= enteredNumber; // currentResult = currentResult / enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE',initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



