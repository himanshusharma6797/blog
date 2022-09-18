function outer() {
    let x = 7;
    function inner() {
        console.log(x);
    }
    // here not only the function returns also the closure return with it lexical environment
    return inner
    // after returns they still maintain there lexical scope insted outer function is removed from the GEC the inner function remember there lexical scope where it came from

    // this syntax is also same
    // x = 100
    // if we put x = 100 then it takes last referencing value
    // return function inner() {
    //     console.log(x);
    // }
}

let a = outer()

console.log(a);
a()



// another example
function x(){
    let a = 'bahar wala lexical scope jo bundal bnega grand child function k sath'
    function y(){
        let b = 'ander wala lexical scope jo bundal bnega child function k sath'
        function z() {
            console.log(a);
            console.log(b);
        }
        z();
    }
    y()
}
x()



// curring
function sum(a){
    return function (b) {
        console.log('sum',a+b);
    }
}
sum(5)(6)