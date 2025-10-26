/*
    Count frequency of all numbers in an array, return the
    number with the max frequency, if 2 or more numbers have
    the smae max freq then return the highest number
*/

const arr = [1,2,3,4,5,4,3,4,3,2,1,6,7,5,5]

function getNUmberWithMaxFreq(arr){
    let maxCount = 0;
    let arrOfMaxFreqKeys = [];
    let maxKey = 0;

    // get the freq of all no.
    const numberFreqObj = arr.reduce((acc, cur) => cur in acc ? {...acc, [cur] : acc[cur] + 1} : { ...acc, [cur] : 1}, {

    })

    // get the max freq
    const arrOfKeyValue = Object.entries(numberFreqObj)
    for(let [key, value] of arrOfKeyValue){
        if(maxCount < value){
            maxCount = value
        }
    }

    // get the no. with max freq
    for (let [key, value] of arrOfKeyValue){
        if (value === maxCount){
            arrOfMaxFreqKeys = [...arrOfMaxFreqKeys, key]
        }
    }

    // get the key with the max freq and max no. 
    for(let key of arrOfMaxFreqKeys){
        if(maxKey<key){
            maxKey = key;
        }
    }


    // return numberFreqObj
    // return arrOfKeyValue
    // return maxCount
    // return arrOfMaxFreqKeys
    // return Math.max(arrOfMaxFreqKeys)
    return maxKey
}

const result = getNUmberWithMaxFreq(arr)
console.log(result)