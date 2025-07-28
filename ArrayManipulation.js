let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arr)
console.log("Length of a array is " +arr.length);

let names = ["john", "jary", "javid", "jmma"];
console.log(names);
console.log("Total number of names are " + names.length);
console.log("Capatalizing the value at index 0")
console.log(names[0].toUpperCase())

let nm = names[2];
console.log("Accessing the 2 index item")
//converting its first letter to uppercase 
console.log(nm)
console.log("Type of this is "+typeof(nm))
console.log(nm[0].toUpperCase()+nm.slice(1).toLowerCase())

let nm2 = names[3]
console.log(nm2)
console.log(nm2[0].toUpperCase()+nm2.slice(1).toLowerCase())