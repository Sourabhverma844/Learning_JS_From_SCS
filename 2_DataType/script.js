/** 
 📘 JavaScript Data Types
 1. Primitive Data Types 
    - These store single values.
    - Examples: Number, String, Boolean, null, undefined, Symbol, BigInt
 2. Reference Data Types 
    - These store references to memory locations.
    - Examples:
        []  → Array
        (){} → Function
        {}  → Object
*/

// ----------------------------------
// 🔁 Reference Type Behavior Example
// ----------------------------------

let arr1 = [1, 2, 3, 4, 5];  // arr1 is an array (reference type)
let b = arr1;               // b points to the same array in memory
b.pop();                    // Removes last element (5)
console.log(b);             // Output: [1, 2, 3, 4]
// arr1 is also affected because b and arr1 refer to the same array

// ----------------------------------
// ✅ Using Spread Operator for Copy
// ----------------------------------

var arr2 = [12, 13, 14, 15];      // Original array
var arr3 = [...arr2];            // Spread operator creates a shallow copy
arr3.pop();                      // Removes 15 from arr3 only

console.log(arr2);               // Output: [12, 13, 14, 15] (Unchanged)
console.log(arr3);               // Output: [12, 13, 14] (Changed)
