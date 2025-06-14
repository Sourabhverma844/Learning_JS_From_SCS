// JavaScript Functions — ES5 and ES6

// Functions in JavaScript
// Functions are reusable blocks of code used to perform specific tasks.
// JavaScript allows defining functions without specifying return types (like int, void in Java).
// Functions in JS are treated as first-class citizens — they can be stored in variables, passed as arguments, and returned from other functions.

// Two major function styles in JS: ES5 and ES6

// ==============
// ES5 FUNCTIONS
// ==============

// 1. Function Statement (a named function)
function webdev() {
    console.log("Learn Js");
    console.log("Learn React");
    console.log("Learn MongoDb");
    console.log("Learn Node");
    console.log("You are ready to create a web");
}
webdev();  // calling the function

// 2. Function Expression (function stored in a variable)
var abcd = function () {
    // function body here
};

// 3. Anonymous Function (function without a name — usually used inside expressions)
// function() {
//     // Not valid on its own, must be assigned or passed
// }

// ========================
// PARAMETERS vs ARGUMENTS
// ========================

// Parameters are placeholders when defining a function
function greet(val) {
    console.log("Hello", val);
}

// Arguments are actual values passed when calling the function
greet("Sourabh");     // "Sourabh" is an argument

// Functions can also accept another function as an argument
function runTask(task) {
    task(); // calling the passed function
}
runTask(function() {
    console.log("Running passed function");
});

// ==============================
// ES6 ARROW FUNCTIONS (Fat Arrow)
// ==============================

// 1. Basic Arrow Function
var a = () => {
    console.log("Basic arrow function");
};

// 2. Arrow Function with One Parameter
var g = (val) => {
    console.log("Received:", val);
};
g(12);

// Alternate syntax (no brackets for one parameter)
var g = val => {
    console.log("Received:", val);
};
g(12);

// 3. Implicit Return (no curly braces or 'return' keyword)
var username = () => "Sourabh";
var ans = username(); // Returns "Sourabh"
console.log(ans);

// ==============================
// Why Use Functions?
// ==============================
// Reuse code
// Organize code into logical blocks
// Delay execution — run later when needed

// ==============================
// Interview Quick Prep
// ==============================

/*
1. Function Statement:
function abcd() {
    // Code here
}

2️. Function Expression:
var abcd = function () {
    // Code here
};

3️. Anonymous Function (used inline):
setTimeout(function () {
    console.log("Executed after delay");
}, 1000);
*/

// Real-World Use Case:
// Use functions to group repeated tasks — like validating forms, performing API calls, etc.

// Summary:
// - JS functions don’t need return types like other languages.
// - They can be stored in variables and passed around (first-class).
// - ES5 introduced standard functions; ES6 added arrow functions with cleaner syntax.
// - Parameters = placeholders, Arguments = real values.
