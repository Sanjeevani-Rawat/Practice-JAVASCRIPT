// First class function 

function greetMsg() {
    console.log("Hello everyone.");
}
greetMsg();

// passing as a arguements to other function
function info() {
    return "Provide the required details"
}

function details(heading, id) {
    console.log(heading(), id)
}
details(info, "Sanjeevani Rawat.")

//returned from other function
function data() {
    function dataPerPerson() {
        let id = 19;
        let qualification = "BTech"
        console.log(`ID: ${id} and Qualification: ${qualification}`);
    }
    return dataPerPerson();
}
data();

// assigning function to variable
const endMsg = function () {
    console.log("Nice meeting you all.")
}
endMsg();


function gfg() {
    return function () {
        console.log(1012);
    }
}
// gfg()();
const res = gfg();
res();
console.log(res);


// use of high order function
// provide me the sq of numbers of the given arr:

const arr = [1, 2, 3, 4];
function sqOfNo(arr) {
    let res = [];
    for (let num of arr) {
        res.push(num ** 2);
    }
    return res;
}
console.log(sqOfNo(arr));



const ar = [1, 2, 3, 4, 5, 6];
function sq(num) {
    return num ** 2;
}
function cube(num) {
    return num ** 3;
}
function calcPow(wrapper, ar) {
    let res = [];
    for (let num of ar) {
        res.push(wrapper(num));
    }
    return res;
}
console.log(calcPow(sq, ar));
console.log(calcPow(cube, ar));


// Map 
// sq cube function using the map()

const no = [1, 2, 3, 4, 5];
function getSquares(num) {
    return num ** 2;
}
const op = no.map(getSquares);
console.log(typeof op);            //object   
console.log(op);

const sqNum = no.map((num) => {
    return num ** 2;
})
console.log(sqNum);


// filter()
order = new Array(1, 2, 3, 4, 5, 6, 7);
function lessThan5(order) {
    let reqOrder = [];
    for (let num of order) {
        // reqOrder.push(num<5)
        if (num < 5) {
            reqOrder.push(num)
        }
    }
    return reqOrder;
}
var tempReqOrder = lessThan5(order);
console.log(tempReqOrder);

console.log(order.filter(num => num > 5));


// Reduce 
const arrReduceIt = [1, 2, 3, 4, 5]
const output = arrReduceIt.reduce((prev, curr) => {
    return prev + curr;
}, 0)
console.log(output);


// arguements objects
// in js if the no. of parameters and the arguments are not samne then it wont give any error, it simply ignores the rest of the values while calculating. but will store the all the arguments 

function arg(a, b) {
    console.log(arguments)
}
arg(2, 3)
arg(2, 3, 8, 5, 6)

function arg2(a, b, ...rest) {
    arguments[3] = 30;
    console.log(arguments)
    console.log(arguments[0])

    console.log([...arguments])

    for (let value of arguments) {
        console.log(value);
    }

    console.log("Rest Parameters")
    console.log(a)
    console.log(b)
    console.log(rest)
}
arg2(2, 3, 8, 5, 6)


function list(...rest){
    let sum = 0;
    for(let value of rest){
        sum = sum + value;
    }
    console.log(sum)
}
list(1,2,3,4,5,6,7)


// variable scope -
console.log("SCOPE OF VARIABLES") 
var x = 3;  // global scope
function showNum(){
    let y = 5;  // local scope
    console.log({x});
    console.log({y});
}
showNum();
// console.log(y);  // this will give error

{
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);

    var c = 3;
    const d = 4;
}
// console.log(a)   // this will give error 
console.log(c);
// console.log(d);  // this will give error 

// scope chain 
console.log("SCOPE CHAIN");

let a = 3; 
let b2 = 10
let c2 = 20;
function xx(){
    let b = 5;
    console.log(a);
    function yy(){
        console.log(b);
        console.log(b2);
        let c = 7;
        function zz(){
            console.log(c);
            console.log(c2);
        }
        zz();
    }
    yy()
}
xx();

// recusion 

// normal calculate sum 
let num = 5;
let sum = 0; 
for(let i = 0; i<=num; i++){
    sum += i;
}
console.log(sum)

// through recursion 
function calSum(num){
    if(num==0){
        return num;
    }
    return num+calSum(num-1);
}
console.log(calSum(5))
console.log(calSum(1))
console.log(calSum(0))


function calcFactorial(n){
    if(n==0){
        return 1;
    }
    return n*calcFactorial(n-1)
}
console.log(calcFactorial(5))