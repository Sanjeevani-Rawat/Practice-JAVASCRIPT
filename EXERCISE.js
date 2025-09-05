// Palindrome
// "madam": When reversed, it is still "madam"

const str1 = "Sanjeevani"

const upperCaseStr1 = str1.toUpperCase();
let splitStr1 = upperCaseStr1.split("");
let reverseStr1 = splitStr1.reverse();
let joinStr1 = reverseStr1.join("");
// console.log(joinStr1)
if(upperCaseStr1==joinStr1){
    console.log("Word is Palindrome")
} else{
    console.log("Word is not Palindrome")
}

const str2 = "Racecar"

const upperCaseStr2 = str2.toUpperCase();
let splitStr2 = upperCaseStr2.split("");
let reverseStr2 = splitStr2.reverse();
let joinStr2 = reverseStr2.join("");
// console.log(joinStr2)
if(upperCaseStr2==joinStr2){
    console.log("Word is Palindrome")
} else{
    console.log("Word is not Palindrome")
}

const str3 = "Rawat"
const revStr3 = str3.toLowerCase().split("").reverse().join("");
const res3 = (str3.toLowerCase() == revStr3) ? "Palindrome":"Not Palindrome"
console.log(res3)

const str4 = "Madam"
const revStr4 = str4.toLowerCase().split("").reverse().join("");
const res4 = (str4.toLowerCase() == revStr4) ? "Palindrome":"Not Palindrome"
console.log(res4)


// const str5 = "level";
function getRevStr(str){
    let revStr5 = "";
    for(let i=str.length-1; i>=0; i--){
        // revStr5.push();
        revStr5 = revStr5 + str[i];
    }
    return revStr5;
}
let str = "level"
const resStr5 = getRevStr(str);
// console.log(resStr5)
if(resStr5 == str){
    console.log("String is Palindrome")
} else{
    console.log("String is not Palindrome")
}

let strr = "hello"
const resStr55 = getRevStr("level");
// console.log(resStr5)
if(resStr5 == strr){
    console.log("String is Palindrome")
} else{
    console.log("String is not Palindrome")
}

// remove all the vowels
const string = "The quick brown fox jumps over the lazy dog";
function getStringWithNoVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";
    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result += char;
        }
    }
    return result;
}
console.log(getStringWithNoVowels(string))

// mask the last 4 characters with *
const phoneNo = "0123456789";
const maskChar = "*".repeat(4)
const ress = phoneNo.slice(0, phoneNo.length-4)+maskChar
console.log(ress)

// generating secret code 
const input = "Sanjeevani";
const shiftByPosition = 2;
const getEncodedStr = (str, shiftByPosition) => {
    let encodedStr = "";
    let currentPosition = 0, newPosotion = 0;
    for(let i=0; i<str.length; i++){
        currentPosition = str.charCodeAt(i);
        // console.log(currentPosition)
        newPosotion = currentPosition + shiftByPosition;
        encodedStr += String.fromCharCode(newPosotion);
    }
    return encodedStr;
}
console.log(getEncodedStr(input, shiftByPosition))

// finding the substring 
const name = "Sanjeevani Rawat"
for(let i=0; i<name.length; i++){
    for(let j = i+1; j<=name.length; j++){
        console.log(name.slice(i,j))
    }
}

// convertion odd to even and vice versa 
const arr = [1,2,3,4,5,6,7,8,9];
const check = arr.map(num => num % 2 == 0 ? num -1 : num + 1);
console.log(check);

// sum the numbers which are less than 40 
const arr2 = [10, 17, 61, 54, 44, 32, 39, 23];
const sum = arr2.reduce((acc, cur) => cur < 40 ? acc+cur : acc, 0)
console.log(sum)

// avg age of family members
const familyMembers = [
    {
        name: "Shankar",
        age: 46
    },
    {
        name: "Suniti",
        age: 42
    },
    {
        name: "Sanjeevani",
        age: 21
    },
    {
        name: "Sanjita",
        age: 12
    },
]
const totalAge = familyMembers.reduce((acc, cur) => acc+cur.age, 0);
const avg = totalAge / familyMembers.length;
console.log(avg)

// create an array of names of senio employess
const employees = [
    {
        name: "Shankar",
        numOfYears: 4
    },
    {
        name: "Suniti",
        numOfYears: 4
    },
    {
        name: "Sanjeevani",
        numOfYears: 2
    },
    {
        name: "Sanjita",
        numOfYears: 1
    },
]
const experience = employees.filter(employee => employee.numOfYears > 3).map(employee => employee.name);
console.log(experience)

// count the occurence od dostinct elements 
const values = ["a","b","c","c","e","d","e","a","f"];
const occurence = values.reduce((acc, cur) => cur in acc ? {...acc, [cur] : acc[cur]+1} : {...acc, [cur] : 1}, {});
console.log(occurence);

// find the sum of odd and even numbers o/p=> {even: 12, odd:9}
const num = [1,2,3,4,5,6]
const sumOE = num.reduce((acc, cur) => cur % 2 == 0 ? {...acc, even: acc.even+cur} : {...acc, odd: acc.odd+cur}, {even:0, odd:0})
console.log(sumOE)