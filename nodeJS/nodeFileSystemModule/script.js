const fs = require('fs');

// first param is the path to the file
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('err');
    }
    // add message to the code
    console.log('1', data.toString('utf8'));
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());
// if the text file didnot exist it would have been created
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// });

// delete
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Inception')
// })
