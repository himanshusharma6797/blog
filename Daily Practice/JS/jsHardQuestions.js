// 11 august hard question
// problem 1
// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function sevenBoom(arr) {
//     for(let el of arr) {
//         if(el.toString().split('').includes('7')) {
//             return console.log("Boom!");
//         }
//     }
//     return console.log("there is no 7 in the array");
// }

// console.log(sevenBoom([2, 6, 7, 9, 3], "Boom!"))
// console.log(sevenBoom([33, 68, 400, 5], "there is no 7 in the array"))
// console.log(sevenBoom([86, 48, 100, 66], "there is no 7 in the array"))
// console.log(sevenBoom([76, 55, 44, 32], "Boom!"))
// console.log(sevenBoom([35, 4, 9, 37], "Boom!"));
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) 
// ➞ "Boom!"
// 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) 
// ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) 
// ➞ "Boom!"
// 97 contains the number seven.



// 15 august 
// question 1
// Tower of Hanoi
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// function towerHanoi(disc){
//     // let totalSteps = []
//     let steps = 1
//     // totalSteps.push(steps);
//     for (let i = 0; i < disc; i++) {
//         steps *= 2
//         // totalSteps.push(steps)
//     }
//     // console.log(totalSteps);
//     console.log(steps-1);
// }
// by formula
const towerHanoi = (n) => {
    let a =  (Math.pow(2, n)) - 1;
    console.log(a);
  };

// Examples
towerHanoi(3) 
// ➞ 7

towerHanoi(5) 
// ➞ 31

towerHanoi(0) 
// ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.