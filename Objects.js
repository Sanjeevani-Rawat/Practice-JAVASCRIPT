// create an empty object 
let objDemo = {}
console.log(objDemo) // Output: {}

// check its type 
console.log(typeof objDemo)

// mk another obj with user info
let userInfo = {
    Name : "Sanjeevani",
    Age : "21",
    Courses : ["HTML", "CSS", "JS"],
    "Programming Language" : "Java"
}
console.log(userInfo);

console.log(userInfo.Age)
console.log(userInfo.Name)
console.log(userInfo["Programming Language"])

// add value inside the obj
userInfo.Exploring = ["AI ML", "Python"];
console.log(userInfo)

userInfo.Address = {
    Street : "123, ABC Street",
    City : "New York",
    State : "NY"
}
console.log(userInfo) 

// function as an object property with key value and without key value
let funcDemo = {
    InitialMsg : function (){
        console.log("Hey, Welcome to the set.");
    },
    Name : "Sanjita",
    Bye(){
        console.log("Nice meeting you.")
    }
}
console.log(funcDemo)
funcDemo.InitialMsg();
console.log(funcDemo.Name)
funcDemo.Bye();

// function borrowing 
let obj1 = {
    Name : "Sanjeevani",
}
let obj2 = {
    Name : "Sanjita",
    msg() {
        console.log("Hey!!!")
    }
}

obj1.msg = obj2.msg;

obj1.msg()
console.log(obj1.Name)

obj2.msg()
console.log(obj2.Name)

// ask prop from the user whatever he wants to know about you 
const readlinsync = require('readline-sync');
let key = readlinsync.question("What you know about me (Name/Age/Courses/City) ?");
let licence = readlinsync.question("Driving/Patent: ")

let info = {
    Name : "Sanjeevani",
    Age : 25,
    Courses : ["B.tech","M.tech"],
    City : "New York",
    [licence] : "Not yet"
}
console.log(info[key])
console.log(info)
console.log(info["Name"])
console.log(info[licence])

// short hand property 
function person(name, age, city) {
    return{
        name: name,
        age: age, 
        city: city
    }
}
console.log(person("San", 21, "New York"))

function courses(html,css,js){
    return{
        html, 
        css, 
        js
    }
}
console.log(courses("Done", "Done", "InProcess"))

// convert the 3 variables into 1 obj 
const b1 = "Prakash"
const b2 = "Rohan"
const b3 = "Mani"

let monitors = {b1,b2,b3}
console.log(monitors)

// find whether the prop lies in the ibj or not 
const obj = {
    m1: "Done",
    m2: "Done",
    m3: "InProcess",
    m4: "NotStarted"
}
console.log("m4" in obj)
console.log("m5" in obj)

// print the keys of the object 
for(let keys in obj){
    console.log(keys)
}

// print the values of the object 
for(let keys in obj){
    console.log(obj[keys])
}

// print the key value pairs of the object
for(let keys in obj){
    console.log(keys, obj[keys])
}

// obj reference & shallow copy 
const per1 = {
    name: "Sanjeevani",
    age: 21,
}
const per2 = per1;
console.log(per1)
console.log(per2)

per2.name = "Sanjita"
console.log(per1) // here per1 name will also get changes 
console.log(per2)

// another way to copy an obj 
const per3 = Object.assign({}, per1)
console.log(per3)
per3.age=40;
console.log(per3)
console.log(per2)   
console.log(per1)

const data1 = {
    name : "Rohan", 
    add : {
        city : "Pune",
        state : "Maharashtra",
    }
}
const data2 = Object.assign({}, data1)
console.log(data1)
console.log(data2)

data2.name = "Sangam"
console.log(data1)
console.log(data2)

data2.add.city = "Mumbai";
console.log(data1)
console.log(data2)

// optional chaining 
const calss1 = {
    TBatches : 10,
    TSub : 2,
    SubName : {
        sub1 : "DSA",
        sub2 : "Core Language",
    }
}
console.log(calss1.TBatches)
console.log(calss1.SubName)
console.log(calss1.SubName.sub2)
console.log(calss1.SubName.sub3)
console.log(calss1.TF)

