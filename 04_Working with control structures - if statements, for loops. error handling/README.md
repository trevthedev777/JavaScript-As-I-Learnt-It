# Working with Control Statements: (if statements, for loops and Error Handling)

## Table of Contents

<hr>

1. [Introduction](#introduction)
2. [Introduction to "if statements" and Boolean (Comparison) operators](#working-with-control-statements-if-statements-for-loops-and-error-handling)
    - [Using Booleans in Conditions](#using-booleans-in-conditions)
    - [More on Text Comparisons](#more-on-text-comparisons)
3. [Using "if" statements](#using-if-statements)
    - [Working with "if", "else" and "else-if" Statements](#working-with-if-else-and-else-if-statements)
    - [Beware When Comparing Objects and Arrays](#beware-when-comparing-objects-and-arrays)
    - [The Logical "and"/"or" Operators](#the-logical-andor-operators)
    - [Truthy and Falsy Values](#truthy-and-falsy-values)
    - [JavaScript Ternary Operators](#javascript-ternary-operators)
    - [Logical Operator "Tricks" & Shorthand](#logical-operator-tricks--shorthand)
    - [Logical Operators - A Quick Summary](#logical-operators---a-quick-summary)
    - [Switch-case statements](#switch-case-statement)
4. [Loops](#loops)
    - [Introduction to Loops](#introduction-1)
    - [For Loops](#for-loops)
    - [For of Loops](#for-of-loops)
    - [For in Loops](#for-in-loops)

## Introduction

<hr>

In most web applications, we don't always wrote code that is perfect and that we write just what we need, most times

We are going to explore: - Conditional Statements: `if statements` & Expressions - `Boolean` Values & Operators - `Loops` in JavaScript - `Error Handling`

🏠 [Back To Top](#section-03-efficient-development-and-debugging)

## Introduction to "if statements" and Boolean (Comparison) operators

<hr>

**Boolean Operators are important for Conditional Code Return `true` or `false`**

A list below:

| Operator        | Known As                                         | Its functionality                            | Example              |
| --------------- | ------------------------------------------------ | -------------------------------------------- | -------------------- |
| `==`            | Equal To                                         | Check for value equality                     | `a == b`             |
| `!=`            | Not Equal To                                     | Check for value inequality                   | `a != b`             |
| `===` and `!==` | Strictly Equal to and Not Strictly Equal To      | the `===` checks for value and type equality | `a === 'a'` // false |
| `>` & `<`       | Greater than & Less Than                         | compares two values                          | `3 > 2`              |
| `>=` & `<=`     | Greater than or Equal to & Less Than or Equal to | compares two values                          | `2 >=   2`           |
| `!`             | Not True                                         | Check it **NOT** true                        | `(if !loggedIn)`     |

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

Now, with this logic we can just simply call this into the `function` we need:

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

### The Logical 'and'/'or' Operators

These are used to combine conditions and the operators are usually easy to remember:

-   `&&` : and
-   `||` : or

Here's an example, imagine it like this:

`Condition A AND Condition B OR Condition C`

Now, in code it would look like this:

```
if (name==='Trevor' && age === 30 || isAdmin) {
    <perform_this_code>
}
```

Essentially, **Part 1: Evaluated together (yields true if each condition yields true)** then **Part 2: Evaluated as an alternative**

So, it yields `true` if Part1 OR Part 2 yields true

### Truthy and Falsy Values

JavaScript Conditions work with Booleans (true/false) OR with `"truthy"` / `"falsy"` values

Look at these two examples and notice that they both are correct codes and **BOTH EXECUTES**

```
const nameInput = 'name';
if (nameInput === 'name') {...} // Works!
```

and now:

```
const nameInput = 'name';
if (nameInput) {...} // Also Works!
```

JavaScript doesn't check if `nameInput` is equal to 'name'. `if (nameInput)` yields true is `nameInput` is a **non-empty string**

This is because JavaScript tries to coerce values to a `Boolean` value if a `Boolean` is required!

Important rules:

-   `0` is treated as `false`
-   ANY other number including negative numbers are treated as `true`
-   `'' (empty strings)` are treated as `false`
-   ANY other non-empty string including `false` is treated as `true`
-   ALL objects and arrays, even empty ones are treated as `true`
-   `null`, `undefined` and `NaN` are all treated as `false`

### Coercion vs Conversion

It's important to understand that JavaScript is able to use variables in conditions - even without comparison operators.

This is kind of obvious, if we consider a boolean variable, for example:

```
let isLoggedIn = true;
if (isLoggedIn) {
    ...
}
```

Since if just wants a condition that returns true or false, it makes sense that you can just provide a boolean variable or value and it works - without the extra comparison `(if (isLoggedIn === true)` - that would also work but is redundant).

Whilst the above example makes sense, it can be confusing when you encounter code like this for the first time:

```
let userInput = 'Max';
if (userInput) {
    ... // this code here will execute because 'Max' is "truthy" (all strings but empty strings are)
}
```

JavaScript tries to coerce ("convert without really converting") the values you pass to if (or other places where conditions are required) to boolean values. That means that it tries to interpret `'Max'` as a boolean - and there it follows the rules outlined in the previous lecture (e.g. `0` is treated as `false`, all other numbers are treated as `true` etc.)

It's important to understand that JavaScript doesn't really convert the value though.

userInput still holds 'Max' after being used in a condition like shown above - it's not converted to a boolean. That would be horrible because you'd invisibly lose the values stored in your variables.

Instead,

```
if (userInput) { ... }
```

is basically transformed (behind the scenes) to

```
if (userInput === true) {

```

And here, the `===` operator generates and returns a boolean. It also doesn't touch the variable you're comparing - userInput stays a string. But it generates a new boolean which is temporarily used in the comparison.

And that's exactly what JavaScript automatically does when it finds something like this:

```
if (userInput) { ... }
```

### JavaScript Ternary Operators

`if statements` themselves return **NO** values, you just use them to execute code conditionally

This does not work:

```
const userName = if (isLogin) {
    return 'Trevor;
} else {
    return null;
}
```

These are where we will start to use the `ternary operator`

Example:

```
const userName = isLogin ? 'Trevor' : null
```

Lets break it down:

Its an inline `if statement`, like a `shorthand`, in our example, the `condition` is `isLogin` then the `?` just means `if true` then returns 'Trevor' and the `:` means `else` and will return `null`

### Logical Operator "Tricks" & Shorthand

Its possible to convert a "truth / falsy" value to a real `Boolean`, you do this with the `Dohle Bang Operator` `!!`, which is simply two exclamations

have a look at this Table:

| Operator | Definition                                        | Example                              | Returns                                                |
| -------- | ------------------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `!!`     | Boolean Coercion via **DOUBLE BANG** operator     | !!"" , !!1                           | `false`, `true`                                        |
| `OR`     | Default value assignment via **OR** operator      | const name = someInput `OR` 'Trevor' | someInput if not falsy, 'Trevor' otherwise             |
| `&&`     | Use value if condition is true via "AND" operator | const name = isLoggedIn && 'Trevor'  | 'Trevor' is set if isLoggedIn is true, false otherwise |

Now lets practice some examples:

```
const userInput = ''; // undefined

if (userInput) {...} // will return false because its an empty string
```

Best practice with Double Bang:

```
const userInput = '';

const isValidInput = !!userInput;

console.log(isValidInput); // false
```

remember with the `double bang operator`: when its truthy its turned to false and when its falsy its turned to true

### Logical Operators - A Quick Summary

As a reference which you can come back to (or print out), here's a quick summary of how logical operators and comparison operators behave in JavaScript:

```
const userName = 'Trevor';
const altName = '';

console.log(userName === 'Trevor'); // generates and prints boolean true
console.log(userName); // wasn't touched, still a string 'Trevor'

console.log(userName || null); // username is truthy and therefor returned by || => 'Trevor'

console.log(altName ||  'Trevor'); // altName is Falsy (empty string), hence 'Trevor' is returned => 'Trevor'

console.log(altName || ''); // both altName and '' are falsy, but if the first operand is falsy, the second one is always returned => ''

console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && 'Anna'); // userName is Truthy, hence the second value is returned

console.log(altName && 'Anna'); // altName is Falsy, hence first value is returned => ''

console.log(userName && ''); // userName is truthy, hence second value is returned
```

Always keep in mind: **NO** operator (neither `===`, `>` etc. nor `&&` or `||`) changes the variable you might be using in comparison. In the above examples, the values stored in `userName` and `altName` are **NEVER** changed.

`===`, `>` etc. just **generate new boolean values** which are used in the comparison. `||` and `&&` generate **NO** booleans, they just treat the **values before and after them as conditions** (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use || in JavaScript to assign default/ fallback values to variables/ constants:

```
const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string

const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string
```

### Switch-Case Statement

These are great for when we have multiple equality checks, you can use them for replacements for `if-else statements`

The `switch` keyword **MAY or MAY NOTs** take a condition but takes a single value

So to be precise: switch takes an expression that yields a value!

Lets break it down:

```
switch (true) {
    case (age < 13):
        alert("You must be 13 or older to play");
        break;
    case (age >= 13):
        alert("You are old enough to play");
        break;
}
```

Here switch will always try to find true value. the case which will return first true it'll switch to that.

Suppose if age is less then 13 that's means that case will have true then it'll switch to that case.

A further breakdown can be found on [Stack Overflow](https://stackoverflow.com/questions/32576618/switch-statement-to-compare-values-greater-or-less-than-a-number/32576647)

🏠 [Back To Top](#section-03-efficient-development-and-debugging)

## Loops

<hr>

### Introduction

In JavaScript we have **FOUR** different types of Loops:

| Loop Type   | Description                                                     | Example                                                                  |
| ----------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| for loop    | Executes code a certain amount of times (with counter variable) | `for (let i = 0; i < 3: i++) { console.log(i); }`                        |
| for of loop | Execute for every element in an array                           | `for (const el of array) { console.log(el); }`                           |
| for in loop | Execute for every key in an object                              | `for (const key of object) { console.log(key); console.log(obj[key]); }` |
| while loop  | Execute as long as a condition is `true`                        | `while (isLoggedIn) { console.log(key); console.log(obj[key]); }`        |

### For Loops

For loops are the most common type of loops in the JavaScript programming language, here is an example and a brief overview

```
for (let i = 0; i < 3; i++) {
    console.log('Print this 3 times');
}
```

the output will be:

```
Print this 3 times
Print this 3 times
Print this 3 times
```

the first declaration is the initializer and then the second part is the length of the array or object to iterate through and the third is the amount of times it should increment as much as you set in the second segment, so you can also set it like this

```
for (let i = 0; i < = arr.length; i++) {
    console.log('Will repeat however long this array's length is');
}
```

### For of Loops

`for of loops` are only usable on arrays and there is **no index** that is provided, although the syntax is much shorter its still better to use the `for loop` as you have access to the `index` with a `for of loop` in the parenthesis you use them by declaring `const`

```
for (const logEntry of battleLog) {
    console.log(logEntry)
}
```

the last iterations value always survives   

### For in Loop

These loops are helpful to really display your dynamic data:

How to access the keys:

```
// ! For Of Loop
for (cost of battleLog) {
    console.log(`#${i}`);
    <!-- for in loop -->
    for (const key in logEntry) {
        console.log(key);
        console.log(logEntry['name_of_key_in_strings']);
    }
}
```

The name inside of `[]` **has to be a string or key (from your object)** (or a variable that holds the property name you want to access)!

### While and Do While Loops

While loops are very useful, they run a certain code while a certain condition is true and ends when its false, have a look at the example

```
let randomNumbers = [];

let finished = false;

while (!finished) {
    const rndNumber = Math.random();
    randomNumbers.push(rndNumber);
    if(rndNumber > 0.5) {
        finished = true;
        console.log(randomNumbers)
    }
}

// [0.6103392405370138]
```

as the condition was achieved in the first iteration the code ran and was ended on the first try

a `Do While Loop` executes the body of the loop first and then the condition afterwards

```
let j = 0;
do {
    _execute_this_code_;
    j++;
} while (this condition);
```
