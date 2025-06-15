// Synchronous vs Asynchronous JavaScript

/*
Definition:

In JavaScript, code can be synchronous (runs one task at a time in order) or asynchronous (runs multiple tasks in the background and executes them as soon as they’re ready).

JavaScript is a single-threaded language, meaning it runs one line of code at a time using a call stack, but asynchronous behavior allows non-blocking execution using Web APIs and callback queues.
*/


/*
Example to understand Synchronous execution:
console.log("Task 1 - takes 1 second");
console.log("Task 2 - takes 2 seconds");
console.log("Task 3 - takes 0.5 seconds");
// Output will be in the same order as written

//Example to understand Asynchronous execution:
setTimeout(() => console.log("Async Task 1 - 1 sec"), 1000);
setTimeout(() => console.log("Async Task 2 - 2 sec"), 2000);
setTimeout(() => console.log("Async Task 3 - 0.5 sec"), 500);

// Output order:
// First: Task 3 (0.5 sec) → then Task 1 (1 sec) → then Task 2 (2 sec)
// They all start at once, but complete based on their delay

*/


/*
Detailed Code Explanation:

console.log("Task 1 - takes 1 second");
   - Logs the message immediately.
   - This is synchronous and goes directly into the call stack.

console.log("Task 2 - takes 2 seconds");
   - Also synchronous, and runs after Task 1.

console.log("Task 3 - takes 0.5 seconds");
   - Again, runs after Task 2. All of these follow the order written.

setTimeout(() => console.log("Async Task 1 - 1 sec"), 1000);
   - An asynchronous task scheduled to run after 1 second.
   - Goes to the Web API, waits there.

setTimeout(() => console.log("Async Task 2 - 2 sec"), 2000);
   - Another async task scheduled after 2 seconds.

setTimeout(() => console.log("Async Task 3 - 0.5 sec"), 500);
   - Scheduled to run after 0.5 sec.
   - Will finish before the others.
*/


/*
Code Execution Flow:

1. All synchronous code (console.log) is executed immediately, line by line.
2. Asynchronous code (setTimeout) is sent to the browser's Web API (side stack).
3. The Web API tracks time for each timeout.
4. Once the timeout is over, the callback is added to the Task Queue.
5. Event Loop checks if Call Stack is empty → moves callback from Task Queue to Call Stack.
6. Callback runs and logs the message.
*/


/*
Breakdown of Key Concepts:

`synchronous`: Code that runs step-by-step, blocking the next line until current one is done.

`asynchronous`: Code that starts and moves aside to be handled later (e.g., setTimeout).

`setTimeout()`: JavaScript function that delays code execution without blocking.

`Call Stack (Main Stack)`: Where JS runs one function at a time.

`Web APIs (Side Stack)`: Browser-provided background area where setTimeout, HTTP requests, etc., are handled.

`Task Queue`: Once async task is ready, its callback moves here waiting for call stack to be empty.

`Event Loop`: Continuously checks if Call Stack is empty → moves ready tasks from queue to execution.

*/


/*
Real-World Use Cases / Best Practices:

Asynchronous code is important for:
- Loading data from APIs (e.g., fetch())
- Delaying UI changes
- Animations
- Non-blocking user interfaces

Best Practice:
- Use asynchronous logic to avoid freezing the UI.
- Don't put heavy work in synchronous code—move it to async logic if possible.
*/


/*
Tricky Interview Questions to Remember:

1. What is the difference between the Call Stack and Web APIs in JavaScript?
2. Does async code block the main thread?
3. n what order will the following code execute:

    console.log("A");
    setTimeout(() => console.log("B"), 0);
    console.log("C");

    // Answer: A → C → B

4. What is the Event Loop, and why is it important?

Tip to Remember:
- Synchronous = One-by-one like a queue.
- Asynchronous = Starts all, but finishes when ready. Faster ones complete first.
*/
