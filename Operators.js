// concating od strings
let name = "Chiya";
let age = 20;
let msg = "Hello, I am " + name +" and I am "+age+" years old.";
console.log(msg);
let msg2 = `Hello, how are you ${name}? So you are ${age} years old. Nice..`
console.log(msg2);

// operations and operators
let addition = 8+2;
console.log(addition);

let score = 99;
let bonus = 15;
let total = score + bonus;
console.log(total);
console.log(score+bonus);

let x = 12;
let y = 5;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

console.log(++x);
console.log(x++);
console.log(x);

console.log(--y);
console.log(y--);
console.log(y);

console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);

console.log("Operations ~");
let isLoggedin = true; 
let isPaid = false; 
console.log(isLoggedin && isPaid);
console.log(isLoggedin || isPaid);
console.log(!isPaid);

console.log(((2*((3*5)+9))+1)-9)

// creating variables using new keyword 

let balance = 500; 
console.log(balance);
console.log(typeof balance);

let anotherBalance = new Number(500); 
console.log(anotherBalance);
console.log(typeof anotherBalance);

// null and undefined 
let firstName; 
let middleName=null; 
let lastName=undefined; //explicitly defined
console.log(typeof firstName);
console.log(middleName);
console.log(lastName);

// STRING - type casting with string 
console.log("PLAY WITH STRINGS ~");

let str1 = "12";
let str2 = "4";

console.log(str1+str2); // here the strings will get concatinate 
console.log(`But in subtraction the value will be ${str1-str2}`);
console.log(`value for mult is ${str1*str2} and for div is ${str1/str2}`);

let num1 = Number(str1);
let num2 = Number(str2);
console.log(num1+num2);

let isValue = true; // js will tk it as 1
console.log(isValue+1);
let isValue2 = false; // js will tk it as 0
console.log(isValue2+1);

console.log(isValue+isValue2);

// symbol

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);
console.log(sm2);
console.log(sm1==sm2); // ans is false as inside java symbol is treated as unique 