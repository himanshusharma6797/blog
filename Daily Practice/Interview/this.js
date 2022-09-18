console.log('global',this);
function namee() {
    console.log('function',this);
}
namee()

let arrowFunction = () => {
    console.log('arrow funtion',this);
}

arrowFunction()