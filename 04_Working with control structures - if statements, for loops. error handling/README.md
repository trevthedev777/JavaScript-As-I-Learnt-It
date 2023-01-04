# Working with Control Statements: (if statements, for loops and Error Handling)

## Table of Contents
<hr>

1. [Introduction](#introduction)
2. [Introduction to "if statements" and Boolean (Comparrison) operators](#working-with-control-statements-if-statements-for-loops-and-error-handling)
    - [Using Booleans in Conditions](#using-booleans-in-conditions)
    - [More on Text Comparisons](#more-on-text-comparisons)
3. [Using "if" statements](#using-if-statements)


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
---------|-------------------|--------
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

🏠 [Back To Top](#section-03-efficient-development-and-debugging)