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

function calculateResult(calculationType) {
    // only returns true if all conditions are met
    if (
    calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' && 
    calculationType !== 'MULTIPLY' &&   
    calculationType !== 'DIVIDE' ||
    !enteredNumber
    ) {
    return;
    }

    // returns true if at least one condition is met
    // if (
    // calculationType === 'ADD' || 
    // calculationType === 'SUBTRACT' || 
    // calculationType === 'MULTIPLY' ||   
    // calculationType === 'DIVIDE'
    // ) {
    const enteredNumber = getUserInput();
    const initialResult =  currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber; // currentResult = currentResult + enteredNumber
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType ,initialResult, enteredNumber, currentResult)
    }

    
// }

function addNumbers() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}



addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



