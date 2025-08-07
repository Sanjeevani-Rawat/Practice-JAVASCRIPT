// create an array of sizes - s m l xl xxl
// ask the user wht size he want, then check if the size is in the array
// then remove the size selected by the user 

// let sizes = ["S", "M", "L", "XL", "XXL"];

// let readlinesync = require('readline-sync');
// let selectedSize = readlinesync.question("What size you want (S/M/L/XL/XXL): ");
// if(sizes.includes(selectedSize)){
//     console.log("OKAY")
//     sizes.splice(sizes[sizes.indexOf(selectedSize)], 1);
// } else {
//     console.log("Size is not available");
// }
// console.log(sizes)


// sorting of the array 
let numbers = [2,9,7,4,6,0];
console.log(numbers)
let sortedNumbers = numbers.sort();
console.log(sortedNumbers)

// to split and join the string 
let str = "Sanjeevani Rawat";
let split1 = str.split();
console.log(split1)

let split2 = str.split("")
console.log(split2);

let split3 = str.split("R")
console.log(split3);

let join1 = split2.join("");
console.log(join1);


// find palindrome of str
let strP = "sanjeevani"

let splitstrP = strP.split("")
let revstrP = splitstrP.reverse("")
let joinstrP = revstrP.join("")

if(joinstrP==strP){
    console.log("Is palindrome.")
}else{
    console.log("Is not palindrome.")
}

let str3 = "madam"
let str4 = str3.split("").reverse("").join("")
console.log(str3==str4?"Palindrome":"Not a Palindrome")

// reverse the array 
let num19 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num19)
let revOfNum19 = num19.reverse();
console.log(revOfNum19)

// spread an array (basically means unpacking of the array)
let arr1 = [1,2,3,4,5]
let arr2 = [8,9,10]
let arr3 = [...arr1, 6, 7, ...arr2]
console.log(arr3);

// destructuring of array
const sub = ["Maths", "Chemistry", "Physics"]
let [Sanjeevani, Tejanshu, Prashant] = sub;

console.log(Sanjeevani)

let [ , , you] = sub
console.log(you)

const arr4 = [["HTML", "CSS", "JS"], 1, 2, 3, 4, 5]
const [courses, ...rest] = arr4;
console.log(courses);
console.log(rest)

// swap no. 
var x = 10
var y = 20

[x, y] = [y, x];
console.log(x)
console.log(y)


//copying an array 
let arr10 = [1,2,3]
let arr11 = arr10;
console.log("Arr1: "+arr10);
console.log("Arr2: "+arr11);
arr11.push(4)
console.log("Updated Arr2: " +arr11)
console.log("Arr1: " +arr11) // array refrencing: coz of this arr11 is also updated as both the arrays are pointing in the same memory location.
// shallow copy: one variable is changing the value of other variable as well 
// not to do so, that is not want to update the arr1 then we can use spread operator.
let arr13 = [...arr10]
console.log("Arr3: "+arr13);
arr13.push(5)
console.log("Updated Arr3: " +arr13)
console.log("Arr1: " +arr10)


let arr51 = [1,2,3,4]
let arr52 = []

for(let number of arr51){
    arr52.push(number*2)
}
console.log(arr51)
console.log(arr52)

arr52.push(10)

console.log(arr51)
console.log(arr52)