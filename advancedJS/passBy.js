var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

let obj1 = {name: "Yao", password: '1234'};
let obj2 = obj1;

// both object will be adjusted in password
obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2);

var c = [1,2,3,4];
var d = c;
d.push(123);
console.log(d);

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clonse2 = {...obj};

obj.c = 5;
console.log(clone);
console.log(clonse2);

