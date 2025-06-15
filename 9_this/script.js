// `this` Keyword in JavaScript

// What is a Keyword?
// In JavaScript, a keyword is a reserved word that has a predefined meaning in the language.
// Examples: `var`, `let`, `console`, `function`, `this`, etc.

// What is `this`?
// `this` is one of the most suspenseful and misunderstood keywords in JavaScript.
// Its value depends on how and where it's used (called context).

// --------------------------------------
// 1. `this` in Global Scope
// Global scope = code that is not inside any `{}` (functions or objects)
console.log(this); // In browser, this logs: `window` object

// --------------------------------------
// 2. `this` Inside a Regular Function (ES5)
function abcd(){
  console.log(this);
}
abcd(); // logs: `window` (in non-strict mode)

// --------------------------------------
// 3. `this` Inside a Method
// A method is just a function written inside an object.

var obj = {
  name: function(){
    console.log(this);
  }
};
obj.name(); // logs: `obj` (because method is called on obj)

// What is a Method?
// A method is a function that is a property of an object.
// If a function is declared inside an object, it's called a method.

// --------------------------------------
// 4. Function Inside a Method (ES5 Style)

var obj2 = {
  sayName: function(){
    function greet(){
      console.log(this);
    }
    greet(); // logs: `window`
  }
};
obj2.sayName();

// Why `window`?
// Because `greet()` is a regular function, not a method. So its `this` refers to the global object.

// --------------------------------------
// 5. Function Inside a Method (Arrow Function - ES6 Style)

var obj3 = {
  sayName: function(){
    const child = () => {
      console.log(this);
    };
    child(); // logs: `obj3`
  }
};
obj3.sayName();

// Arrow functions do not have their own `this`.
// They inherit it from their parent scope.

// --------------------------------------
// 6. Arrow Function as Method

var obj4 = {
  sayName: () => {
    console.log(this);
  }
};
obj4.sayName(); // logs: `window`

// Why `window` again?
// Because arrow functions don't bind their own `this`. And here, `this` is inherited from the global scope.

// --------------------------------------
// 7. `this` in Constructor Function

function Add(){
  console.log(this);
}
Add(); // logs: `window`

let ans = new Add(); // logs: `Add {}`

// What is a Constructor Function?
// A function called with `new` keyword becomes a constructor.
// `new` creates a new blank object: {}
// That object becomes `this` inside the constructor

// --------------------------------------
// 8. `this` in Event Listener

document.querySelector("button").addEventListener("click", function(){
  console.log(this);
});

// In event listeners:
// `this` refers to the element that the event was triggered on (here, the button)

// ------------------------------------------------------------------------
// Real-World Use & Best Practices

// Use arrow functions for callbacks (like map, filter) when you want `this` to stay inherited
// Use regular functions in object methods and constructors where `this` binding is important
// Avoid arrow functions in methods or constructors if you want to refer to the object itself

// ------------------------------------------------------------------------
// Interview Tricky Questions & Answers

// Q1: What is `this` in JavaScript?
// A keyword that refers to the execution context, which changes depending on how a function is called

// Q2: What does `this` refer to in arrow functions?
// Arrow functions don't have their own `this`; they inherit it from their lexical (parent) scope

/*
Q3: What is the output of this code?
var obj = {
   name: "JS",
   getName: () => console.log(this.name)
};
obj.getName();
Output: `undefined` (because `this` refers to global, not `obj`)
*/

// QWhat happens if we use `new` before a function?
// It becomes a constructor, and `this` refers to the new empty object it creates
// ------------------------------------------------------------------------------
// Summary

// `this` is dynamic — its value depends on how the function is called.
// Arrow functions inherit `this` from their outer scope.
// In event listeners, `this` = the element that triggered the event.
// With `new`, `this` = new object instance.
// In object methods, `this` = the object itself.

