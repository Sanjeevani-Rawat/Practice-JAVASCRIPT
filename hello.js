console.log("Hello San");
console.log(7+3); // this will give the output in the nxt line

process.stdout.write("CHIYA"); // this will not give us the new lind
process.stdout.write("RAWAT");

console.log(" TABLE")
console.table({city: "San Francisco", country: "USA"}); // this will give us the table format output
console.warn({city: "San Francisco", country: "USA"}); // this will give us the table format output

/*

DATA TYPES IN JS

->  String
->  Number
->  Boolean
->  Bigint
->  Null
->  Undefined
->  Object
->  Symbol

variables are just like a placeholder or say a bucket to store
in js we dont hv to explicitly mention the type of the data, instead we can use var keyword
*/

// var score = 102; 
// old approach
let score = 102; // new approach

let name = "Sanjeevani";
let isLoggedin = true;

// object 
let teaType = ["lemmon tea", "orange tea", "oolong tea"];
let user = {nm:"Sanjeevani", course: "BTech"}

console.log(score);
console.log(name);
console.log(isLoggedin);
console.log(teaType);
console.log(user);

let getScore = score;
console.log(getScore);

let gameName = "minecraft";
gameName = "pubg"; // this will change the value of the variable
console.log(gameName);

const PI = 3.14;
console.log(PI);
const myStore = "@ChiyaStore";
// myStore = "@store";      TypeError: Assignment to constant variable.
console.log(myStore);
console.log(typeof myStore);
