// declare and define function; needs parameter set inside 
function test(a) {
    console.log(a);
}

test(true);

const x = "String";

test(x)

const y = 98
test(y);

const z = true
test(z)

function add(x, y) {
    console.log(x + y);
}

let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a, b);

function add(x, y) {
    return x + y;
}

const sum = add(4, 5);
console.log(sum);

function calc() {
    const sum = add(4, 5);
    console.log(sum)
}

calc();