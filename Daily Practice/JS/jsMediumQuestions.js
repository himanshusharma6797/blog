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
// toArray({ a: 1, b: 2 }) 
// ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) 
// ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) 
// ➞ []
// Notes
// Return an empty array if the object is empty.



// return unique values from the array
// let arry = [1, 1, 2, 1, 3, 3, 4, 3, 5];
// console.log(arry);

// let uniqValues = [...new Set(arry)]
// using spread because it will get the values in set object to converting it into the array
// console.log("Unique values from array",uniqValues);
// new Set(array) is a Set containing all the values in array, which duplicates necessorily removed. Then the spread operator just converts this back into an array

// return duplicate values from the array
// let arry2 = [1, 1, 2, 1, 3, 3, 1, 3, 4, 3, 2, 5];
// let findDuplicate = (array) => array.filter((item,index)=>array.indexOf(item) != index)
// console.log("duplicate elements",[...new Set(findDuplicate(arry2))]);
// let ar = arry2.sort((a,b)=>{return a-b})
// let array3 = []

// for (let i = 0; i < ar.length; i++) {
//         if (ar[i+1]===ar[i]){
//             array3.push(ar[i])
//         }
// }
// console.log("duplicate elements",array3);


// let strArray = [ "q", "w", "w", "w", "w", "w", "e", "i", "u", "r"];
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

// console.log(strArray.indexOf("w"));
// console.log(findDuplicates(strArray)) // All duplicates
// console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates



// 15 August medium question 
// question 1
// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// function arrayOfMultiples(firstElement, lengthOfArray){
//     let result = [];
//     let incEle = 0;
//     for (let i = 0; i < lengthOfArray; i++) {
//         incEle += firstElement
//         result.push(incEle)
//     }
//     console.log(result);
// }

// Examples
// arrayOfMultiples(7, 5) 
// ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) 
// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) 
// ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.


// questin 2
// Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

// let secondLargest = (arr) => {
//     arr.sort((a,b)=>b-a)
//     console.log(arr[1]);
// }
// Examples
// secondLargest([10, 40, 30, 20, 50]) 
// ➞ 40

// secondLargest([25, 143, 89, 13, 105]) 
// ➞ 105

// secondLargest([54, 23, 11, 17, 10]) 
// ➞ 23
// Notes
// There will be at least two numbers in the array.


// question 3
// Fix the Error: Value vs. Reference Types
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// To solve this question, your friend writes the following code:

// approach 1
// function checkEquals(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     // If all elements were same.
//     return true
// }

// approach 2
// or we can conver it into string
// function checkEquals(arr1, arr2) {
//     return arr1.toString() === arr2.toString()
// or use join()
// return arr1.join(",") === arr2.join(",")
// }
// approach 3
// using every method
// function checkEquals(arr1, arr2) {
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     return arr1.every((val)=>arr2.includes(val))
// }
// But testing the code, you see that something is not quite right. Running the code yields the following results:

// console.log(checkEquals([1, 2], [1, 3])
// );
// ➞ false
// Good so far...

// console.log(checkEquals([1, 2], [1, 2])
// );
// ➞ false
// Yikes! What happened?
// Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:

// Examples
// console.log(checkEquals([1, 2], [1, 3]));
// ➞ false

// console.log(checkEquals([1, 2], [1, 2]));
// ➞ true

// console.log(checkEquals([4, 5, 6], [4, 5, 6, 4]));
// ➞ false

// console.log(checkEquals([4, 7, 6], [4, 5, 6]));
// ➞ false

// console.log(checkEquals([4, 7, 6], [4, 6, 7]));
// ➞ true
// Notes
// Hint: This has to do with value vs. reference types.


// question 4
// Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr2.push(arr[i][j]);
//     }
//   }
//   console.log(arr2);
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
// flatten([[1, 2], [3, 4]])
//  ➞ []
// Expected: [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]])
//  ➞ []
// Expected: ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]])
//  ➞ []
// Expected: [true, false, false, false]


// 16 August
// problem 1
// Find the Bugs: Returning Valid Prices
// There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.

// The return value should be a Boolean.
// function hasValidPrice(obja) {
//     // converting object into an array
//     if (obja) {
//         const propertyValues = Object.values(obja);
//         if (propertyValues[1] >= 0 && (typeof propertyValues[1])==='number') {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }else{
//         console.log(false);
//     }
// }

// // Examples
// hasValidPrice({ "product": "Milk", price: 1.50 })
// // ➞ true

// hasValidPrice({ "product": "Cheese", price: -1 })
// // ➞ false

// hasValidPrice({ "product": "Eggs", price: 0 })
// // ➞ true

// hasValidPrice({ "product": "Cereals", price: "3.0" })
// // ➞ false

// hasValidPrice()
// // ➞ false


// problem 2
// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// function clone(arr){
//     let newArr = arr
//     console.log(newArr);
//     newArr.push(arr.slice())
//     console.log(newArr);

//     // wrong way we will get this => <ref *1> [ 1, 1, [Circular *1], [ 1, 1, [Circular *1] ] ] so always use .slice it will get inserted proper element not making referance
//     // newArr.push(arr)
//     // console.log(arr);
// }
// // Examples
// clone([1, 1]) 
// // ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) 
// // ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) 
// // ➞ ["x", "y", ["x", "y"]]


// problem 3
// Modular Arithmetic (Part #1)
// Modify the inefficient code in the Code tab so it can pass the tests.
// let mod = (base, exp, k) => {
//     console.log((base**(2**exp)) % k);
// } 

// // Examples
// // mod(base, exp, k) 
// // ➞ (base**(2**exp)) % k

// mod(10, 1, 99 ) 
// // ➞ 1

// mod(3, 2, 15 ) 
// // ➞ 6

// mod(123, 20, 1234 ) 
// ➞ 391
// Notes
// Try using loops.

