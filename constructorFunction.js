function greet(name) {
    console.log("Hello", name);
}
greet("san");

function Person(name, age){
    // let myName = name;
    this.name = name; 
    this.age = age;
}

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("toyota", "Camry", 2015)
console.log(myCar)

let myCar2 = new Car("Tata", "Safari", 2022)
console.log(myCar2)

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}.`;
    }
}
let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea)
console.log(lemonTea.describe())

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound.`
}
let dog = new Animal("Dog")
console.log(dog)
console.log(dog.sound())




function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea")
let coffee = new Drink("coffee")




