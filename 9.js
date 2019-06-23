for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
} // logs 8 immediately
// logs 5 every second 5times

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000); // unexpected end of input