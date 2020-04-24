var greeting;

function greeting() {
    console.log("Hello!");
}

// basically, a no-op
var greeting;

console.log(typeof greeting);        // "function"

var greeting = "Hello!";

console.log(typeof greeting);        // "string"