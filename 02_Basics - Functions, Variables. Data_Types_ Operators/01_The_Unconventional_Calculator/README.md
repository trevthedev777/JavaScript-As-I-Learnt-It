# The Unconventional Calculator

## Table of Contents

- [Introduction](#introduction)
    - [The let Keyword](#the-let-keyword)
    - [The const Keyword](#the-const-keyword)
- [Declaring and Naming Variables](#declaring-and-naming-variables)
    - [Good and Bad Practices](#alloweddisallowed-best-and-worst-practices-in-javascript)
    - [Working with Variables and Basic Operators](#working-with-variables-and-basic-operators)
        - [What are Operators?](#what-are-operators)
- [Data Types in JavaScript](#data-types-in-javascript)
    - [Numbers and Strings](#numbers--strings)
- [Functions in JavaScript](#functions-in-javascript)

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


