// Callback function is a function that is passed to another function as an argument and that particular function will executed later in the program.
// when we passing function as an argument then we don't use brackets
function abc(call) {
    call();
}

function one() {
    console.log("Function one");
}
function two() {
    console.log("Function two");
}
function three() {
    console.log("Function three");
}

// setTimeout(one(),3000); // if we use the brackets then the function is executing without taking the time out
setTimeout(one,2000);
two();
three();

function person(friend, functionName) {
    setTimeout(() => {
        console.log("My cousin name is "+ friend);
        functionName();
    }, 3000);
}

function person2() {
    console.log("My name is Himansu Shamra");
    // this is callback function
}

person("Munnu", person2)