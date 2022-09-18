// Async Js
// something is going on but we dont wait for that thing is done

let thePromis = new Promise((resolve, reject) => {
    let num = 2;
    if (num===2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

thePromis.then((message)=>{
    console.log("then", message);
}).catch((message)=>{
    console.log("catch", message);
}).finally(()=>{
    console.log("Finally");
})

// promises vs callbacks
// To implement asynchronous code in JavaScript we use callback functions and promises. A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.