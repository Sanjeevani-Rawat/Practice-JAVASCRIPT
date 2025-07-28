// object

let obj1 = {}
console.log(obj1);
console.log(typeof obj1);

let obj2 = {
    name: "Sanjeevani",
    age: 25,
    course: "Full Stack Development"
};
console.log(obj2);
console.log(obj2.age); // to access individual prop


const details = {
    fname: "Sanjeevani",
    lname: "Rawat",
    hometown: "Dehradun"
}
console.log(details);
details.fname = "Chiya"; // to change the values, they are mutable
console.log(details);
details.pincode = "201301"; //index can be added like this
console.log(details); 

// to access the names which has spaces
details["Currently Living"]="Noida";
console.log(details);
console.log(details["Currently Living"]);
console.log(details.pincode);

// date
let date = new Date();
console.log(date);
console.log(date.getDate());

// let time = new Date().getTime();
// console.log(time); 
// i dunno kya h ye


// array ~ collection of thinga

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Anjali", "Ram", "Nishchay"];

console.log(arr1);
console.log(arr1[2]);

console.log(arr2);
console.log(arr2[0]); // to access the individual element