console.log("Printing array -")
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

console.log("Adding the item using PUSH")
fruits.push("Cherry");
console.log(fruits);
fruits.push("Orange", "Pineapple");
console.log(fruits);    

console.log("Adding the item using CONACAT")
console.log(fruits.concat("Berries"))
console.log(fruits.concat("Watermelon", "Kiwi"))

console.log("Adding two arrays using CONCAT")
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1)
console.log(arr2)
console.log(arr1.concat(arr2));

let arr3 = [7, 8, 9];
console.log(arr1.concat(arr2, arr3))

console.log(fruits)
console.log("Adding using UNSHIFT")
fruits.unshift("Grapes"); // will add at the first index
console.log(fruits);
console.log("Adding using SPLICE")
fruits.splice(3, 0, "Peach"); // insert peach at 3rd index
console.log(fruits);
console.log("ADDING using index value")
fruits[2]="Plum"; // will replace the item at index 2 with plum
console.log(fruits); 
console.log("Adding using LENGTH")
fruits[fruits.length]="Mango"; // will add mango at the end of the array
console.log(fruits);

// console.log("ADDING at the last and at the first index")
// console.log(fruits[...fruits, "Guava"]);
// console.log(fruits)
// console.log(fruits["Muskmelon", ...fruits]);
// console.log(fruits)

// can contain letters digits, underscore and dollar after 1st character 