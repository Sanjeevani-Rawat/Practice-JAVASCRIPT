let x = 8; 
let y = 10; 

if(x>y)
    console.log("x is grt");
else
    console.log("y is grt");

// checking if a variable is a no. or not; 

let a = 123;
if((typeof a) === 'number'){
    console.log("a is a number");
} else {
    console.log("a is not a number");
}

// checkin if boolean is true or false 

let isTeaReady = false;
if(isTeaReady){
    console.log("tea is ready");
} else {
    console.log("tea is not ready");
}


// checking if array is empty or not 

let fruits = ['apple', 'banana', 'cherry'];
if(fruits.length > 0){
    console.log("array is not empty");
} else {
    console.log("array is empty");
}

// grading using ternary 

let marks = 84;
console.log(marks>90?"A+":marks>80?"A":marks>70?"B+":marks>60?"B":marks>50?"C+":marks>40?"C":"FAIL");