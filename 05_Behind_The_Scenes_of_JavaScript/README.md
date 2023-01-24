# Behind the Scenes of JavaScript

## Table of Contents

1. [Introduction](#introduction)
2. [ES5 vs ES6](#es5-vs-es6)
3. [var vs let vs const](#var-vs-let-vs-const)
4. [Understanding "hoisting"](#understanding-hoisting)
5. [How Code is Parsed and Compiled](#how-code-is-parsed-and-compiled)
6. [Inside the JavaScript Engine: How the Code Executes](#inside-the-javascript-engine-how-the-code-executes)
    - [Heap](#heap)
    - [Stack](#stack)
7. [Deep Dive into JavaScript Language vs Browser APIs](#deep-dive-into-javascript-language-vs-browser-apis)
8. [Primitive vs Reference Values](#primitive-vs-reference-values)
9. [garbage Collection and Memory Management](#garbage-collection-and-memory-management)

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

## How Code is Parsed and Compiled

<hr>

Whenever the browser detects a `script` being loaded in an HTML file, it automatically executes it.

What Does that mean?

Well, the details depend on the **browser/engine** being used, these engines do their parsing in the engine and this method typically takes part in 2 parts:

1. Interpreter
    - The interpreter loads the html, then script and reads it, then it translates it into bytecode then goes ahead and runs the script
2. Compiler
    - This is usually referred to as a `just in time(jiT)` compiler

Communication Bridges between `JavaScript` and `C++` Logic is built into the browser

More details about the Google Chrome engine:

[V8 Engine Explained](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)

More details about the FireFox engine:

[Spider Monkey Docs](https://firefox-source-docs.mozilla.org/js/index.html)

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Inside the JavaScript Engine: How the Code Executes

<hr>

Its all about managing memory and execution steps, these are usually broken up into 2 concepts:

1. Heap
2. Stack

### Heap

Memory Allocation : Stores data in your system memory and manages to access it

### Stack

Execution Content: Manages your program flow (function calls and communication)

`JavaScript` is single-threaded meaning: _"One thing happens at a time"_

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Deep Dive into JavaScript Language vs Browser APIs

In this section so far we covered the JavaScript engine and what it does inside the browser. We also learned that there is a difference between the JS code execution and Browser APIs you might tap into during that execution.

Essentially, you can split the code you write into these two pieces:

1. **The JavaScript Language**
   Understand core syntax (`let`, `const` etc) but does **NOT** know anything about the DOM for example

2. **Browser APIs**
   Not responsible for understanding your code (thats what point 1 does) but instead responsible for exposing APIs like the DOM API which you can use from inside your script code

**The JavaScript Language (1)** is advanced **Emca International Technical Committee 39 (TC39)**, which is a group that's part of the Emca organization. It's responsible for adding new features to the JavaScript language itself. For example, in the past, it was responsible for add `let` and `const`.

You can **learn more about TC39** here [TC39](https://tc39.es/)

And you can explore the current proposals that are being discussed by that group - features hat potentially make it into the core JavaScript language in the future: [TC39 Proposals Repo](https://github.com/tc39/proposals)

**IMPORTANT**: Just because a feature becomes part of the language does **NOT** mean that all JavaScript engines immediately support that feature. Of course the people developing the engines are doing their best to provide support as soon as possible but that process simply also takes time.

On the other hand, engine vendors also **sometime start supporting certain feature **BEFORE TC39** made a feature an official part** of JavaScript. In the end, it's of course totally up to the people working on the engines to decide which syntax their JS understands.

**Browser APIs** also are standardized because the different browser vendors (Google for Chrome, Microsoft for Edge etc.) of course want to (roughly) provide feature parity and similar APIs. Its wouldn't be a great developer experience if you had different functions which you need to call to make your scripts works in different browsers. Although, in the past, this was pretty normal.

Nowadays, thankfully, this is getting way better because **there also is a working group that works on browser APIs** - so that different features and APIs in different browsers are avoided as good as possible.

That working group has the name **WHATWG** and you can learn more about it here: [WHATWG](https://whatwg.org/)

If you're interested in learning more about the APIs that were/are 'managed' by this group, you can check this site [WHATWG APIs](https://spec.whatwg.org/)

**THIS WORKING GROUP IS NOT RELATED TO TC39!**

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Primitive vs Reference Values

<hr>

In `JavaScript` we have **two categories of types/values**

1. Primitive Values

These are: `strings`, `numbers`, `Booleans`, `null`, `undefined`, `Symbol`.

Every variable that you create in JavaScript is stored as a **primitive value**

Its stored on memory normally on the stack and are short living and it does not consume much memory and are easily reused

When you copy a `variable` that holds a primitive value then the value is actually copied.

Lets have a look at an example:

```
let name = 'Trevor';
console.log(name) // Trevor

<!-- You can store this new variable with the data of the name variable -->
let anotherUser = name;
console.log(anotherUser); // Trevor

<!-- Now if you reassign the value of the original variable -->
name = 'Tyrone';
console.log(name); // Tyrone

<!-- it will not automatically change the anotherName variable, that retains its original value -->
console.log(anotherUser);
```

2. Reference Values

All other `object` in JavaScript are reference values and they are "more expensive to create"

These are stores in memory **(Heap)**, variable stores a pointer (address) to location in memory, so the variable stores the address of that memory, or simply: **a reference to the object stored in memory (hence "reference values")**

When copying a reference value, `(= assign to different variable) **copies the pointer/reference**`

Here is an example:

```
let hobbies = ['Sports'];
let newHobbies = hobbies;

console.log(hobbies); // ['Sports']
console.log(newHobbies); // ['Sports']

<!-- Lets add to the array -->
hobbies.push('Cooking');

console.log(hobbies); // ['Sports', Cooking'];

<!-- Now, because its a reference value, it changes the OBJECT and both are changed, unlike a primitive value -->

console.log(newHobbies); // ['Sports', Cooking'];

```

It has changed both because we have only copied the 'pointer' or the 'address' of the array so the element itself was never duplicated or copied. Which means if we change one object, we change the other array

Another Example:

```
let person = {age: 30};
let anotherPerson = person;

<!-- updated value -->
anotherPerson.age =32;

console.log(person); // 32
console.log(anotherPerson); // 32
```

Now there are cases that we need to copy the objects and we need the original value to remain the same and only change the copied variable. How do we do this?

Simply by using the `spread operator`

```
let yetAnotherPerson = { ...person };

console.log(yetAnotherPerson) // {age: 32}

<!-- Updated original variable -->
person.age = 30;

<!-- Does not change the copied variable -->
console.log(yetAnotherPerson) // {age: 32}
```

Lets look and explore some logic with it:

```
const person1 = {age: 30};
const person2 = {age: 30};

person1 === person2
// false
```

Why is it `false`? well thats because we have only compared the pointer values and to keep in mind that even if the object have the same data they are **DIFFERENT** objects so they will **ALWAYS** return `false`

🏠 [Back To Top](#behind-the-scenes-of-javascript)

## Garbage Collection and Memory Management

<hr>

[Mempry Management Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

[V8 garbage Collection Garbage](https://v8.dev/blog/free-garbage-collection)

🏠 [Back To Top](#behind-the-scenes-of-javascript)
