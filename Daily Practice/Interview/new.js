// const txt = '{"name":"John", "age":30, "city":"New York"}'
// deepcopy of object
// const obj = JSON.parse(JSON.stringify(txt)); 
// // const obj = JSON.parse(txt); 
// // const obj = JSON.(txt); 
// console.log(typeof obj.age)

// var x=2;
// var y=4;
// if ((y>x || y++ === 4)&& ++y ===5) {
//     x = 1
// }else{
//     x=4
// }
// console.log(x,y);

// var divs = document.getElementsByTagName('div');

// for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener("click", logEvent, false)    
// }

// function logEvent(){
//     console.log(this.id);
// }



// function f(x) {
//     x +=1
// }
// function g(x) {
//     x.value *= 5;
// }

// var a;
// var b = 1;
// var c = {value:2};
// var d = c;

// f(a);
// f(b);
// g(d);

// console.log(a, b, c.value, d.value);


// function foo(a,b,c){
//     a++;
//     b = "new string";
//     c["key"] = "new value";
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// var a = 1,
// b = "old string",
// c = {"key":"old value"}

// foo(a,b,c)

// personal.sh = function(){
//     alert(sender.FirstName);
// }
// personal.sh()

// console.log(typeof a);
// console.log(typeof b);

// function a() {
// }
// var b = function(){
// }

// console.log(false == 0);
// console.log(false === 0);
// console.log(false == '');
// console.log(false === '');
// console.log([1,2,3] == [1,2,3]);


// var a = ['ap', 'ban', 'coc']
// var b = a;
// var c = a.slice()
// let b = a.push('date')

// // console.log(b);
// console.log("c",c);
// console.log("a",a);
// console.log("b",b);


// var counter = (function(){
//     var myCounter = 0;
//     function changeBy(val) {
//         myCounter += val; 
//     }

//     return {
//         increment: function(){
//             changeBy(1)
//         },
//         decrement: function(){
//             changeBy(-1)
//         },
//         value: function(){
//             return myCounter;
//         }
//     };
// })();
// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());
// counter.changeBy(2);
// console.log(counter.value());


// (function setup(){
//     function handleClick(){
//         alert("Clicked");
//     }
// })()