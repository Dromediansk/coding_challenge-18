var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x);
})();
// output is undefined and 10, IIFE logs first x, which is not defined inside function, than it`s declared inside of function and logs 10.