
function functionReturningfunction(){
    // what function is returning we assign this function to the variable then the return this is the initializer for that variable
    // but we need to assign called function
    return function returningfunction(a) {
        console.log(a);
    }
}

functionReturningfunction('bty')

let newfun = functionReturningfunction()
// now this newfun is a function
console.log(newfun);
newfun('hi')






// example 2
function abc() {
    return 'harshu padit ji'
}
let abcd = abc()
console.log(abcd);


