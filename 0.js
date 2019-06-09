// 0
var result = (function (a) {
    return a * a;
}(5.5));
console.log(result); //output 30.25
// result is IIFE, so it`s immediately invoked after declaration. 5.5*5.5 is 30.25.