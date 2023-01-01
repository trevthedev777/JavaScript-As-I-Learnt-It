const defaultResult = 0;
// Variable declared and initialized
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

// Functions
function addNumbers() {
    const enteredNumber = getUserInput();
    // here the currentResult will be 0
    const description = `${currentResult} + ${enteredNumber}`;
    // here the currentResult is the total of the above calculation
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, description);
    // console.log(currentResult)
}

// addEventListener() takes two params
// 1. The method to fire off the function
// 2. The name of the function to execute
// its important to keep in mind that the function you call here should not include the () or any arguments
addBtn.addEventListener('click', addNumbers);



