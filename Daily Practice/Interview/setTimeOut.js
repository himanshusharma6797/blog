// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// setTimeout(() => {
//     console.log(3);
// }, 0);

// console.log(4);



function x() {
    let j = 5;
    setTimeout(() => {
        console.log(i);
        console.log(j);
    }, 1000);
    const i = 10;
}
// for i it will work and find from the lexical scoop
x()