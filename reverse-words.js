/*
    Q2. Reverse words of a string without changing their order
    Input - react is a library
    Output - tcaer si a yrarbil
*/

const str = "react is a library";

function reverseTheOrder(str){
    let singleWords = str.split(" ")
    let arr = singleWords.map((word) => word.split("").reverse().join(""))
    return arr.join(" ");
}

const result = reverseTheOrder(str)
console.log(result)
