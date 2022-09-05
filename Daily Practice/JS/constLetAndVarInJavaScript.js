var b = 'var globally';
function varr(){
    var b = 'var block';
    console.log(b);
}
console.log(b);
// for both time the last one will be execute
// but not in Let

let a = 'let globally';
{
    let a = 'let blocked';
    console.log(a);
    // the "let blocked" will only be execute in the block because let is a block
}
console.log(a);



// var
// var xyz = 'king'
{
    var xyz = 'him'
}
console.log(xyz);
{
    console.log(xyz);
}

function nameee() {
    if (true) {
        var avar = 'aavar'
    }
    console.log(avar);
}
nameee()
// console.log(avar);