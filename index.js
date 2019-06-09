// 0
var result = (function (a) {
    return a * a;
}(5.5));
console.log(result); //output 30.25
// result is IIFE, so it`s immediately invoked after declaration. 5.5*5.5 is 30.25.

// 1
const b = [1, 2, 3];
const f = (a, ...b) => a + b;
console.log(f(1)); // output 1
// b is undefined in console.log, therefore it outputs 1.

// 2
let f = (...f) => f;
console.log(f(10)); // output [10], f is a name for array

f = (...f) => f.reduce(f => f);
console.log(f(10));

function ff() {
    return arguments;
}
console.log(ff(10));

f = f => f;
console.log(f(10));