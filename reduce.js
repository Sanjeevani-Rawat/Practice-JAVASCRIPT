// POLLYFILL for REDUCE

const arr = [1,2,3,4,5,6]

function getSum(acc, cur){
    return acc+cur;
}


const total = arr.reduce(getSum)    // initialValue has not be given therefore the value will the first value of the array.
console.log(total)


// polyfil
Array.prototype.myReduce = function(callback, initialValue){
    let acc = initialValue ? initialValue : this[0]
    for(let i=initialValue?0:1; i<this.length; i++){
        acc = callback.call(this, acc, this[i], i, this)
    }
    return acc;
}
const total2 = arr.myReduce(getSum);
console.log(total2)
