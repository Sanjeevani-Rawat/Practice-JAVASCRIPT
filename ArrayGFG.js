// store student names in an array and print it. 

let student = ["Prakash", "Nitin", "Sachin", "Adil"]; 
console.log(student);
console.log(typeof student);

console.log("- (one at a time)");

console.log("- (normal indexing)");
console.log(student[0]); // accesing one student name from the array
console.log("- (at) ");
console.log(student.at(3));

// accessing all student names from the array
console.log("- (let of)");
for(let name of student){
    console.log(name);
}

// accessing all student names from the array using index
console.log("- (for)");
for(let i=2; i<student.length; i++){
    console.log(student[i]);
}

console.log("- (let in)");
for(let index in student){
    console.log(student[index]);
}

// student=>forEach(name=>console.log(name));   



