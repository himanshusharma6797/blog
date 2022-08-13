// splice
let anArr =['1','2','3','4','5','7'];
let anUpdatedArray = anArr.splice(1,3)
// console.log(anUpdatedArray);
// console.log(anArr);

// array are mutable arrays can be change
// console.log(typeof anArr);
// type of array is also an object in javascript

let anArrowFunction=()=>{
}
// console.log(typeof anArrowFunction);
function aFunction(){
}
// console.log(typeof aFunction);

// print all the element of array by the for loop
for (let index = 0; index < anArr.length; index++) {
    // console.log(anArr[index]);
    
}

const newArr =['1','2','3','4','5','7'];
// in const array we can still changes the element in Array
newArr.push("8")
// console.log(newArr);



// for each
// foreach is a method for array and it takes callback function
// and in the callback function it takes three arguments first is elements
newArr.forEach((elementOfArray,indexNumber,arrayString)=>{
    console.log("Element of the array",elementOfArray);
    console.log("Index Number of the array",indexNumber);
    console.log("Convert array into the string",arrayString);
});

// Array.From
// making array of the string
let anArrr = "Himanshu"
let arr = Array.from(anArrr);
console.log(arr);

for(let i of arr){
    console.log(i);
}
for(let i in arr){
    console.log('ele',i);
    console.log(arr[i]);
}