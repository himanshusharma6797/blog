// splice
// let anArr =['1','2','3','4','5','7'];
// let anUpdatedArray = anArr.splice(2,3,33,44,55)
// console.log('anUpdatedArray',anUpdatedArray);
// console.log('anArr',anArr);

// for checking it is array or not then
// console.log(Array.isArray(anArr));
// console.log(Array.isArray(anUpdatedArray));

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
// or
// let arr = anArrr.split('')
// console.log(arr);

// for(let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log('ele',i);
//     console.log(arr[i]);
// }

// map
// map returns a new array but forEach returning undefine
// return is necessory in the map otherwise it will return the undefine
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

// const anArr = [
//     {mobile:'a',price:10},
//     {mobile:'b',price:30},
//     {mobile:'c',price:50},
//     {mobile:'d',price:70},
// ]
// let totalPrice = anArr.reduce((pre,curr)=>{
//         console.log("previous value",pre.price);
//         console.log("current value",curr.price);
//         return pre.price + curr.price
// },0)
// // we can set the previous value by the second argumnet what we want to set from the start otherwise it takes first element of the array
// console.log(totalPrice);

// object inside an array
// let ar = [a={him:"king",brim:"chamundaye"},b={himmy:"kingy",brimy:"chamunday"}]
// console.log("object inside an array",ar[0].him);
// console.log("object inside an array",ar.indexOf(b));
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






// find method
// const anArr = [
//     { user: 1, mobile: 'a', price: 10 },
//     { user: 2, mobile: 'b', price: 30 },
//     { user: 3, mobile: 'c', price: 50 },
//     { user: 4, mobile: 'd', price: 70 },
// ]

// // find will return from the first occurence
// let findUser = anArr.find((users,index,obja)=>{
//     // console.log('user',users);  // this will return particular object or aaray element
//     // console.log('index',index); // index
//     // console.log('obja',obja);   // this will return whole object or aaray
//     return users.user === 2
// })

// console.log(findUser);


// every
// // every returns boolean value
// // its cheack for all elements
// // if condition is true for all elements it will return true but if its false for only single elemnet then it will return false
// let anArr = [2,4,6,9,8];
// let ans = anArr.every((value,ind,arr)=>{
//     console.log(value);
//     // console.log(ind);
//     // console.log(arr);
//     return value%2===0
// })

// console.log(ans);

// realistic example of every
// const anArr = [
//     { user: 1, mobile: 'a', price: 10 },
//     { user: 2, mobile: 'b', price: 30 },
//     { user: 3, mobile: 'c', price: 50 },
//     { user: 4, mobile: 'd', price: 70 },
// ]

// let checkPrice=(arr)=>{
//     let result = arr.every((val)=>val.price<100)
//     if (result) {
//         return 'Prices are lower then 100'
//     }
//     return 'Prices too High!'
// }
// let res = checkPrice(anArr)
// console.log(res);



// some method
// check for single element
// if condition is true for single element it will return true
// let number = [2,4,56,7,8];

// let result = number.some((value)=>value%2===1);
// console.log(result);

// realistic example of some
// const anArr = [
//     { user: 1, mobile: 'a', price: 10 },
//     { user: 2, mobile: 'b', price: 30 },
//     { user: 3, mobile: 'c', price: 50 },
//     { user: 4, mobile: 'd', price: 170 },
// ]
// // here we are checking that is there any price greater then 100
// let res = anArr.some((val)=>val.price>100)
// console.log(res);



// fill method
// value, start, end

// // let newArray = new Array(10)
// // filling empty items array by fill method
// let newArray = new Array(10).fill('Antony')
// console.log(newArray);

// // another exaple
// let anArray = [1,2,3,4,5,6,7,8,9]
// anArray.fill(7,2,5)
// console.log(anArray);