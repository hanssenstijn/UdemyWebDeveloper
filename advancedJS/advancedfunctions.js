const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures --> childern always have acces to their parents scope, but not the other way around

// Currying --> function inside a function
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

// Compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum,sum)(5);

// Avoiding side effects, functional purity
var a = 1;
function b() {
    a = 2;
}

