// 3
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar); // output 11, bar is rewritten in IIFE function, because it`s not declared with var constant and foo is declared in global scope.