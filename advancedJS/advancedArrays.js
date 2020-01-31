// advanced arrays

var array = [1,2,3,4];

// const double = [];
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// });
//
// console.log('forEach',double);

// map filter reduce

const mapArry = array.map(num => num * 2);

console.log('map',mapArry);

// filter

const filterArray = array.filter(num => num > 5);

console.log('filer',filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduce', reduceArray)