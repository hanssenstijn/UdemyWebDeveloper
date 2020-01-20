function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}

sing("la la");
sing("Yo yo");

// a and b are here the parameters
function multiply(a,b) {
    // check what the function does
    console.log(a,b);
    // use return to get the output
    return a * b;
}
// 2 and 4 are arguments
multiply(2,4);

