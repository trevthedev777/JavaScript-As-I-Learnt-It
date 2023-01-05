# Working with Control Statements: (if statements, for loops and Error Handling)

## Table of Contents
<hr>

1. [Introduction](#introduction)
2. [Introduction to "if statements" and Boolean (Comparrison) operators](#working-with-control-statements-if-statements-for-loops-and-error-handling)
    - [Using Booleans in Conditions](#using-booleans-in-conditions)
    - [More on Text Comparisons](#more-on-text-comparisons)
3. [Using "if" statements](#using-if-statements)
    - [Working with "if", "else" and "else-if" Statements](#working-with-if-else-and-else-if-statements)
    - [Beware When Comparing Objects and Arrays](#beware-when-comparing-objects-and-arrays)


## Introduction
<hr>

In most web applications, we don't always wrote code that is perfect and that we write just what we need, most times

We are going to explore:
    - Conditional Statements: `if statements` & Expressions
    - `Boolean` Values & Operators
    - `Loops` in JavaScript
    - `Error Handling`

🏠 [Back To Top](#section-03-efficient-development-and-debugging)

## Introduction to "if statements" and Boolean (Comparrison) operators
<hr>

**Boolean Operators are important for Conditional Code Return `true` or `false`**

A list below:

Operator | Known As |Its functionality | Example 
---------|-------------------|---------|---------
`==` | Equal To | Check for value equality | ```a == b```  
`!=` | Not Equal To | Check for value inequality | ```a != b```
`===` and `!==` | Strictly Equal to and Not Strictly Equal To | the `===` checks for value and type equality | ```a === 'a'``` // false
`>` & `<` | Greater than & Less Than | compares two values | ```3 > 2```
`>=` & `<=` | Greater than or Equal to & Less Than or Equal to | compares two values | ```2 >=   2```
`!` | Not True | Check it **NOT** true | ```(if !loggedIn)```

### Using Booleans in Conditions 

Understanding the **"Condition"**

Always keep in mind that `condition` in
```
if (condition) {
    _perform this code_
}
```
simply has to be a `boolean value`

Often, you'll **generate** such a boolean value with the help of `===`, `>`, `<` etc. **All these operators yield boolean values** (without changing the variable/values you're using them on)

Since `if` only wants a boolean, you of course **don't have to use such an operator**. If you already got a variable that holds a boolean, you can use it without any extra operator.

Example:
```
const isLoggedIn = true;
if (isLoggedIn === true) {
    _perform this code_
}
```

That would be **redundant**. You'd generate another new boolean where you already have one.

You can use the `!` operator to negate ("invert") the value:

```
const isLoggedIn = true;
if (!isLoggedIn) {
    // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
    // This would execute because !isLoggedIn yields false => else block executes
}
```

Again, that would be similar to:

```
const isLoggedIn = true;
if (isLoggedIn !== true) {
    // This would NOT execute
} else {
    // This would execute because isLoggedIn is true and hence !== true yields false
}
```

But again, that would be redundant.

### More on Text Comparisons

Strings can also be compared with greater than `(>)` or lower/ smaller than `(<)` operators

JavaScript compares strings based on standard lexicographical ordering, using Unicode values.

That means that `b` is greater than `a` for example.

JavaScript always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters.

See these examples:
```
'ab' > 'aa' // true
'a' > 'B' // true
'a' > 'b' // false
```

🏠 [Back To Top](#section-03-efficient-development-and-debugging)

## Using "if" statements
<hr>

Using `if statements` can help perform specific code executions throughout our applications, Usually they care created within the scope of a function and as mentioned before can help us create `Boolean` values and depending on the outcome they can help us target the type of code to perform, have a look at our `Calculator Application` this is what we had before we started using an `if statement`

```
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
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
```

The code works and performs as expected but have a look at our `functions` the code is very repetitive and as developers we wish to show code efficiency and use the **D.R.Y** method when writing our code: **Don't Repeat Yourself**

Example found in the next section.

### Working with "if", "else" and "else-if" Statements

To finish off with the solution, we have created a **NEW** function and that helps us write all for of those functions but depending on the `calculation method` will execute only that function, not making sense? have a look at this solution:

We have updated a function that will perform this logic based on whatever is the `true` outcome:
```
function calculateResult(calculationType) {
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
```

Now, with this logic we can just simply call this into the `funcion` we need:

```
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
```

It's really that easy.

### Beware When Comparing Objects and Arrays

Just an important note while we are this far along that comparing two objects will almost always return a `false` value, they behave differently in JavaScript, we get more in depth with this as we progress but for now its good to keep that in mind with this example:

```
const hobbies = ['Sports', 'Cooking'];
const moreHobbies = ['Sports', 'Cooking'];

hobbies == moreHobbies // false
hobbies === moreHobbies // false
```



🏠 [Back To Top](#section-03-efficient-development-and-debugging)