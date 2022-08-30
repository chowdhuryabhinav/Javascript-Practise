//Constructor function
function Person(name) {
    this.name = name;
}

Person.prototype.sayMyName = function () {
    console.log(`My name is ${this.name}`)
}


function Programmer(name,language) {
    Person.call(this,name);
    this.language = language
}


Programmer.prototype = Object.create(Person.prototype)

Programmer.prototype.code = function() {
    console.log(`I am coding in${this.language}`)
}


const abhinav = new Programmer('Abhinav','Javascript');

console.log(abhinav.constructor);  //Person

Programmer.prototype.constructor = Programmer 

console.log(abhinav instanceof Programmer)
