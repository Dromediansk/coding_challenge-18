const a = {},
    b = { c: 'b' },
    c = { b: 'c' };

a[b] = 111;
a[c] = 333;

console.log(a[b]); // returns 333, b is c, which is defined in last line.