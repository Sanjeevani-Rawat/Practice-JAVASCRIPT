console.log("***** LETS START STRING *****");

let str = "Sanjeevani Rawat"
console.log(str)
console.log(str.length)
console.log(typeof str)

// iterate over string
console.log("iterating using for loop -");
for(let i = 0; i<=str.length-1; i++){
    console.log(str[i])
}
console.log("iterating using for of loop -");
for(let char of str){
    console.log(char)
}

// break the loop if char is 'e', that means dont print 'e'
console.log("break the loop if char is 'e'-");
for(let char of str){
    if(char == "e"){
        break;
    } 
    else{
        console.log(char);
        
    }
}
console.log("skip the char 'e'-");
for(let char of str){
    if(char == 'e'){
        continue;
    }
    else{
    console.log(char);
    }
}

// count how many 'a' are there in a string 
let count = 0;
for(let char of str){
    if(char == 'a'){
        count++;
    }
}
console.log("count of 'a' is - ", count)

// print only char 'R' from string
console.log(str.includes('R')?"R":"Not FOund")

// print the char of index 5 from string
console.log(`Char at index 5 is ${str[5]}`);
console.log(`Char at index 20 is ${str[20]}`);

//to print the index of the letter 't'
console.log(`Index of letter 't' is ${str.indexOf('t')}`)

// filtering the vowels char from str 
let vowelsInString = '';
const vowels = 'aeiouAEIOU';
for(let char of str){
    if(vowels.includes(char)){
        vowelsInString = vowelsInString + char + ' ';
    }
}
console.log(`Vowels in the strings are: ${vowelsInString}`);


console.log("***** STRING METHOD *****");
let str2 = "I'm learning JavaScript";

// print a letter at index 5 from string
console.log(`letter at index 5 is ${str2.charAt(5)}`); // by default charAt() index value is 0
console.log(`letter at index 5 is ${str2.charAt(50)}`); // if the index is not in the str then it will return an empty string

// ASCII Code 
console.log(`ASCII code of 'm' is ${str2.charCodeAt(2)}`);
console.log(`ASCII code of 'I' is ${str2.charCodeAt(0)}`);

// encode the string str3=Sanjeevani => Tbokffwboj 
let str3 = "Sanjeevani";
let encodedStr = '';
for(let char of str3){
    encodedStr = encodedStr + String.fromCharCode(char.charCodeAt(0) + 1);
}
console.log(encodedStr)

// to find index of particular string 
console.log(`Index of 'l' is ${str2.indexOf('l')}`) // searching for 'l' in str2 and return the index of first occurrence of 'l'
console.log(`index of the str which is not present will be (x): ${str2.indexOf('x')}`) // searching for 'x' in str2 and return -1 because 'x' is not present
console.log(`index value of 'a' is ${str2.indexOf('a')}`) // searching for 'a' in str2 and
console.log(`index value of 'a' is ${str2.indexOf('a', 7)}`) // searching for 'a' in str2 starting from index 7

// creating a function to find the index of a particular string 
function findIndex(str, char) {
    const indexOfVal = str.indexOf(char);
    // return indexOfVal;

    if(indexOfVal==-1){
        return "Character " +char +" is NOT FOUND in the string."
    } else {
        return "Character " +char +" FOUND at index " +indexOfVal +" in the seting.";
    }
}
console.log(findIndex("Hey, Im a college student", "c")); // searching for 'c' in the string and return the index of first occurrence of 'c'
console.log(findIndex("Hey, Im a college student", "x")); // searching for 'x' in the string and return "Character is NOT FOUND in the string." because 'x' is


let findIndexOfChar = (str, char) => str.indexOf(char)!=-1?"Character '" +char +"' FOUND at index " +str.indexOf(char) +" in the seting.":"Character " +char +" is NOT FOUND in the string.";
console.log(findIndexOfChar("Hey, How are you?", "a")); // searching for 'a' in the string and return the index of first occurrence of 'a'

// finding whether a string is there or not 
let msg = "We should learn new things every day,";
let vowelsSet = "aeiouAEIOU";
console.log(msg.includes("new things"))
for(let char of msg){
    if(vowels.includes(char)){
        console.log(`${char} is a vowel.`);
    } else {
        console.log(`${char} is NOT a vowel.`);
    }
}

// finding b, a, d
// let txt = "I am smart";
let txt = "I m smrt";
let word = "bad";
let flag = ""
for(let char of txt){
    if(word.includes(char)){
        flag = "Has b|a|d"
        break;
    } else{
        flag = "There's no b|a|d"
    }
}
console.log(flag);

// converting the strings 
let notice = "From today CLASS will begin"
console.log(`Upper case: ${notice.toUpperCase()}`)
console.log(`Lower case: ${notice.toLowerCase()}`)
console.log(`Original notice:: ${notice}`)


// substring 
const username = "Sanjeevani Rawat"
const subString = username.substring(0,10);
console.log(subString)

// trim 
let nm = "                 Welcome to the class      ";
console.log(nm);
console.log(nm.length);

let trimmed = nm.trim()
console.log(trimmed)
console.log(trimmed.length)

let trimmedEnd = nm.trimEnd();
console.log(trimmedEnd)
console.log(trimmedEnd.length)

let trimmedStart = nm.trimStart();
console.log(trimmedStart)
console.log(trimmedStart.length)