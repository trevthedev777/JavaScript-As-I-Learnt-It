# More About Functions

## Table of Contents

<hr>

1. [Introduction](#introduction)
2. [Recapping: What We Already Know](#recapping-what-we-already-know)

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

Since both concepts obviously are extremely close connected, we will often declare __"let's define which arguments a function receives"__, or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa)

🏠 [Back To Top](#more-about-functions)