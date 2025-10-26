/* 
    Q1. Arrange the words in the sentence in ascending order of their lenght 
    Input - gfg is a comp science learning platform
    Output - a is comp science learning platform 
*/

const str = "gfg is a comp science learning platform"

function sortTextByWordLength(str){
    let arrOfWords = str.split(" ")
    arrOfWords.sort((a,b) => a.length - b.length)
    // arrOfWords.join(" ")
    return arrOfWords.join(" ")
}

const result = sortTextByWordLength(str);
console.log(result)