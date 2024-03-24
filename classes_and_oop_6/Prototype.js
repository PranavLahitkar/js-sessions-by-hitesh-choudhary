let myName = "pranav     "
let mychannel = "no channle :()     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pranav = function(){//for obj
    console.log(`pranav is present in all objects`);
}

Array.prototype.heyPranav = function(){//for array
    console.log(`Lahitkars says hello`);
}

 heroPower.pranav()//obj
 myHeros.heyPranav()//array
 myHeros.heyPranav()//array
heroPower.heyPranav()//shows error as the heyPranav is not prototyped for Object 

// inheritance

const User = {
    name: "test",
    email: "pranava.lahitkar@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Happy Faces     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"pranav".trueLength()
"LovesGym".trueLength()