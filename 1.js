// 1
const b = [1, 2, 3];
const f = (a, ...b) => a + b;
console.log(f(1)); // output 1
// b is undefined in console.log, therefore it outputs 1.