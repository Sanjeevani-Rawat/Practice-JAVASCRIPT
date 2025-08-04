console.log("SET");

const studentIds = new Array();

studentIds.push("1");
studentIds.push("2");
studentIds.push("1");

console.log({studentIds}) // { studentIds: [ '1', '2', '1' ] }
// but student id cant be same, so this the problem with this array, which is solved by the set 

const studentIds2 = new Set();

studentIds2.add("1");
studentIds2.add("2");
studentIds2.add("1"); // duplicate value is ignored

console.log({studentIds2})

const no = [21, 22, 23, 24, 24, 25, 25, 25, 25]
const finalNo = new Set(no);
console.log({finalNo}); 


const newList = new Set(); 
newList.add("Mango")
newList.add("Apple")
newList.add("Banana")
console.log({newList})

newList.delete("Apple")
console.log({newList})

// console.log({newList.size})
console.log(newList.entries())

console.log(newList.has("Mango"))
console.log(newList.has("Cherry"))

newList.forEach((value) => {
    console.log(value)
})

newList.clear()
console.log({newList})



// set doesnt hv any indexing system
// we can convert set to array using spread operator and vice versa


console.log("-------------------------");
console.log("MAP");

const newMap = new Map();
newMap.set("name", "Sanjeevani");
newMap.set("age", 21)
console.log(newMap);

console.log(newMap.get("age"))

newMap.delete("age")
console.log(newMap);

console.log(newMap.size)

console.log(newMap.keys(), newMap.values());

newMap.forEach((value)=>{
    console.log(value)
})

console.log(newMap.has("name"))
console.log(newMap.has("age"))