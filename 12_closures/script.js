// Topic: Closures in JavaScript

// Definition:
// A closure is a function that remembers and accesses variables from its outer (parent) function even after that parent function has finished execution.

// In simpler words:
// Any function that returns another function and uses variables from the parent scope is a closure.

// ---------------------------------------------------
// Example 1: Simple Closure

function counter(val) {
    var count = val;

    return function () {
        count++;
        console.log(count);
    };
}

var abc = counter(1); // abc now holds the returned inner function
abc(); // Output: 2
abc(); // Output: 3 (count is preserved inside closure)
abc(); // Output: 4

// Explanation:
// - `counter(1)` runs and initializes `count = 1`
// - It returns an inner function
// - The inner function has access to `count` even after `counter` has finished executing
// - That's a closure!

// ---------------------------------------------------
// Example 2: Closure with setTimeout

function timer() {
    var a = 12;

    return setTimeout(function () {
        console.log(a);
    }, 5000);
}

timer(); // Output after 5 sec: 12

// Why?
// The anonymous function inside `setTimeout` is a closure. It "remembers" variable `a` even after `timer()` is done executing.

// ---------------------------------------------------
// Interview Tricky Questions & Answers

// Q1: What is a closure?
// A function that retains access to its lexical scope even when executed outside of its parent scope.

// Q2: Can a closure update variables from the parent scope?
// Yes, closures can read and modify variables from the outer function scope.

// Q3: Where are closures used in real life?
// In event handlers, timers, module patterns, private variables, etc.

// Q4: What gets created when a closure is formed?
// A scope chain is preserved — the inner function holds a reference to the outer scope, not a copy.

// Q5: What will the following print?

function test() {
    let x = 5;
    return function () {
        console.log(++x);
    };
}
let run = test();
run(); // ?
run(); // ?

// Output:
// 6
// 7