if(calss1.SubName.sub3 === undefined){
    console.log("sub3 is not there")
} else {
    console.log(calss1.SubName.sub3)
}

// user.address?.city
// if user doesnt have address property then it will return undefined
// and if address is the property of the user then it will return the city of the address
// this is optional-chaining 

const user = {
    getDisplayGreeting : function (){
        console.log("Hello")
    }
}
user.getDisplayGreeting();
user.getDisplayEnding?.();

// destructuring objects 
let object = {
    name: "Sanjeevani",
    Address: {
        city: "Pune",
        state: "Maharashtra",
    }, 
    courses: ["DSA", "Core Java", "Python"],
    isPaid: true
}

console.log(object)

let {name:userName, Address : {city}, ...rest} = object
console.log(userName)
// console.log(id)

// let {Address} = object
// console.log(Address)


const employees = {
    engineers:{

        em1: {
            id: 1,
            name: "Sanjeevani",
            occupation: "Fullstack Developer"
        },
        em2: {
            id: 2,
            name: "Rahul",
            occupation: "Data Scientist"
        },
    },
    placements: {
        em3: {
            id: 3,
            name: "Swati",
            occupation: "Data Analyst"
        }
    },
    youtube: {
        em4: {
            id: 4,
            name: "Satyam",
            occupation: "Data Engineer"
        },
    }
}

let {engineers: {em2:{name, occupation}}} = employees
console.log(name, occupation)

// let {youtube: {em4: {name}}} = employees
// console.log(name)


// retrun the key and value pair of an object: for this we will use entries
const obj101 = {
    name: "Chiya",
    age: 88,
    city: "Mumbai"
}

const entries = Object.entries(obj101)
console.log(entries);

const keys = Object.keys(obj101)
console.log(keys)

const values = Object.values(obj101)
console.log(values)


// use of this keyword inside the function inside the obj
// this keyword is used to refer the entire object itself
// this is also called the implicit binding 
let ex = {
    name: "Rawat",
    exFunc: function (){
        console.log(this);
        console.log(this.name);
    }
}
console.log(ex)
ex.exFunc();

// using this keyword inside a normal function 
function calculateSum() {
    console.log(this)
}
calculateSum()

// this.alert("Hey hi");
// window.alert("San")
// alert("KKK")

const userInformation1 = {
    name: "Jatin",
    showName: function (){
        console.log(this.name)
    }
}
const userInformation2 = {
    name: "Rahul",
    showName: function (){
        console.log(this.name)
    }
}
const userInformation3 = {
    name: "Anjali",
    showName: function (){
        console.log(this.name)
    }
}
userInformation1.showName();
userInformation2.showName();
userInformation3.showName();
// but here i have to repeat the things again n again so we will use explicit binding


// constructor 
function Try() {
    // this.name = "Sanjeevani", 
    // this.age = 21
    (this.name="Sanjeevani"), (this.age=21)
}
const try1 = new Try(); // this is a constructor 

console.log(try1)
console.log(try1.name)
console.log(try1.age)

function User(name, age){
   (this.name = name), (this.age = age)
}
const user12 = new User("Chiya", 19)
console.log(user12)

// call a function (function borrowing) using call, apply, bind
// this is also called explicit binding
const u1 = {
    name: "Riya",
    age: 12
}
const u2 = {
    name: "Priyesh",
    age: 18
}
const u3 = {
    name: "Ronak",
    age: 14
}
function greet(){
    console.log("Hello!!! "+this.name)
}
function info(school, standard){
    console.log(`I'm ${this.name} of class ${standard} school ${school}`)
}

greet.call(u1)
info.call(u1, "kV", 7)

greet.call(u2)
// info.call(u2, "Mother Marry", 12)
info.apply(u2, ["Mother Marry", 12])

greet.call(u3)
const res = info.bind(u3, "R.K. Public", 10)
res();








/*

1. js internally converts the key into the string.
2. properties having multiple words should be put inside the string. 
3. we cant use arrow func as a obj prop, we only hv to use regular anonymous func.
4. obj doesnt supports indexing. 


*/


// deep copy