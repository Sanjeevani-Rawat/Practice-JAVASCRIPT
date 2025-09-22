let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car launches in year ${this.year}.`
    },
};
console.log(car.start());

function Person(name, age){
    this.name = name; 
    this.age = age;
}
let san = Person("Sanjeevani", 21)
// console.log(san.name)
// console.log(san)     // output -> undefined 

class Personn {
    // constructor(this.name,this.age)
    constructor(nm, age){
        this.nm = nm; 
        this.age = age;
    }

    start(){
        return `${this.nm} age is ${this.age}`;
    }
}
// let san1 = ("Sanjeevani", 21)
// console.log(san1)

// console.log(Personn.start());

class Occupation extends Personn {
    info(){
        return `${this.name} is Full Stack Developer.`;
    }
}

let san1 = new Personn("Sanjeevani", 21)
console.log(san1)
console.log(san1.start())
// console.log(san1.info()) 

// Encapsulation 

class  BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount 
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount()
console.log(account.getBalance());

account.deposit(700)
console.log(account.getBalance());

// Abstraction 
class CoffeeMachine{
    start(){
        return `Starting the machine...`
    }
    brewCoffee() {
        return `Brewing coffee`
    }
    pressStartButton(){
        let msg1 = this.start()
        let msg2 = this.brewCoffee();
        return `${msg1} + ${msg2}`
    }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
console.log(myMachine.pressStartButton())

class Bird{
    fly(){
        return `Flying...`
    }
}
class Penguin extends Bird{
    fly(){
        return `Cant fly.`
    }
}
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

// static method 
class Calculator {
    static add(a,b){
        return a+b
    }
}
let miniCalc = new Calculator()
// console.log(miniCalc.add(2,8));
console.log(Calculator.add(2,8));


// getters setters 
class Employee{
    #salary;
    constructor(name, salary){
        if(salary<0){
            throw new Error("Sa;ay cannot be negative")
        }
        this.name=name;
        this.#salary=salary
    }

    get salary(){
        // return this._salary
        return `You are not allowed to see salary.`
    }
    set salary(value){
        if(value<0){
            console.error("Invalid salary");
        } else {
            this._salary = value
        }
    }
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary);
emp.salary=-300000;