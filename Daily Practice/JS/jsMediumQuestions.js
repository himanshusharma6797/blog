// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// const countTrue=(array)=>{
//     let count = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]===true) {
//             count+=1;
//         }
//     }
//     console.log(count);
// }

// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])



// All About Anonymous Functions: Adding Suffixes
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

// const add_suffix=(a)=>{
//     return let =(b)=>{
//         return console.log(b+a);
//     }
// }

// add_ly = add_suffix("ly")

// add_ly("hopeless")
// //  ➞ "hopelessly"
// add_ly("total")
// //  ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear")
// //  ➞ "fearless"
// add_less("ruth")
// //  ➞ "ruthless"


// 9 august 4 questions
// question 1
// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) 
// ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) 
// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) 
// ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples(num, length){
//     let anArray = []
//     for (let index = 1; index < length+1; index++) {
//         anArray.push(num*index)
//     }
//     return console.log(anArray);
// }

// If we use arrow function then Cannot access 'arrayOfMultiples' before initialization

// question 2
// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// const keysAndValues =(obja)=>{
//     let keys = [];
//     let values = [];
//     for (const key in obja) {
//         keys.push(key)
//         values.push(obja[key])
//     }
//     return console.log([keys,values]);
// }

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.


// question 3
// Square Every Digit
// Create a function that squares every digit of a number.

// let squareDigits =(digit)=>{
//     let makeStr = digit.toString();
//     let output = [];
//     for (let index = 0; index < makeStr.length; index++) {
//         output.push(makeStr[index]*makeStr[index])
//     }
//     console.log(output.join(""));
//     console.log(typeof +output);
// }

// Examples
// squareDigits(9119) 
// ➞ 811181

// squareDigits(2483) 
// ➞ 416649

// squareDigits(3212) 
// ➞ 9414
// Notes
// The function receives an integer and must return an integer.



// question 4
// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// const clone = (arr) => {
//     let cloneArray = [...arr, [...arr]]
//     return console.log(cloneArray);
// }

// Examples
// clone([1, 1]) 
// ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) 
// ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) 
// ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A


// 11 august
// question 1
// Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// function addName(obj,key,val){
//     obj[key]=val
//     console.log(obj);
// }

// Examples
// addName({}, "Brutus", 300) 
// ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) 
// ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) 
// ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.

// question 2
// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// function num_of_digits(digits){
//     let length = String(digits).split("").length
//     console.log(length);
// }

// Examples
// num_of_digits(1000) 
// ➞ 4

// num_of_digits(12) 
// ➞ 2

// num_of_digits(1305981031) 
// ➞ 10

// num_of_digits(0) 
// ➞ 1
// Notes
// Try to solve this challenge without using strings!


// question 3
// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// const gen = {
// 	"-3": ["great grandfather",	"great grandmother"],
// 	"-2": ["grandfather","grandmother"],
// 	"-1":["father",	"mother"],
// 	"0": ["me!", "me!"],
// 	"1":["son",	"daughter"],
// 	"2"	:["grandson","granddaughter"],
// 	"3" :["great grandson","great granddaughter"]
// }
// function generation(x, y) {
// 	return console.log(y=="m"?gen[x][0]:gen[x][1]);
// }
// Examples
// generation(2, "f")
// ➞ "granddaughter"

// generation(-3, "m") 
// ➞ "great grandfather"

// generation(1, "f") 
// ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	            Female
// -3	        great grandfather	great grandmother
// -2	        grandfather	        grandmother
// -1	        father	            mother
// 0	        me!	                me!
// 1	        son	                daughter
// 2	        grandson	        granddaughter
// 3	        great grandson	    great granddaughter





















// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// function toArray(object){
//     let anArry = [];
//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//             const keys = object[key];
//         }
//     }
// }
// Examples
toArray({ a: 1, b: 2 }) 
// ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) 
// ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) 
// ➞ []
// Notes
// Return an empty array if the object is empty.