// try-catch in JavaScript

// What is try-catch?
// JavaScript me `try-catch` ka use error handling ke liye hota hai
// Jab bhi koi aisa code ho jisme error aane ke chances ho, use `try` block me likha jata hai
// Agar koi error aata hai, to `catch` block execute hota hai without crashing the program

function divide(a, b) {
    try {
        // try block: contains the code that might throw an error
        if (b === 0) {
            // Manually throwing an error using throw keyword
            throw Error("Enter The Value Greater Than 0");
        }
        // If no error, this will run
        console.log(a / b);
    } catch (err) {
        // catch block: runs only if an error is thrown in try
        console.error(err); // Log the error
    }
}

// Examples:
divide(12, 2); // Output: 6
divide(12, 0); // Output: Error: Enter The Value Greater Than 0

// ----------------------------------------------------------------------
// Syntax:

/*
try {
   // code that might fail
} catch(error) {
   // handle the error
}
*/

// ----------------------------------------------------------------------
// What is `throw` in JS?

// `throw` keyword manually generates an error. 
// You can throw any type of value: string, number, object, or built-in Error()

// Examples:
throw "Something went wrong";
throw 404;
throw new Error("Custom error");

// ----------------------------------------------------------------------
// Important: try-catch does NOT catch syntax errors at compile time.
// These will crash immediately:
// try {
//     let x = ;
// } catch (e) {
//     console.log("Error caught");
// }
// ----------------------------------------------------------------------
// Real-World Use Cases of try-catch:

// JSON parsing from API responses
// Handling network/API request errors
// File operations (in Node.js)
// Validating user input
// Wrapping unknown or 3rd-party library code

// Interview Questions:

// What is the purpose of try-catch in JS?
// To handle runtime errors gracefully without stopping program execution.

// What happens if an error is thrown inside try?
// The catch block runs and receives the error as an argument.

// Can you throw custom errors in JS?
// Yes, using `throw` keyword, e.g. `throw new Error("message")`

// Will try-catch catch all types of errors?
// No. It only catches runtime errors Syntax errors during parsing won’t be caught.

// What is the difference between `throw "Error"` and `throw new Error("Error")`?
// `throw new Error()` gives you stack trace and extra metadata. `throw "Error"` just throws a string.

// ----------------------------------------------------------------------
// Bonus Tip: Optional `finally` block
// `finally` block runs every time, whether there’s an error or not.

function example() {
    try {
        console.log("Try block running");
    } catch (e) {
        console.log("Error caught");
    } finally {
        console.log("Always runs - even if there's no error");
    }
}
example();

// Output:
// Try block running
// Always runs - even if there's no error

