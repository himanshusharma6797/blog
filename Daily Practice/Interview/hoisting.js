
// Hoisting
// Hoisting is the phenomenon in the JS by which we can access these variable and the function even before we have initialize it

// hoisting is only working with simple function and var not for arrow function
// in arrow function that function will behave like variable 
// and it will allocate the memory with the placeholder undefined

console.log('var',x);
// console.log('let',y);

var x = 1
let y = 1

if (true) {
    var a = 1
    let b = 1
}
console.log('a',a);
console.log('b',b);