// Topic: Higher Order Functions (HOFs) in JavaScript

// What is a Higher Order Function?
// A Higher Order Function is a function that:
// Accepts another function as a parameter OR
// Returns another function as its result

// ----------------------------------------------------------------------
// Simple Function (Not HOF)
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Sourabh"); // Output: Hello Sourabh

// This is NOT a higher order function, because we're just passing a value (string), not a function

// ----------------------------------------------------------------------
// Passing a Function as Argument (This is a HOF)

let add = function(a, b) {
    return a + b;
};

// Now passing a FUNCTION RESULT into greet — this turns greet into a higher order function
greet(add(3, 4)); // Output: Hello 7

// But technically greet is NOT a HOF here, because we're passing a result, not the function itself

// Let’s make it a true HOF:
function executor(callback) {
    console.log("The result is: ", callback(5, 10));
}

executor(add); // Output: The result is: 15

// Now `executor` is a Higher Order Function — it accepts another function as an argument

// ----------------------------------------------------------------------
// HOF that Returns Another Function

function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

// This is also a Higher Order Function — it RETURNS a function

// ----------------------------------------------------------------------
// HOFs in Built-in Methods

var arr = [1, 2, 3, 4, 5, 6];

// forEach is a Higher Order Function because it accepts a function as an argument
arr.forEach(function(val) {
    console.log(val); // Prints each value
});

// ----------------------------------------------------------------------
// Closure vs HOF (Important Distinction):

/*
👉 Higher Order Function:
   - Accepts or returns another function.
   - Doesn't necessarily capture outer scope variables.

👉 Closure:
   - Always returns a function.
   - That returned function must access variables from the outer (parent) function.
*/
// ----------------------------------------------------------------------
// Code Execution Flow (Simple):

// 1. `executor(add)` runs
// 2. Inside executor, `callback(5, 10)` becomes `add(5, 10)`
// 3. `add` returns 15
// 4. `console.log` prints the result

// ----------------------------------------------------------------------
// Real-World Use Cases:

// HOFs make code reusable and modular
// Used heavily in:
//    - Event handling (e.g., `addEventListener`)
//    - Array methods (`map`, `filter`, `reduce`)
//    - Functional programming patterns
//    - Debouncing and throttling functions in UI

// ----------------------------------------------------------------------
// Trick Interview Question:

// that is a Higher Order Function?
// A function that accepts another function as a parameter or returns a function.

// Is `forEach` a Higher Order Function?
// Yes, because it accepts a function as an argument to operate on each array element.

// Difference between HOF and Closure?
// HOF is about accepting/returning functions. Closure must retain access to parent variables.

// ----------------------------------------------------------------------