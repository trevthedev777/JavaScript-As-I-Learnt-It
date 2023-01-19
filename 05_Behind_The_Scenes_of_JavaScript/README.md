# Behind the Scenes of JavaScript

## Table of Contents

1. [Introduction](#introduction)
2. [ES5 vs ES6](#es5-vs-es6)
3. [var vs let vs const](#var-vs-let-vs-const)
4. [Understanding "hoisting"](#understanding-hoisting)

## Introduction

This section is theory based where we will look at the evolution of JavaScript of the years, here are the core-topis of our section

1. ES5 vs ES6+ Syntax
2. How JavaScript Works
3. The Weird Parts of JavaScript

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## ES5 vs ES6

<hr>

What is this? ES = `ECMAScript`, which the language specification, it is the language behind JavaScript the official documentation can be found here [ECMAScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

Although is not pivotal to know this, it could be helpful to read through it one day when you have time, this is more aimed at browser vendors

It is always under active development.

ECMAScript dates back to the 90s, the first popular version was `ECMAScript 5`

Things evolved and in around 2015 `ECMAScript 6` was released and we can safely classify that as `Modern JavaScript`, features are always getting added to browsers incrementally

Older browsers are being phased out and we can see a modernization and standard of it all. This course features on `ES6`.

**Interesting facts about ES5**:

-   You could only declare variables using the `var` keyword, you could not use `const` or `let` as that was only introduced in `ES6`
-   Generally `ES5` uses the same syntax but misses a lot of crucial features

**Interesting facts about ES6**:

-   Supported in modern browsers, can (mostly) be transpiled to `ES5`
-   Many new features that help us write cleaner, better and faster code
-   `ES13` is the latest release as of the time of this README and was released on **June 22 2022**
-   Still under active development but `ES6` was the big breakthrough for JavaScript

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## var vs let vs const

<hr>

`var` creates a variable that you can't really change, it sounds identical to `const` but isn't exactly, we will learn why as we go along

`var` - Available since JavaScripts inception
`const` and `let` - Available since `ES6`

I would suggest that using `var` in modern day JavaScript could unofficially be declared as bad practice, lets have a look at a example:

We create a function called `greet()` and we log it to the console:

```
var name = 'Trevor';

function greet() {
    var age = 30
    var name = 'Tyrone'
    console.log(name, age);
}


console.log(name);
console.log(hobbies);
greet();
```

Its extremely important to note that `var` can be accessed **ANYWHERE** in your code whereas `let` and `const` are specifically block-scoped declarations unless written globally

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Understanding "hoisting"

<hr>

`Hoisting` is a behind the scenes functionality that works best described with `var`, its not useful practice but always good to know, see the below example:

```
console.log(userName); // undefined (without errors)

var userName = 'Trevor';
```

Essentially, JavaScript is initializing this for us but we donit see it, essentially behind the scenes this is happening:

```
var userName;

console.log(userName); // undefined (without errors)

var userName = 'Trevor';
```

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Strict Mode & Writing Good Code

It is more used in `ES5` but it can still be used today, it can create unexpected errors in your code

It is initiated like:

```
'use strict`;
```

Now strict mode is enabled, read about it further with the attached resource

[JavaSctript Script Mode Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode)

🏠 [Back To Top](#behind-the-scenes-of-javascript)


