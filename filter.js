// POLLYFILL for FILTER

const arr = [1,2,3,4,5,6,7]

function getFilteredArr(number){
    return number>4
}


const result = arr.filter(getFilteredArr)
console.log(result)


const result2 = arr.filter((number) => number>2)
console.log(result2)


let tempArr = []
for(let i=0; i<arr.length; i++){
    if(arr[i]>5){
        tempArr.push(arr[i])
    }
}
console.log(tempArr)


// polyfill
Array.prototype.myFilter = function(callback){
    let tempArr = []
    for(let i=0; i<this.length; i++){
        if(callback(this[i])){
            tempArr.push(this[i])
        }
    }
    return tempArr
}
const result3 = arr.myFilter(getFilteredArr)
console.log(result3)