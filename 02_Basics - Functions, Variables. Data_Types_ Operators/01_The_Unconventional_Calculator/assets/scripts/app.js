const defaultResult = 0;
// Variable declared and initialized
let currentResult = defaultResult;

// Functions
function addNumbers() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
    // console.log(currentResult)
}

// addEventListener() takes two params
// 1. The method to fire off the function
// 2. The name of the function to execute
// its important to keep in mind that the function you call here should not include the () or any arguments
addBtn.addEventListener('click', addNumbers);



