// Topic: Understanding the `return` Keyword in JavaScript

// Definition:
// In JavaScript, the `return` keyword is used inside a function to send a value back 
// to the place where the function was called. It also immediately stops the execution 
// of the function and jumps back to where the function was invoked.

// Jaise hi JavaScript kisi function ke andar `return` dekhta hai,
// vo function ka kaam wahi pe khatam karke wapas us jagah chala jata hai
// jahan se function call hua tha. Agar `return` ke aage koi value di gayi ho, 
// to vo value bhi wapas bhej di jati hai.


// Example 1: Function that returns a number
function val1() {
    return 12; // yeh function 12 return karega
}

console.log(val1()); // Output: 12

// Jab val1() call hota hai, to function ke andar ka code execute hota hai
// return 12; likha hai to 12 wapas console.log ke pass chala jata hai
// isliye console me 12 print hota hai.


// Example 2: Function with empty return
function val2() {
    return; // yahan kuch return nahi ho raha
}

console.log(val2()); // Output: undefined
// Jab function kuch bhi return nahi karta, to JavaScript default me `undefined` return karta hai.


// Point to Remember:
// Har function JavaScript me by default `undefined` return karta hai agar koi return na diya ho.

// For example:
console.log("hey"); // Output: hey
// Console me output to "hey" hoga
// lekin agar tum browser ke console me likhoge, to uske neeche `undefined` bhi dikhai dega,
// kyunki console.log() function kuch return nahi karta.


// Another example:
clear(); 
// Agar tum browser console me clear() likhoge to console clean ho jayega
// aur technically, ye bhi `undefined` return karega.


// Difference Between: undefined, null, and not defined

// undefined
// - Ye ek value hai jo JavaScript tab deta hai jab variable declare to hua ho lekin koi value assign nahi hui ho.
// - Isse hum ek "default value" ya "garbage value" bhi keh sakte hain.

let x;
console.log(x); // Output: undefined


// not defined
// - Ye ek error hoti hai
// - Jab tum kisi aise variable ka use karne ki koshish karte ho jo kabhi declare hi nahi hua

// Example:
// console.log(a); // ❌ ReferenceError: a is not defined


// null
// - Ye bhi ek value hai jo batata hai ki "kuch exist hi nahi karta"
// - Jaise tum Instagram pe koi aisa username search karo jo hai hi nahi — system `null` return karega.

let user = null;
console.log(user); // Output: null
