let courses = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
console.log(courses)
console.log("Length of the array is "+courses.length)

let num = new Array(1, 2, 3);
console.log(num)

// want to delete the last element from the array 
console.log(courses.pop())
console.log(courses)
console.log("Length of the array is "+courses.length)

// first item will be removed
console.log(courses.shift())
console.log(courses)
console.log("Length of the array is "+courses.length)

// removing item in a range in original array 
// splice(a, b) -> start from a index and delete b no. of items
console.log(courses.splice(3, 2))
console.log(courses)
console.log("Length of the array is "+courses.length)

// deleting item using index but it will keep the space 
console.log(delete courses[1])
console.log(courses)
console.log("Length of the array is "+courses.length)

// deleting item using range it will show in the shallow copy
// slice(a,b) -> start from a index and delete till b
let copy = courses.slice(1,3);
console.log(copy)

console.log(courses)
console.log("Length of the array is "+courses.length)

// making the array empty 
courses.length = 0;
console.log(courses)
console.log("Length of the array is "+courses.length)
