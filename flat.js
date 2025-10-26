// POLYFILL for FLAT

const arr = [1,2,3,4,[5,6],[[7,8]]]

const result = arr.flat();
const result2 = arr.flat(2); 
// (2) this says 2 level of sub array 
// we can use (infinity) 
console.log(result)
console.log(result2)

Array.prototype.myFlat = function(depth=1){
    let tempArr = []
    function getFlattendArr(array, depth){
        for (let element of array){
            if(Array.isArray(element)&&depth){
                getFlattendArr(element, depth-1)
            }
            else {
                tempArr.push(element)
            }
        }
    }
    getFlattendArr(this, depth)
    return tempArr
}
const result3 = arr.myFlat();
console.log(result3)