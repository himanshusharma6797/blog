// 1. Create a variable of type string and try to add a number to it?
// if we add in the string then it will concatenation occur
let num = "33"
console.log(parseInt(num)+7);

// 2. Use typeof to find the datatype of the string in last option?
console.log(typeof num);

// 3. Create a const object in javascript. can you change it to hold a number later?
const obja={
    // obja is the reference to this object
    // obja ne iss object k sath bhandan bhand liya hai
    lala:"harshu"
}
// obja = 7;
// it will getting the syntax error
console.log(obja);

// 4. Try to add a new key to the const object in problem 3 were you able to do it?
obja.newKey = "new"
console.log(obja);

// 5. Write a JS program to create a word-meaning dictionary of 5 words?

let wordMeaning={
    eruption:"the sudden occurrence of a violent discharge",
    remarkable:"unusual or striking",
    humility:"a lack of arrogance or false pride",
    distinctive:"of a feature that helps to identify a person or thing",
    suitable:"meant or adapted for an occasion or use"
}
console.log(wordMeaning.distinctive);
console.log(wordMeaning['eruption']);