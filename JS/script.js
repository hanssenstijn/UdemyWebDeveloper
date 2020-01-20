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

sing("La la");
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

// array
var list = ["tiger","cat","bear","bird"];
console.log(list[1]);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// remove first item
console.log(array.shift());
// sort array
console.log(array.sort())
// add kiwi at the end
console.log(array.concat(["Kiwi"]))

// object
var user = {
    name: "john",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra","boom"]
};
// asses an atribute
console.log(user.age);
// add infromation
user.favouriteFood = "spinach";
console.log(user.favouriteFood);

var database = [
    {
        username: "stijn",
        password: "secret"
    },
    {
        username: "hans",
        password: "123"
    },
    {
        username: "jan",
        password: "777"
    },
];

var newFeed = [
    {
        username: "bob",
        timeline: "tired"
    },
    {
        username: "sal",
        timeline: "JS"
    }
];

var usernamePrompt = prompt("your username");
var passwordPrompt = prompt("your password");

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    console.log(isUserValid(user,pass));
    // if (user === database[0].username && pass === database[0].password) {
    //     console.log(newFeed);
    // } else {
    //     alert("wrong")
    // }
}

signIn(usernamePrompt,passwordPrompt);

function newfunction(){
    console.log("yo")
}
// this example need a semicolon at the end
var newfunction = function() {

};

// expresion
1+3;
var a =2;

// differene function and method
function thisisafunction(){

};

var obj = {
    thisisamethod: function () {

    }
};

// difference in assesing
thisisafunction();
// using the dot (.) for the method
obj.thisisamethod();

//for loop
var todos = [
    "clean room",
    "brush teeth",
    "exerise",
    "study JS",
    "eat healthy"
];
var todoslength = todos.length;
for (var i=0; i < todoslength; i++) {
    todos.pop();
}

// while loop
var counterOne = 0;
while(counterOne < 4){
    console.log(counterOne);
    counterOne++
}

// do
var countertwo = 10;
do {
    console.log(countertwo);
    countertwo--;
} while (countertwo > 10);

