// Introduction to JavaScript Objects

// Definition:
// In JavaScript, objects are a way to group related data (like a real-world entity's details) together.
// This makes data organized, readable, and easily manageable.


// Creating an empty object using object literal syntax
var obj = {}; 

// Creating an empty object using Object constructor
var a = new Object(); 

// Checking the type of both objects
console.log(typeof(obj)); // output: "object"
console.log(typeof(a));   // output: "object"

// Creating an object with properties
var obj2 = {
    name: "sourabh",
    age: 25,
    email: "sourabh@ripple"
};

// Displaying the object in the console
console.log(obj2);

// Interview Memory Tricks:

// What are the two ways to create an object in JS?
// Using {} (object literal) or new Object() (constructor).

// Which method is preferred in real-world code and why?
// Object literal `{}` – because it's shorter, faster, and easier to read.

// Can JavaScript objects store multiple types of values?
// Yes! Objects can hold strings, numbers, arrays, other objects, even functions!

// Real-World Use Cases:
// Use objects to store user profiles, product details, settings, etc.
// In APIs, data is often sent and received as objects (usually in JSON format).

// Simple Summary:
// Objects in JavaScript allow you to store related data together.
// They're great for representing real-world entities like users, products, or configurations.
// You can create them using either `{}` or `new Object()`, but the literal way is cleaner.