console.log("***** VARIABLES IN JS *****");

console.log("creating a variable msg using var keyword with two different values then the latest value will be printed");
var msg;
msg = "Sanjeevani"
msg = "Sanjita"
console.log(msg);

console.log("creating a variable using let keyword");
let msg1;
msg1 = "Sanjeevani"
console.log(msg1);

console.log("declaring variable usin const, it can't be changed");
const country = "India";
console.log(country);

console.log(`Note: 
    1. we hv to initialize the const value
    2. in js we dont hv to explicitly mention the data type
    3. latest value of the variable will be printed
    4. log is used to print and cosole is the browser API
    5. with var we can redeclare the same vairable it wont give any error, where as with let we cant do this
    6. variables are case sensitive 
`);

console.log("***** DATA TYPES IN JS *****");
let myName = "Sanjeevani"
console.log(myName);
console.log(typeof myName);

let age = 21
console.log(age);
console.log(typeof age);

let isMarried = false
console.log(isMarried);
console.log(typeof isMarried);

let qualification;
console.log(qualification);
console.log(typeof qualification);

let degree = null
console.log(degree);
console.log(typeof degree);

let obj = {}
console.log(obj);
console.log(typeof obj);

let arr = []
console.log(arr);   
console.log(typeof arr);

let bigintEX = 100n
console.log(bigintEX);
console.log(typeof bigintEX);

let sym = Symbol()
console.log(sym);
console.log(typeof sym);

console.log("***** CONCATENATION *****");
let firstName = "Sanjeevani"
let lastName = "Rawat"
let age1 = 21

console.log(firstName+lastName)
console.log(firstName+" "+lastName)
console.log("My name is "+firstName+" "+lastName+" and I am "+age1+" years old.")
console.log(`My name is ${firstName} ${lastName} and I am ${age1} years old.`)
console.log(`My name is ${firstName} ${lastName}
I am ${age1} years old
I am learning JavaScript`)

console.log("***** OPERATION IN JS *****");
let x = 10
let y = 2
console.log(x+y);
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

console.log(x++)
console.log(x)
console.log(++x)
console.log(x)
console.log(y--)
console.log(y)
console.log(--y);
console.log(y)

console.log(x == y)
console.log(x != y)
console.log(x>y)
console.log(x>=y)
console.log(x<y)
console.log(x<=y)

console.log(x===y)
console.log(x!==y)

console.log((x!=y)?"Good":"Bad")

let a = "78"
let b = "2"
console.log(a+b) // here it will concate string 
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

let c = "cat"
let d = "dog"
console.log(c+d) // here it will concate string
console.log(c-d)
console.log(c*d)
console.log(c/d) // here it will throw error because you can't divide string by string


console.log("***** TYPE CONVERSION *****");
const m = "3"
const n = "6"
console.log(typeof m);


console.log(Number(m) + Number(n));

const o = Number(m)
console.log(typeof o);

console.log(Boolean(m));
console.log(Boolean(0));


console.log("***** READLINE-SYNC *****");

const readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

let age3 = readlineSync.question("And your age? ");
console.log(`You are ${age3} years old.`)

const yrBirth = 2025 - age3;
console.log(`You born in ${yrBirth} year`);
