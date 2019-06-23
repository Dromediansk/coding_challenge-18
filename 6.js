function foo1() {
    return {
        bar: 'bar',
    };
}

function foo2() {
    return
    {
        'bar';
    }
}

console.log(foo1()); // returns { bar: 'bar' }
console.log(foo2()); // returns undefined, because it`s not valid syntax for object