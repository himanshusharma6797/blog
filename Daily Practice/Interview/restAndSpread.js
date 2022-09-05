// 
function abc(a,b) {
    console.log(a+b);    
}

// if there is two argument in the function and we pass a single array then it will take as a one argument as a bunch and the other argument will undefined
let ab = [2,5]
abc(ab)
// so we use spread operator
abc(...ab)


// this is rest operator we passing throw as an declation parameter
function restOp(...args) {
    // rest os help to bunch them
    console.log(args);
    let sum = 0;
    for (const iterator of args) {
        sum+=iterator
    }
    console.log(sum);
}

restOp(3,5,46,7,8)