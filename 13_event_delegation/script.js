// Topic: Event Delegation in JavaScript

// What is Event Delegation?
// Event delegation is a technique where a single event listener is added to a parent element
// to handle events for its multiple child elements by using `event.target` to identify the clicked element.

// Why use it?
// - Efficient: Fewer event listeners = better performance.
// - Dynamic: Works even if child elements are added later.
// - Cleaner code: One place handles multiple behaviors.

// ------------------------------------
// 🛠️ HTML Structure:
// <div id="parent">
//     <button id="play">Play</button>
//     <button id="pause">Pause</button>
// </div>
// ------------------------------------

var parent = document.querySelector('#parent');

parent.addEventListener("click", function(e) {
    // `e.target` refers to the actual element clicked
    if (e.target.id === "play") {
        console.log("Play Song");
    } else if (e.target.id === "pause") {
        console.log("Pause Song");
    }
});

// How it Works:
// - When you click on a button, JS first looks for an event listener on the clicked button.
// - If none is found, it "bubbles up" to the parent (`#parent`) to find a listener.
// - This is called event bubbling (event moves from child → parent).

// Visual Trick to Remember Event Bubbling:
// Button (child) → Parent (bubble moves up)

// Interview Q:
// Q: What is event delegation and why is it useful?
// A: It’s a technique of attaching a single event listener to a parent element to handle actions from multiple child elements. 
//  Useful for performance and dynamic element handling.

// Best Practices:
// - Always use `e.target` or `e.target.closest()` to identify which child was clicked.
// - Combine with `id`, `classList`, or `data` attributes for cleaner conditions.