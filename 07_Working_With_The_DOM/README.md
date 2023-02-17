# Working With The DOM

## Table of Contents

<hr>

1. [Introduction](#working-with-the-dom)
2. [What is the "DOM"](#what-is-the-dom)
3. [Document & Window Object](#document--window-object)
4. [Understanding the DOM and how it's created](#understanding-the-dom-and-how-its-created)
5. [Querying the DOM](#querying-the-dom)
6. [Summary: Node Query Methods](#summary-node-query-methods)

## Introduction

<hr>

This module will cover the interaction with your web page, so far we have been given the code and only worked with the `JavaScript` codes.

In this section we will be exploring:

-   HTML, DOM & JavaScript
-   Nodes & Elements
-   Querying DOM Nodes & Traversing the DOM
-   Evaluating & Manipulating the DOM
-   Creating & Removing DOM Nodes

🏠 [Back To Top](#working-with-the-dom)

## What is the "DOM"?

<hr>

The "DOM" means : The Document Object Model

It is where JavaScript and the Browser meet, and if we have a Web Page that we are working on and we have HTML code that we want to update with user interaction

You will often `query` your elements with the `document query selector` and this will be used to change and update your script and HTML throughout your projects.

**The document allows you access to**:

-   Root DOM Node
-   Provides access to element querying, DOM content etc.

**The window allows you access to**:

-   The active Browser Window / Tab

It acts as a global storage for your script, also provides access to window =-specific properties and methods

🏠 [Back To Top](#working-with-the-dom)

## Document & Window Object

<hr>

The best way to understand the difference between the `Document` and the `Window` is really simple, The `Window` is the highest priority of order when it comes to the `DOM`, and the `Window` is an object that is related to it, as a simple exercise you can use the following commands to access these objects and explore them in a little further detail but during this section we will go through it more

**To Access The Document**:

Just access your web developer tools and in the console you can type the command:

```
document
```

Once you have entered this command you can expand the returned object and you will be shown your HTML and that is just a simple way to access and navigate your way through your file using the console

![Accessing the Document](https://github.com/trevthedev777/JavaScript-As-I-Learnt-It/blob/main/Readme_imgs/Section%206%20-%20accessing%20the%20document.png?raw=true)

If you want to look through the whole Node Tree of the document then all you have to do in your console is type:

```
console.dir(document)
```

Then you will be able to explore the document and its objects in further detail, although you will hardly need to use this, this can be helpful in many ways that we will explore further in section

**To Access The Window**:

In the console:

```
window
```

AS the window is the highest order of the Node Tree, you will notice that the document is an object supplied from the window

Very nerdy but cool stuff.

🏠 [Back To Top](#working-with-the-dom)

## Understanding the DOM and how it's created

<hr>

What is very important to understand that in the browswer, every `HTML element` is referred to as a `node`, the `<html>` element is the parent node of the document.

The browser keeps track of all the parent and child html node elements. This is done by creating a `Node Tree`.

Elements aren't the only `nodes` you will find in the DOM, all text is also referred to as Nodes but more importantly these are called `Text Nodes` and these are also apart of the `Node Tree` but they are strictly different objects of the `Node Tree` with different objects and methods

🏠 [Back To Top](#working-with-the-dom)

## Querying the DOM

<hr>

When are looking to "target" elements in our HTML in our JavaScript code there are mainly two ways to identify those, these are:

**Selecting one element at a time**:

1. `querySelector()` - CSS Selector
2. `getElementById()` - HTML Selector

Different ways of querying elements (by CSS selector, by ID)

Direct reference to the DOM element is returned, DOM nodes are just **JavaScript objects** in the end - i.e **reference values**. These methods **return the object references** (addresses).

**Selecting multiple elements at a time**:

1. `querySelectorAll()`
2. `getElementByTagName()`

Return collections of elements (array-like objects): NodeList

Different ways of querying elements (by CSS selector. by tag name, by CSS class)

### Nodes and Elements

| Nodes                                               | Elements                                                       |
| --------------------------------------------------- | -------------------------------------------------------------- |
| The objects that make up the DOM                    | Special properties and methods to interact with the elements   |
| HTML tags are "element nodes" (for just "elements") | Available methods and properties depend on the kind of element |
| Text creates "text nodes"                           | Can be selected in various ways (via JavaScript)               |
| Attributes create "attribute nodes"                 | Can be created and removed with using JavaScript               |

[Nodes MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

🏠 [Back To Top](#working-with-the-dom)

## Summary: Node Query Methods

<hr>

Here's a summary of the various methods you got to reach out to the DOM elements (note: you can only query for element nodes).

Besides the below query methods, you also got these special properties on the document object to select parts of the document:

`document.body` => Selects the `<body>` element node.
`document.head` => Selects the `<head>` element node.
`document.documentElement` => Selects the `<html>` element node.

**QUERY METHODS**

1. `document.querySelector(<CSS selector>);`

Takes any CSS selector (e.g. `#some-id`, `some-class` or `div p.some-class`) and returns the first matching element in the DOM. Returns `null` if no matching element could be found

[Query Selector MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

2. `document.getElementById(<ID>);`

Takes an ID (without `#`, just the ID name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns `null` if no element with the specified ID could be found.

[getElementById MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

3. `document.querySelectorAll(<CSS selector>);`

Takes a CSS class (e.g. `some-class`) and returns a live `HTMLCollection` of matched elements in your DOM. Returns an empty `HTMLCollection` if not matching elements were found.

[getElementsByClassName MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

4. `document.getElementsByTagName(<HTML TAG>);`

takes an HTML tahe (e.g. `p`) and returns a live `HTMLCollection` of matched elements in your DOM. returns an empty `HTMLCollection if not matching elements were found

[getElementsByTagName MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

There is also the `getElementsByName()` method which isn't really used commonly

[getElementsByName MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)

🏠 [Back To Top](#working-with-the-dom)

## Evaluating & Manipulating Elements

<hr>

🏠 [Back To Top](#working-with-the-dom)