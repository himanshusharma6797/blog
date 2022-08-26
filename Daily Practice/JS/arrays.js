// splice
// let anArr =['1','2','3','4','5','7'];
// let anUpdatedArray = anArr.splice(1,3)
// console.log(anUpdatedArray);
// console.log(anArr);

// array are mutable arrays can be change
// console.log(typeof anArr);
// type of array is also an object in javascript

// let anArrowFunction=()=>{
// }
// // console.log(typeof anArrowFunction);
// function aFunction(){
// }
// // console.log(typeof aFunction);

// // print all the element of array by the for loop
// for (let index = 0; index < anArr.length; index++) {
//     // console.log(anArr[index]);
    
// }

// const newArr =['1','2','3','4','5','7'];
// // in const array we can still changes the element in Array
// newArr.push("8")
// console.log(newArr);



// for each
// foreach is a method for array and it takes callback function
// and in the callback function it takes three arguments first is elements
// const newArr =['1','2','3','4','5','7'];
// newArr.forEach((elementOfArray,indexNumber,arrayString)=>{
//     console.log("Element of the array",elementOfArray);
//     console.log("Index Number of the array",indexNumber);
//     console.log("Convert array into the string",arrayString);
// });

// Array.From
// making array of the string
// let anArrr = "Himanshu"
// let arr = Array.from(anArrr);
// console.log(arr);

// for(let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log('ele',i);
//     console.log(arr[i]);
// }

// map
// map returns a new array but forEach does not reurning the new array
// const newArr =['1','2','3','4','5','7'];
// newArr.map((ele,ind,arrStr)=>
// {
//     console.log("Map Element of the array",ele);
//     console.log("Map Index Number of the array",ind);
//     console.log("Map Convert array into the string",arrStr);
// })

// let arraaa = [123,56,567,45,23,345,567,7,34436,56756,5,565,6,56,3]

// let newArrraaa = arraaa.filter((e)=>{
//     return e < 100
//     // if filter returning true then those value can insert in the new array
// })
// console.log(newArrraaa);

// reduce method
// const newArr2 =[1,2,3,4,5,7];
// let returnReduce = newArr2.reduce((preVal,currVal,index,arrStrs)=>{
//     console.log("previous value",preVal);
//     console.log("current value",currVal);
//     console.log("Index",index);
//     console.log("array",arrStrs);
//     return preVal+currVal
// })
// console.log(returnReduce);

// object inside an array
// let ar = [a={him:"king",brim:"chamundaye"},b={himmy:"kingy",brimy:"chamunday"}]
// console.log("object inside an array",ar[0].him);
// let arrrrrr = [{him:"king",brim:"chamundaye"},{himmy:"kingy",brimy:"chamunday"}]
// console.log("object inside an array 2",ar[0].him);


// Array destructuring
// Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

// Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. When destructuring an array, we use their positions (or index) in an assignment.

// Let us try to understand the array destructuring by using some illustrations:

// Example
// var arr = ["Hello", "World"]  
  
// // destructuring assignment  
// var [first, second] = arr;  
  
// console.log('first',first); // Hello  
// console.log('second',second); // World  
// In the above example, the left-hand side of destructuring assignment is for defining what values are required to unpack from sourced variable.



// Output

// Hello
// World
// Let us take another example of array destructuring by rest operator.

// Example
// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// // destructuring assignment  
// var[color1, color2, ...color3Rest] = colors;  
  
// console.log('color1',color1); // Violet  
// console.log('color2',color2); // Indigo  
// console.log('color3Rest',color3Rest); // Blue  
// Output

// Violet
// Indigo
// Blue
// Example
// If you want to choose random elements from the given array then in array destructuring you can perform it as follows:

// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// // destructuring assignment  
// var[color1, color3, , , ,color6] = colors; //Leave space for unpick elements by , , ,
// console.log('color1',color1); // Violet  
// console.log('color3',color3); // Blue  
// console.log('color6',color6); // Yellow  



// JavaScript Computed Property
// ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object. For example:

// let propName = 'c';
// we can compute values directly with the variables but for properties use variable inside the [variable name] 

// const rank = {
//   a: 1,
//   b: 2,
//   [propName]: 3,        // this is computed property 
// };

// console.log(rank.c); // 3


// object spread Operator
// In ES6, you use the spread operator (...) to unpack elements of an array. The spread operator can be very useful to clone an array. For example:

// example
// let 
// beta = {
//     "Londe ka naam":'himanshu',
//     "Londe ki age":25,
//     krniHai:'shadi'
// },
// beti = {
//     "Ladki ka naam":'pushpa',
//     "Ladki ki age":22,
//     krniHai:'shadiii'
// },
// jodi = {
//     ...beta,
//     ...beti
//     // here object properties will mearge and if the same properties will exist then the last spread object will replace the properties 
// }
// console.log(jodi);



// object destructuring which assigns properties of an object to individual variables.
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     currentAge: 28
// };
// // the variable name must be same if we want to use as an variable
// let { firstName, lastName, middleName = 'kumar', currentAge: age = 18 } = person;

// console.log(firstName);
// console.log(middleName); // ''
// console.log(lastName);
// console.log(age); // 28


// Hoisting
// Hoisting is the phenomenon in the JS by which we can access these variable and the function even before we have initialize it
