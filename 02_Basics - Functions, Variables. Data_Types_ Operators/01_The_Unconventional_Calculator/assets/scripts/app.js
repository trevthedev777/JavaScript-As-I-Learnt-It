const defaultResult = 0;
// Variable declared and initialized
let currentResult = defaultResult;

// Functions
// the parameters are usually variables that are available in the function body
function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

// set currentResult to a new value
currentResult = addNumbers(5 , 5);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// this is "calling a function"
// remember the adding two numbers function example
// you are inputting two arguments, 
// one is to call the currentResult and then the text is to display the actual math
outputResult(currentResult, calculationDescription);
