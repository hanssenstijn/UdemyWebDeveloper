function isUserValid(bool) {
    return bool;
}

// condition ? expr1 : expr2
var answer = isUserValid(true) ? "You may enter" : "Acces Denied";

var automatedanswer = "your account number is" + (isUserValid(false) ? "1234" : "not for you");

// same as the above line
function condition() {
    if (isUserValid(true)) {
        return "you may enter"
    } else {
        return "Access denied"
    }
}

var answer2 = condition();

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run ino a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
