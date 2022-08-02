"use strict"
// write a js function to reverse an array
// let arr=[4,5,6,3];
// let reverse = (arr)=>{
//   let arr2=[]
//   for(let i = 0; i < arr.length ; i++){
//     arr2.unshift(arr[i])
//   }
//   console.log(arr2);
// }
// reverse(arr);



// write a js function to remove duplicate from an arrar
let arr3=[3,7,4,4,5,5,6,3];
// other way to doing this
// console.log([...new Set(arr3)])
let arr4=[];
function removeDuplicate(){
  for(let i=0; i < arr3.length; i++){
    let str = arr3[i];
    if(arr4.indexOf(str)==-1){
      arr4.push(str)
    }
  }
  console.log(arr4);
}
removeDuplicate()



// write a js function to sum an array
// let arr5=[4,4,5,5,6,3];
// let totalSum = 0;
// function sum(){
//   for(let i =0;i<arr5.length;i++){
    // totalSum += arr5[i]
    // totalSum = totalSum + arr5[i]
//   }
//   console.log(totalSum);
// }
// sum()



var a=5