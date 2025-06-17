// call(), apply(), bind() in JavaScript

// These are 3 powerful ways to control the value of `this` when calling a function
// Useful when you want a function to behave as if it belongs to a different object.

// ---------------------------------------------------
// 1. Basic Function Example

function abcd(){
  console.log(this);
}
abcd(); 
// Output: `window` (in browser) — because it's a regular function call

// ---------------------------------------------------
// 2. Using .call() Method

const obj = { name: "Sourabh" };

function greet(){
  console.log(this);
}

greet.call(obj); 
// Output: { name: "Sourabh" }
// `call()` sets `this` to `obj` when the function runs

greet.call("12"); 
// Output: String object: "12"
// You can even pass primitive types; JS wraps them in objects

// ---------------------------------------------------
// 3. Using .apply() Method

const company = { name: "Ripple" };

function emp(a, b, c){
  console.log(this, a, b, c);
}

emp.apply(company, [1, 2, 3]);
// Output: { name: "Ripple" } 1 2 3
// Same as `call()`, but parameters are passed as an array

// ---------------------------------------------------
// 4. Using .bind() Method

const job = { profile: "Blockchain Developer" };

function occupation(){
  console.log(this);
}

const boundFunc = occupation.bind(job);
// It does not run the function immediately
// It returns a new function with `this` set to `job`

boundFunc(); 
// Output: { profile: "Blockchain Developer" }

// ---------------------------------------------------
// Interview Tricky Questions & Answers

// Q1: What’s the difference between call() and apply()?
// Both change the value of `this` and invoke the function.
// Difference: `call()` takes arguments one-by-one, `apply()` takes an array.

// Q2: What’s the difference between call() and bind()?
// `call()` invokes the function immediately.
// `bind()` returns a new function that you can run later.

// Q3: Can we use call/apply/bind on arrow functions?
// No. Arrow functions do not have their own `this`. These methods won't change `this` in arrow functions.

// Q4: What will this code output?
// const obj = { x: 42 };
// function show() { console.log(this.x); }
// const boundShow = show.bind(obj);
// boundShow();
// ```
// Output: `42`

// Q5: Is bind mutable? Can we change the `this` after bind?
// No. Once a function is bound using `bind()`, its `this` cannot be changed again.

