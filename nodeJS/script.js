const largeNumber = require('./script2.js');

const a = 11;
const b = 5;
const c = largeNumber;
console.log(__dirname);
console.log(c);

// timout is in miliseconds
setTimeout(() => {
    console.log(a + b);
}, 2000);
// import modules
// fs for reading files and doing things with it
// const d = require('fs');
// console.log(d);

// const e = require('http');
// console.log(e);

// const f = require('nodemon');
// console.log(e);
