// for (let i = 0; i < 10; i++) {
//     setTimeout( function(){
//         console.log('let'+i);
//     }, 1000);
// }
// let is function scope so it will run 1 - 9

// for (var i = 0; i < 10; i++) {
//     console.log('befor setTimeout'+i);
//     setTimeout( function(){
//         console.log('var'+i);
//     }, 1000);
//     console.log('after setTimeout'+i);
// }
// var is globle scope so the output will be 10

// how to achieve this product(4)(5)
// function product(x) {
//     return function (y) {
//         console.log(x*y);
//     }
// }
// product(4)(5);
// output is 20

// closur
// function init() {
//     var name = 'Himanshu';
//     function displayName() {
//         name = 'Sharma';
//         console.log('inner', name);
//     }
//     console.log('outer', name);
//     displayName();
// }
// init();
// function init2() {
//     var name = 'Himanshu';
//     function displayName2() {
//         name = 'Sharma';
//         console.log('inner', name);
//     }
//     console.log('outer', name);
//     displayName2();
// }
// init2();

// console.log('Script start');
// setTimeout(()=>{
//     console.log('setTimeOut');
// },0)
// Promise.resolve().then(function () {
//     console.log('Promise 1');
// }).then(function () {
//     console.log('Promise 2');
// })
// console.log('Script end');

// React is a one way data binding

// Redux is a javascript library
// prop drilling - when you pass data to child we get some problem then to avoid this we use redux lib

// switch
// let weekend = "Saturday";
// switch(weekend){
//     case "Monday":
//     console.log("Monday");
//     break;
//     case "Tuesday":
//     console.log("Tuesday");
//     break;
//     case "Wednesday":
//     console.log("Wednesday");
//     break;
//     case "Thursday":
//     console.log("Thursday");
//     break;
//     case "Friday":
//     console.log("Friday");
//     break;
//     case "Saturday":
//     console.log("Saturday");
//     case "Sunday":
//     console.log("Sunday");
//     break;
//     default:
//         console.log("wrong value");
// }

// object destructuring
// let obja = {
//     name: 'Himanshu',
//     phoneNumber: 8445228334
// }
// let {name, phoneNumber} = obja

// console.log(name);
// console.log(phoneNumber);

// array destructuring
// let arr = ['Apple', 'boy', 'cat'];
// let [a, b, c] = arr
// console.log(a);
// console.log(b);
// console.log(c);


// neasted destructuring
// let arrOfObjs=[
//     {name:'harshu',age:25},
//     {name:'charshu',age:5},
//     {name:'tarshu',age:15},
//     {name:'garshu',age:35},
// ]

// let [{name:meraName},,,{age}]=arrOfObjs;
// // we can change the variable name for object by {name:meraName}
// console.log(obja1);


// Callbacks
// const userLeft = false;
// const userWatchingCatMeme = false;

// function callbackTutorialCallbacks(callback, errorCallback){
//     if (userLeft) {
//         errorCallback({
//             name: "User Left",
//             message: ":("
//         })
//     }else if (userWatchingCatMeme) {
//         errorCallback({
//             name: "User Watching Cat Meme",
//             message: "WebDevSimplified < Cat"
//         })
//     } else {
//         callback('Thums up and Subscribe')
//     }
// }

// callbackTutorialCallbacks((message)=>{
//     console.log("success: "+message);
// },(error)=>{
//     console.log(error.name + " "+ error.message);
// })

// Promises
// let pro = new Promise((resolve,reject)=>{
//     let two = 1 + 2;
//     if (two === 2) {
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// });

// pro.then((message)=>{
//     console.log("This is in then " + message);
// }).catch((message)=>{
//     console.log("This is in catch " + message);
// })

// const userLeft = false;
// const userWatchingCatMeme = false;

// function callbackTutorialPromis(){
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: "User Left",
//                 message: ":("
//             });
//         }else if (userWatchingCatMeme) {
//             reject({
//                 name: "User Watching Cat Meme",
//                 message: "WebDevSimplified < Cat"
//             });
//         } else {
//             resolve('Thums up and Subscribe');
//         }
//     });
// };

// callbackTutorialPromis().then((message)=>{
//     console.log("success: "+message);
// }).catch((error)=>{
//     console.log(error.name + " "+ error.message);
// });



// Rest
// function restOperator(...rest){
//     let a = 0;
//     for (const iterator of rest) {
//         a += iterator;
//     }
//     console.log(a);
// }

// restOperator(1,2,3,4,5,6,7,8,9);




// this refers the lexical
// var a = 10;
// function fun() {
//   var a = 3;
//   console.log(this.a);
// }
// fun();


// JavaScript Closures
// Remember self-invoking functions? What does this function do?
// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// function expression is to same function as an variable
let functionExpression = function(){
    console.log("this is function expression");
}
functionExpression()


// if we want to return in arrow function then it will be esily by the one line of code we dont need to write the return it will use for multiple line of code for the function.