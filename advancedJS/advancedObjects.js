// reference type --> objects will be completely different in its own
var object1 =  { value: 10};
var object2 = object1;
var object3 = {value: 10};
// not similar
object2 === object3

// context
function() {
    let a = a;
}

// instantiation
class Player {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, Im a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Wee im a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shel', 'healer');
const wizard2 = new Wizard('Sean', 'magic');
wizard1.play()
wizard1.introduce()
