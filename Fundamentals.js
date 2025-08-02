console.log("***** COMPARISION OPERATORS *****");

console.log("With Numbers");

console.log(50>20) // will return true
console.log(50<20) // will return false

console.log(50==20) // will return false
console.log(50!=20) // will return true

console.log(40>=40); // will return true
console.log(40<=40); // will return true

console.log(50>20 && 50<100); // will return true
console.log(50>20 || 50<100); // will return true

console.log("With Strings");

console.log("Apple"=="Apple"); // will return true
console.log("apple" > "banana"); // will return false
console.log("Apple" < "banana"); // will return true

console.log("2" > 1); // will return true

console.log("01" == 1); // will return true
console.log("01" == "1"); // will return false
console.log("01" === 1); // will return false

console.log(null == undefined); // will return true
console.log(null === undefined); // will return false

console.log(null > 0); // will return false
console.log(null < 0); // will return false
console.log(null == 0); // will return false

console.log(null < 1); // will return true
console.log(null > 1); // will return false


console.log("***** CONDITIONS *****");
// Conditions are used to check if a certain condition is met or not.
// They are used in if statements and are very useful in programming.
// There are three types of conditions in JavaScript: equality, relational, and logical conditions.
// Equality Conditions: These conditions are used to check if two values are equal or not.
// Relational Conditions: These conditions are used to check if one value is greater than, less than or equal to another value.
// Logical Conditions: These conditions are used to check if a certain condition is met or not.

const readlineSync = require('readline-sync');

let age = readlineSync.question("Enter your AGE: ");

if(age>=18){
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let userInfo = readlineSync.question(`Write "User" if already loggedIn, else write "Guest" : `);
if(userInfo == "User"){
    console.log("Welcome to the system!");
} else if(userInfo == "Guest"){
    console.log("Welcome to the Guest Area!");
} else {
    console.log("Invalid Input");
}

const num = Number(readlineSync.question("Enter a number to check whehter it is divisible by 7 or not: "));
console.log((num%7==0)?"Yes, it is divisible":"No, its not divisible");

let urno = Number(readlineSync.question("Even and Divisible by 6: "));
if(urno%2==0){
    if(urno%6==0){
        console.log("Yes, it is even and divisible by 6");
    } else {
        console.log("Yes, it is even but not divisible by 6");
    }
} else {
    console.log("No, it is not even");
    if(urno%5==0){
        console.log("It is not even but divisible by 5");
    } else {
        console.log("Not even nor divisible by 5");
    }
}



console.log("***** CONDITION: A program that reads 3 string and print the smallest string. *****");

const str1 = "Sanjeevani"
const str2 = "Sanjita"
const str3 = "Rawat"

console.log(Math.min(str1, str2, str3))

console.log("On the bases of their length");
console.log(Math.min(str1.length, str2.length, str3.length))
// const str1len = str1.length;
// const str2len = str2.length;
// const str3len = str3.length;
if(str1.length < str2.length && str1.length < str3.length){
    console.log(str1);
}
else if(str2.length < str1.length && str2.length < str3.length){
    console.log(str2);
}
else if(str3.length < str1.length && str3.length < str2.length){
    console.log(str3);
} 
else{
    console.log("Some strings are equal");
}


console.log("***** TERNARY OPERATOR *****");
let totMks = 60;
console.log((totMks <= 40 ) ? "Work Hard" : "Cleared")

// let mks = 88; 
let mks = readlineSync.question("Enter your marks: ");

console.log((mks>=80)?"A":(mks>=60)?"B":(mks>=40)?"C":(mks>=20)?"D":(mks>=0)?"FAILED":"Invalid marks");


console.log("***** LOGICAL OPERATOR *****");

const p = readlineSync.question("P: ");
const c = readlineSync.question("C: ");
const b = readlineSync.question("B: ");
const m = readlineSync.question("M: "); 

if(p>85 && c>85 && b>85 && m>85){
    console.log("You are eligible for PCMB or PCM or PCB");
} else if(p>60 && c>60 && b>60 && m>70){
    console.log("You are eligible for COMMERCE with MATHS");
    if(m<70){
        console.log("You are eligible for COMMERCE without MATHS");
    }
} else{
    console.log("You are eligible for ARTS");
}

let per10 = readlineSync.question("10th Percent: ");
let per12 = readlineSync.question("12th Percent: ");
let perJEE = readlineSync.question("JEE Percent: ");

if(perJEE > 90 && per10 > 90 && per12 > 90){
    console.log("You are eligible for IIT");
} else if(perJEE > 90 && (per10 > 90 || per12 > 90)){
    console.log("You are eligible for NIT");
} else if(perJEE > 80 && (per10 > 80 || per12 > 80)){
    console.log("You are eligible for Tier B colleges");
} else if (perJEE > 60 || per12 > 60 || per10 > 60){
    console.log("You are eligible for Tier C colleges");
} else{
    console.log("You are not eligible for any college");
}

console.log(Boolean())

console.log("***** NULLISH-COALESCING OPERATOR *****");
// if fname is either null or undefined then it will give the GFG

let fname = null
let lname = "RAWAT"
console.log(fname ?? "GFG");
console.log(lname ?? "GFG");