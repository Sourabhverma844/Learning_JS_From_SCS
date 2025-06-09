/*
JavaScript Loops
================
Loops allow us to execute a block of code multiple times.
We use loops when we want to repeat something until a condition is met.

1️.) for loop (Most Important)
-----------------------------
Syntax:
for(initialization; condition; increment/decrement){
    // code block
}
*/
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Iteration:", i);
}
// Use-case: When you know how many times to repeat.



/*
2️.) while loop
--------------
Syntax:
while(condition){
    // code block
    change
}
*/
let count = 1;
while (count <= 5) {
  console.log("While Loop Iteration:", count);
  count++;
}
// Use-case: When the number of repetitions is not fixed beforehand.



/*
3️.) do-while loop
-----------------
Syntax:
do {
   // code block
   change
} while(condition);
*/
let num = 1;
do {
  console.log("Do-While Loop Iteration:", num);
  num++;
} while (num <= 5);
// Difference: It runs the loop at least once, even if the condition is false initially.



/*
4️.) forEach loop (Most Important)
---------------------------------
Works only with arrays.
Syntax:
array.forEach(function(element, index){
    // code block
});
*/
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
//Best for: Iterating over arrays with access to both value and index.



/*
5.) for...in loop
------------------
Used to iterate over object properties.
Syntax:
for (let key in object){
    // code block
}
*/
const person = { name: "Ali", age: 25, city: "Delhi" };
for (let key in person) {
  console.log(`${key} → ${person[key]}`);
}
// Best for: Looping through object keys/values.



/*
6.) for...of loop
------------------
Used to iterate over iterables like arrays, strings, etc.
Syntax:
for (let value of iterable){
    // code block
}
*/
const letters = ['a', 'b', 'c'];
for (let letter of letters) {
  console.log("Letter:", letter);
}
//Best for: Arrays, strings, maps, sets (when you only care about values, not indexes).

