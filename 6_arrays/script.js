//JavaScript Arrays: Basics, Indexing, and Looping

/* 
What is an Array?
An array is a special variable that can store more than one value at a time.
It is useful when you want to group multiple values together using a single name.
For example: a list of users, numbers, or tasks.
*/

// Declaring an array with values
var users = ["Sourabh", "Aniket", "Name3", "Name4", "Name5"];

/*
How Indexing Works in Arrays:
- Arrays in JavaScript use 0-based indexing.
- That means the first element is at index 0, the second at index 1, and so on.
*/

console.log(users[0]);  // Output: Sourabh
console.log(users[5]);  // Output: undefined (because there is no 6th element)

/*
Declaring Different Types of Arrays
You can create:
- Empty arrays
- Arrays with mixed data types (numbers, strings, functions, arrays, etc.)
*/

var arr1 = []; // Empty array
var arr2 = [1, 2, '3', function(){}, [], 4]; 
// This array contains numbers, a string, a function, another array, and a number

/*
Looping Through Arrays Using forEach():
forEach() is a method that runs a function on each item of the array.
You can use it to perform operations like summing values.
*/

var arr3 = [1, 2, 3, 4, 5];
var sum = 0;

arr3.forEach(function(val) {
    sum = sum + val;  // Adds each value of the array to the sum
});

console.log(sum);  // Output: 15

/*
Real-World Use Cases / Best Practices:

Use arrays to group related data like users, products, tasks.
Use meaningful names like `users`, `numbers`, `tasks`.
Use `const` instead of `var` when the array reference shouldn't change.
Prefer array methods like `forEach`, `map`, `filter` for readability.
*/