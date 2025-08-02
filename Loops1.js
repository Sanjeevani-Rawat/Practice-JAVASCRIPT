console.log("***** FOR LOOP *****");

for(let i = 0; i < 5; i++){
    console.log(i);
}

const nm = "Sanjeevani"
let count = 0;
for(let i = 0; i<=nm.length-1; i++){
    console.log(nm[i]);
    count++;
}
console.log(`${count}`)

console.log("***** NESTED FOR LOOP *****");

console.log("Write tables from 1 to 5");

for(let i = 1; i<=5; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
    console.log("------");
}

console.log("***** * PATTERN *****");
/*
    *
    **
    ***
    ****
*/
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log("");
}

console.log()

const symbol = "* "
console.log(symbol.repeat(1));
console.log(symbol.repeat(2));
console.log(symbol.repeat(3));
console.log(symbol.repeat(4));

console.log();

for(let i=1;i<=5; i++){
    console.log(symbol.repeat(i))
}

console.log();
/*
* * * * *
* * * *
* * *
* *
*
*/
for(let i=5; i>=1; i--){
    console.log(symbol.repeat(i))
}

console.log("***** TO FIND EVEN NO. *****");
for(let i=1; i<=100; i++){
    if(i%2==0){
        process.stdout.write(`${i} `);
    }
}


console.log("***** TO FIND VOWELS *****");
const str = "My name is Sanjeevani Rawat"
const vowels = "aeiouAEIOU"
let strVowels = [];
for(let i=1; i<str.length; i++){
    if(vowels.includes(str[i])){
        console.log(str[i]);
        strVowels.push(str[i])
    }
}
console.log(strVowels)
console.log(strVowels.length)

console.log("Sanjeevani".includes("San"));


/*

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/


console.log("***** WHILE LOOP *****");
let i = 1;
while(i<=5){
    console.log(i)
    i++;
}

console.log()

let j=1;
do{
    console.log(j)
    j++;
} while(j<=5)

console.log("user enters a no., if the no. is grtr than 50 then ask the user to enter the no. again");
const readlineSync = require('readline-sync')
let no = readlineSync.question("No. - ")
while(no>=50){
    // console.log("Enter the no. again")
    no = readlineSync.question("No. - ")
}
console.log("DONE")