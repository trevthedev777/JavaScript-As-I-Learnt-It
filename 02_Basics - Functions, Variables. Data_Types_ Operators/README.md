# The Unconventional Calculator

## Table of Contents

1. [Introduction](#introduction)
    - [The let Keyword](#the-let-keyword)
    - [The const Keyword](#the-const-keyword)
2. [Declaring and Naming Variables](#declaring-and-naming-variables)
    - [Good and Bad Practices](#alloweddisallowed-best-and-worst-practices-in-javascript)
    - [Working with Variables and Basic Operators](#working-with-variables-and-basic-operators)
        - [What are Operators?](#what-are-operators)
3. [Data Types in JavaScript](#data-types-in-javascript)
    - [Numbers and Strings](#numbers--strings)
4. [Functions in JavaScript](#functions-in-javascript)
    - [Returning values in a function](#returning-values-in-a-function)
    - [The (Un)importance of Code Order](#the-unimportance-of-code-order)
    - [An Introduction to Global and Local Scopes](#an-introduction-to-global-and-local-scopes)
        - [Global Scope](#global-scope)
        - [Local/Block Scope](#localblock-scope)
        - [Shadowed Variables](#shadowed-variables)
        - [More about the return Statement](#more-about-the-return-statement)

## Introduction
<hr>

In this application, we demonstrate the use of the `let` and `const` and how and when to use them

### The let Keyword
<hr>

The `let` keyword is used to declare data stored into a variable that is able to update its originally declared value throughout the project

Example:
```
let userName = 'Trevor';
console.log(userName); // 'Trevor'

userName = 'Trevor Lehmann';
console.log(userName); // 'Trevor Lehmann' 
```

### The const Keyword
<hr>

The `const` keyword is a variable/data-container that can not be changed in the project, the original value of the variable will remain the same through out

Example:
```
let totalUsers = 15;
console.log(totalUsers); // 15

totalUsers = 20;
console.log(totalUsers); // Uncaught TypeError: Assignment to constant variable.
```

_use `constants as often as possible` (i.e whenever you actually have data that never changes) to be clear about your intentions (in your code)_

🏠 [Back To Top](#the-unconventional-calculator)

## Declaring and Naming Variables
<hr>

Before we begin, it is important to know that `JavaScript` is a case-sensitive programming language and that you should keep that in mind when re-using your variables throughout your application

### **Allowed/Disallowed, Best and Worst Practices in `JavaScript`**

Allowed | Best Practices | Disallowed | Bad Practices
--------|----------------|------------|--------------
`let` userName | **camelCase** | `let` user_name | Allowed but bad practice
`let` ageGroup5 | Only letters and numbers | `let` 21Players | Starting digits **NOT** allowed
`let` $kindOfSpecial | Starting with $ is allowed | `let` user-b | No special characters (i.e - and whitespace)
`let` _internalValue | Starting with `_` is allowed | `let` let | Keywords **NOT** allowed

## Working with variables and Basic Operators
<hr>

### What are Operators?

It is a syntax feature in `JavaScript` that allows us to manipulate values

Operators | Name of Operator | Function | Example  
----------|------------------|----------|--------
`+` | Addition Operator | Adds Two Numbers | 2 + 2 = 4
`-` | Subtraction Operator |Subtracts Two Numbers | 4 - 2 = 2
`*` | Multiplication Operator |Multiplies Two Numbers | 4 * 4 = 16
`/` | Division Operator | Divides Two Numbers | 4 / 4 = 1 
`%` | Modulus Operator |Divides Two Numbers, returns remainder | 4 % 3 = 1
`**`| Exponentiation Operator | Multiplies itself to itself a number of given times | 2 ** 3 = 8

🏠 [Back To Top](#the-unconventional-calculator)

## Data Types in JavaScript
<hr>

### Numbers & Strings

#### Numbers

Numbers are important for calculations and with code where you need to _"work with a number"_.

In JavaScript you get different types of numbers to work with:

Integers | Floats
---------|--------
2 or -3  | 22.265 

#### Strings (Text)

Strings are important for outputting results, gathering input

You can generate `Strings` using either:

- '' (Single Quotes)
- "" (Double Quotes) 
- `` (Back Ticks - _usually used with template literals_)

You can use whichever you want, just always be consistent

Another rule with `JavaScript` syntax is that you can not open a `String` with one type of quote and close it as another

#### String Template Literal

`JavaScript` has a special operation that it can perform with the `backtick`, this is used to create a `Template Literal` and this is where you can create `Strings` and accessing `variables output` into your output text, you can also write `multi-line strings` using the template literal method

Example:
```
const defaultResult = 0;
let currentResult = defaultResult; // 0

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
console.log(calculationDescription) // (0 + 10) * 3 / 2 - 1
```

🏠 [Back To Top](#the-unconventional-calculator)

## Functions in JavaScript
<hr>

A `function` is a language construct which is used in programming languages which allows you to:

1. Define a function
```
function greetUser(name) {  
    alert('Hi ' + name);
};
```
_you can (but don't have to) use **parameters** (eg. name) and you can (but don't have to) return values (via **return**)_

The code does not run by itself, usually the code is loaded and "stored in memory" you will need to:

2. Call Function
```
greetUser('Trevor'); // Hi Trevor
```

You can call the function back as often as you want throughout your code with different parameters (if it takes parameters)

Every function execution then runs independent from other (possible) executions.

Always try to give your function a name that describes its use.

### Returning values in a function

This is the basic syntax of a basic addition function in JavaScript:

```
function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}
```

This function contains two `parameters`, these are variables that are accessible only inside the function, the output of this function is to `return` the value of `num1 + num2`.

In order to get a result you need to `call` that function like this:

```
addNumbers(num1, num2); // NaN
```

For this example, you will not get a result if you pass just `num1` and `num2`, but you need to input two `numerical` values to add

```
addNumbers(5, 8); // 13
```

You can also update `values` and declare `variables` with your `function callbacks` as per this example:

```
const defaultResult = 0;

let currentResult = defaultResult;

function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = addNumbers(5 , 5);
console.log(currentResult); // 10
```
🏠 [Back To Top](#the-unconventional-calculator)

### The (Un)importance of Code order

When writing `JS` code, you need to keep the following in mind:

- you need to place your `const` and `let` variables above when you are referring to them in the script
- you can declare your functions anywhere in the Script and call them anywhere, this is a special feature that is used in JavaScript

### An Introduction to Global and Local Scopes

To understand `scopes` it's best to understand the terminology of `Global Scope` and `Local/Block Scope`

Here is a brief explanation on both:

#### Global Scope

A `Global Scope` is any data that is declared in the "root" of the script, meaning it is not created inside of a `function` for example:

```
let globalVariable = 'This is a Global Variable outside of the function'

function localScope() {
    let/const .... ;
}
```

#### Local/Block Scope

The `Local` or also known as `Block` level scope is usually accessed inside of the function and can only be used within the function

```
function localScope() {
    let localScopeVariable = "I'm inside the block scope";
}
```

If you try to access a block scope variable outside of the function in which its declared, you **will** receive an error telling you that the variable has not been defined.

But it is possible to use a global variable inside the function, it's very important to understand this concept.

#### Shadow Variables

What happens if you have this code?

```
let userName = 'Trevor';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Trev';
greetUser('Trevor');
```

This will display an alert that says `'Trevor'` (**NOT** 'Trev')

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is **not allowed on the same level/ in the same scope**

This, however, would fail:

```
let userName = 'Trevor';
let userName = 'Trev';
```

Why does this happen? why is the first code snippet working then?

Because we first create a global variable `userName` via

```
let userName = 'Trevor';
```

But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their **own scope**, JavaScript does something which is called **"shadowing"**.

It **creates a new variable on a different scope** - this variables does not overwrite or remove the global variable by the way - **both co-exist**.

When referring to `userName` inside of the `greetUser` function we now **always refer to the local, shadowed variable**. Only if no such local variable existed, JavaScript would **fall back to the global variable**.

#### More about the `return` Statement

Some important things to know about the `return` statement

1. Any code after the declared `return` statement won't be executed
```
function thisFunction(text, text) {
    const result = string1 + string2;
    return result;
    ==============
    const variable = 'this doesn't work'
}
```

2. You can also return nothing:
```
function thisFunction() {
    return;
}
```

3. You can only have **ONE** return statement in a function

#### Executing Functions "Indirectly"

It can be confusing to see that there seem to be two ways of executing a function: 

```
function add() {
  something = someNum + someOtherNum;
}
```

`add()` vs `add`, It's important to understand why we have these "two ways"!

**In general**, you call a function that you defined by **using it's name** (e.g. `add`) and `adding parentheses` (with any parameters the function might need - or empty parenthesis if no parameters aree required like the above example)

Calling a function:

=> `add()`

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. 

**Sometimes however**, you **don't want to execute the function immediately**. You rather want to "tell JavaScript" that it should execute a certain function **at some point in the future** (e.g. when some event occurs(e.g. `.addEventListener()`)).

That's when you don't directly call the function but when you instead provide JavaScript with the name of the function.

This is how you call a function with an event:

=> `someButton.addEventListener('click', add)`

This snippet tells JavaScript: "When I click this button, execute my add function"

`someButton.addEventListener('click', add())` Is the wrong syntax

This is because JavaScript would encoubter that line when it parses/executes your script and register that event listener **AND IMMEDIATELY EXECUTE ADD**

Also calling your function elsewhere in your code without the parenthesis would not execute the function

🏠 [Back To Top](#the-unconventional-calculator)

## Converting Data Types
<hr>

It is important to try and remember that all `inputs` will register your code as `strings`, even if your input type is = `number`

In our project folder `The Unconventional Calculator`, when are trying to display the output of the value the user types in the input field, JavaScript is automatically converting it to a string to be "safe"

In our workspace at this time we had the following, the right code, but not exactly the right output, we wanted the `result` displayed on screen to display the total number of our calculation so as it stands the code reads:

```
function addNumbers() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
    // console.log(currentResult)
}
```

This however is incorrect as in our function, we are trying to add a number with a string:

`currenResult = number` and `userInput.valuue = string`

```
currentResult = currentResult + userInput.value;
```

so the output of our UI is as follows, because JavaScript has automatically converted our numbers to strings as a default:

![Calculator String Output](https://github.com/trevthedev777/JavaScript-As-I-Learnt-It/blob/main/Readme_imgs/converting%20strings%20to%20numbers%20with%20parseInt().jpg?raw=true)


Thankfully there is a way to work around this by using the `parseInt()` method, here is a brief overview of the actions these methods perform:

- `parseInt()`, converts strings to numbers as whole numbers (e.g. 10), also known as `Integers`
- `parseFloat()`, converts strings to numbers as decimal point numbers (e.g. 10.00) known as `Floats`
