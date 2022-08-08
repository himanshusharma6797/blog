// splice
let anArr =['1','2','3','4','5','7'];
let anUpdatedArray = anArr.splice(1,3)
console.log(anUpdatedArray);
console.log(anArr);

// array are mutable arrays can be change
console.log(typeof anArr);
// type of array is also an object in javascript

let anArrowFunction=()=>{
}
console.log(typeof anArrowFunction);
function aFunction(){
}
console.log(typeof aFunction);

// print all the element of array by the for loop
for (let index = 0; index < anArr.length; index++) {
    console.log(anArr[index]);
    
}