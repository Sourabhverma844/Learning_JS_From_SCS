// Topic: Custom Events in JavaScript

// Definition:
// Events are actions or occurrences that happen in the browser, like clicking a button or moving the mouse.
// JavaScript lets us create our own custom events using the `new Event()` constructor.

// Step 1: Create a custom event using the Event constructor
const MyEvent = new Event("HelloJiKiHalChal");

// Step 2: Add an event listener for the custom event on a button
document.querySelector("button").addEventListener("HelloJiKiHalChal", function(){
    alert("HelloJiKiHalChal event is running");
});

// Step 3: Dispatch (trigger) the custom event manually
// This is how we fire the custom event. Without this, the event won't run.
document.querySelector("button").dispatchEvent(MyEvent);

// Line-by-line Explanation:
// new Event("HelloJiKiHalChal") ➜ Creates a new custom event with a unique name.
// addEventListener("HelloJiKiHalChal", ...) ➜ Tells the browser to listen for that custom event.
// dispatchEvent(MyEvent) ➜ Triggers (fires) the event manually on the selected element.


// Tricky Interview Question:
// Q: Can you create and trigger your own custom events in JavaScript? If yes, how?
// Yes, using `const myEvent = new Event("eventName")` and then dispatching it using `element.dispatchEvent(myEvent)`.

// Real-World Use Case:
// Imagine you're making a custom modal box component. Instead of using `click`, you might create a custom event like `"modalOpened"` or `"modalClosed"` that other parts of your app can listen to.

// Simple Summary:
// Custom events allow you to define and trigger your own browser events using `new Event()` and `dispatchEvent()`. This is helpful for creating more dynamic and modular JavaScript applications.