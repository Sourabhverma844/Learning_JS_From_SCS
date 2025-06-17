// Topic: Prototypal Inheritance in JavaScript

// Concept:
// In JavaScript, objects can inherit properties and methods from another object using something called Prototype.
// When you add properties/methods to a constructor function's prototype, all objects created using that constructor will have access to them.

// ---------------------------------------------------
// Creating a constructor function (capital naming is a convention)
function makeHuman(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an object using `new`
let makeHuman1 = new makeHuman("Sourabh", 26);
console.log(makeHuman1);
// Output: makeHuman { name: 'Sourabh', age: 26 }

// ---------------------------------------------------
// Explanation:
// 1️When we call a function with `new`, 3 things happen internally:
//   - A new empty object is created → {}
//   - `this` points to that object
//   - The object gets access to the constructor's prototype

// So, any function that uses `this` and is called with `new` is called a Constructor Function

// ---------------------------------------------------
// 🔍 Example: Constructor Function

function abcd() {
    this.username = "Aniket";
    var calc = 12 * 3;  // local variable, not attached to `this`
}

var ans = new abcd();
console.log(ans); 
// Output: abcd { username: 'Aniket' }

var res = abcd();
console.log(res); 
// Output: undefined ❗
// Because when you call `abcd()` without `new`, it doesn’t return anything — so `res` becomes `undefined`

// ---------------------------------------------------
// Now Let’s Understand Prototypal Inheritance

function emp(profile, salary) {
    this.profile = profile;
    this.salary = salary;
}

// Adding a method to the prototype
emp.prototype.companey = function() {
    console.log(this.profile + " works at Ripple.");
};

// Creating employee objects
const emp1 = new emp("Sourabh", 5000000);
const emp2 = new emp("Aniket", 6000000);

console.log(emp1);  // emp { profile: 'Sourabh', salary: 5000000 }
console.log(emp2);  // emp { profile: 'Aniket', salary: 6000000 }

// Accessing shared method from prototype
emp1.companey(); 
// Output: "Sourabh works at Ripple."

emp2.companey(); 
// Output: "Aniket works at Ripple."

console.log(emp1.companey);
// Output: [Function (anonymous)] 
// Because you are only logging the function definition, not calling it
// ---------------------------------------------------
// Interview Tricky Questions & Answers

// Q1: What is prototypal inheritance?
// When one object gets access to the properties/methods of another object via the prototype chain, it's called prototypal inheritance.

// Q2: Difference between a constructor function and a regular function?
// Constructor is called with `new` keyword and assigns properties to `this`.
// Regular function doesn't return a new object unless you manually do it.

// Q3: What will happen if you try to use a method added on the prototype on an object not created with the constructor?
// It will throw an error — because the prototype chain won’t match

// Q4: Can you override a prototype method on a specific object instance?
// Yes. If you define the same method directly on the object, it will override the prototype method for that instance only.