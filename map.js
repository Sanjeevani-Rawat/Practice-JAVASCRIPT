// POLLYFILL for MAP

const arr = [1,2,3,4,5]

function callback(number){
    return number**2;
}

// const squaredArr = arr.map((number) => number ** 2)
const squaredArr = arr.map(callback)
console.log(squaredArr)

// looping over the array
let tempArr = []
for(let i = 0; i<arr.length; i++){
    tempArr.push(arr[i]**2)
}
console.log(tempArr)

// own version of map.. prototype.. used when browser dont support map functions 
Array.prototype.myMap = function (callback) {
        let tempArr = []
        for (let i=0; i<this.length; i++){
            // let power = this[i]**2;
            // tempArr.push(power)
            tempArr.push(callback(this[i]))
        }
        return tempArr
}
const squaredArr1 = arr.myMap(callback)
console.log(squaredArr1)