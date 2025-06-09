//functions
//javascript has 2 main types
// es5 and es6
// es5 me functions ke 3 prakar the function statements, function expressions, anonymous functions
// es6 me ek prakar he jo 3 prakar me divide he 
// es6 me 1 prakar he fat arrow function or ise 3 treeko se likh sakte he jo he (a) basic fat arrow (b) fat arrow with one param (c)fat arrow with iimplicit return

// functions - js me functions normal programming language jese nahi he , iska matlub hai yaha par js me functions banane ke lie type nahi btana padta he or ap use koi bhi nam deke bna sakte ho
// jese java me btana padta he na int void ki fucntion kya return krega int ya void
// js me function first class ka darja dia gya he jiska matlab he ki js me functions ko value/ variable ki trha treat kia ja sakta hai

//what is function
// koi esa code jo apko bar bar use karna heo ya fir koi esa code jisko turant na chalana ho par kabhi chalana ho use function me dal sakte he 

function webdev(){
    console.log("Learn Js");
    console.log("Learn React");
    console.log("Learn MongoDb");
    console.log("Learn Node");
    console.log("You are ready to create a web");
}
webdev();

// why we need
// to resuse code and wrap the code which we want to run in future at some point of time

// how to use 
function abcd(){your code}

//extras we should know 
// parameters and arguments
/*
supose hamne function bnaya then function ko chaltae waqt hum koi bhi value ko bhej akte he jese yaha 12 bheja or function bhi bhej sakte he 
yaha (val) ye ek varuiable he or yaha hum ise parameetar kahte he 
function abcd(val){
}
abcd(12);
abcd(b())
or yaha ye jo 12 bheja he wo argument ho gya
// to kahne ka matlub ye he ki jab hum function define krte waqt parametar bante he or jab use run karte he us time hum un parameetar me argumets ko pass kar sakte he 
*/ 
/*
preap for interview
1.) function statement 
function abcd(){
    // function statement
}

2.) function expression
var abcd = function(){
    // function expression
}

3.) anonymous function
function(){
    // anonymous function
}
*/