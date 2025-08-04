// func without parameter
greetMessage();

function greetMessage(){
    console.log("Hello. I'm Sanjeevani");
}

greetMessage();

// func with parameter

function name(nm){
    console.log(`Welcome ${nm}`);
}
name("Chiya")
name("Sanjita")

function info(name, city){
    console.log(`Welcome ${name} from ${city}`);
}
info("Aman", "Delhi")

// add range of no 
function calculate(min, max){
    let sum=0;
    for(min; min<=max; min++){
        sum+=min;
    }
    return sum;
}
console.log(calculate(1, 10))


// anonymous function

// to call anonymous func we assign it to a variable
// we have to define it first to access the anonymous func
// myFunc();
let myFunc = function (){
    console.log("ANONYMOUS FUNCTION");
}
myFunc();
console.log(typeof myFunc); //function

function add(x, y){
    return x+y;
}
let val = add(2,3);
console.log(val)

let sub = (x, y) => x-y;
console.log(sub(28, 8))

let calc = (x, y) => x>y ? x-y : x+y;
console.log(calc(10, 5))
console.log(calc(5, 10))


// sum of all no. from 1 to 20 
function sumOfRange(min, max) {
    let sum = 0; 
    for(let i = min; i<=max; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumOfRange(1, 20));

