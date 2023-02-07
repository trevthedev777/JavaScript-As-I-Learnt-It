# More About Functions

## Table of Contents

<hr>

1. [Introduction](#introduction)
2. [Recapping: What We Already Know](#recapping-what-we-already-know)
3. [Functions vs Methods](#functions-vs-methods)
4. [Functions are Objects](#functions-are-objects)
5. [Function Expressions: Storing Functions in Variables](#function-expressions-storing-functions-in-variables)
6. [Function Declarations vs Function Expressions](#function-declarations-vs-function-expressions)
7. [Anonymous Functions](#anonymous-functions)

## Introduction

<hr>

We have been using functions in all our mini projects up until now but there are many more things that functions can do in `JavaScript`. In this section we are going to have a look at:

-   Different Ways of Creating Functions
-   Anonymous Functions
-   Callback Functions & Functions in Functions
-   Default Arguments & Rest Operator
-   bind() & More

🏠 [Back To Top](#more-about-functions)

## Recapping: What We Already Know

<hr>

Functions are constructs which allow us to create "Code on Demand", when JavaScript reads our script, it loads all our function declarations, registers them and then it executes the script

If you can recall when we learned about `Block Scope Variables`, that, Variables and Constants that are created in functions **belong** to that function

Functions **CAN** take parameters/arguments and **CAN** return a value, you can write functions that don't need these but some functions work better with these specific requirements.

Functions can be called multiple times with different arguments, it's dynamic which means that you can call your function, add a different argument and that function will still work. So the same function

Functions can be called "directly" or "indirectly"

🏠 [Back To Top](#more-about-functions)

## Parameters vs Arguments

<hr>

Throughout this course, we will use the terms **"parameters"** and **"arguments"**, interchangeably.

**Technically, there is a difference though:**

**Parameters** are these variables which you **specify between parentheses** when defining a function.

```
function sayHi(name) {
    ...
}
```

In this example `name` is a parameter.

**Arguments** then are the **concrete values** you pass to a function when calling that function:

```
sayHi('Trevor');
```

`'Trevor'` is an **argument** of the function therefore - for the `name` parameter to be precise.

Since both concepts obviously are extremely close connected, we will often declare **"let's define which arguments a function receives"**, or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa)

🏠 [Back To Top](#more-about-functions)

## Functions vs Methods

<hr>

In short, a written `function` is a function, and a `method` is also a function but is supplied by the browser engine, these are usually called using `dot notation`

Example of a function:

```
function startGame() {
    ....
}
```

Example of a method:

```
starGameBtn.addEventListener('click', startGame);
```

`Objects` , can have properties that we can call, also by using `dot notation`

Example of Object and Properties:

```
const person = {name: 'Trevor'};

console.log(person.name) // 'Trevor'
```

Now, the difference is that with methods, we use and execute them as a function, these are built in functions that JavaScript provides to us

You can have functions in objects and then call them like a regular method:

Example of a function in a object:

```
const person = {
    name: 'Trevor',
    greet: function greet() {
        console.log('Hello There');
    }
};

<!-- Now you can call it like a method as you have declared it in an object -->
person.greet()
```

🏠 [Back To Top](#more-about-functions)

## Functions are Objects

<hr>

Functions themselves are **also objects**, we can explore this quite easily:

```
console.dir(startGame);
```

Now, what this does is when you access the console using your developer tools, you get to see the breakdown of this:

![Function as an Object in the console](https://github.com/trevthedev777/JavaScript-As-I-Learnt-It/blob/main/Readme_imgs/Section_6_consoledir.jpg?raw=true)

🏠 [Back To Top](#more-about-functions)

## Function Expressions: Storing Functions in Variables

<hr>

Expressions are something that can yield you values, so it is possible to create a function as an expression

Example of declaring an anonymous function as an expression

```
const start = function() {
    console.log('Game is loading...')
}

startBtn.addEventListener('click', start);
```

🏠 [Back To Top](#more-about-functions)

## Function Declarations vs Function Expressions

<hr>

Just to reiterate the difference, see the below examples:

Example of a function declaration / function statement:

```
function multiply(a, b) {
    return a * b;
}
```

Example of a function expression:

```
const multiply = function(a, b) {
    return a * b;
}
```

So there is a slight difference between writing them these different ways and that is:

-   With a `function declaration`, it gets goisted to the top and it can ve declared anywhere in the file, and is can also be reused throughout the script (i.e also after its used)

-   With `function expressions`, it also gets hoisted but it does not get initialized/defined, it **can't** be declared anywhere in the script (i.e it can be used over and over)

So you have to keep in mind that you have to initialize your functions on load if you want to call them.

Keep in mind that if you are going to use the `function expression` approach, that you can't call your function before it's been declared

Example:

```
start();

const start = function() {
    console.log('Game is starting....')
}

```

You will receive an error in the console stating that you can't initialize the function before its declaration

🏠 [Back To Top](#more-about-functions)

## Anonymous Functions

<hr>

Anonymous functions are bets used (if you are going to use them) in once-off occasions, let's revert back to the current rock, paper, scissors game we are going to build, the bets place to practice this would be to, remove the function expression, and create this anonymous function in your eventListener

Example of Anonymous Function in the eventListener:
```
startGameBtn.addEventListener('click', function() {
    console.log('Game is starting....');
})
```

If you run into an error and you check your console, usually you will find in the error, the line number of where the error is showing, which of course is really useful when we are debugging our code. Keep in mind that when we have a large script, we will be okay y checking the line number but if you create the function with a name, it will also tell you in your console in which function the problem is happening.

🏠 [Back To Top](#more-about-functions)
