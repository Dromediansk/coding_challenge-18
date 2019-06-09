// 2
let f = (...f) => f;
console.log(f(10)); // output [10], f is a name for array

f = (...f) => f.reduce(f => f);
console.log(f(10)); // output is 10, because reduce() accumulates f, which has only 1 value. 

function ff() {
    return arguments;
}
console.log(ff(10)); // output is array of arguments, which has only 1 property {'0': 10}

f = f => f;
console.log(f(10)); // output is 10, returns the value of f
