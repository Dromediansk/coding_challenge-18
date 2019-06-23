(function () {
    var a = b = 3;
})();

console.log(typeof a); // undefined, a is a value of b, which is not defined yet
console.log(typeof b); // Number - when function is invoked, value of b is already defined