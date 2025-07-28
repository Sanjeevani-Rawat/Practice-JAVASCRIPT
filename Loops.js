//  1. write a while loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable called sum.

console.log("Ques 1.");
let sum = 0;
let i = 1; 
while(i<=5){
    sum += i;   // sum = sum + i;
    i++;
}
console.log(sum);

// 2. write a while loop that counts down from 5 to 1 and stores no. in an array named countdown
console.log("Ques 2.");
let countdown = [];
let j = 5; 
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);

// 3. write a do while loop that prompts a user to enter their fav tea type until they enter stop. Store the tea type in an array named teaCollection
// go to console to print its output 
/*
console.log("Ques 3.");
let teaCollection = [];
let tea;
do{
    tea = prompt(`Enter ur fav tea (type stop to stop)`);
    if(tea != "stop")
        teaCollection.push(tea);
    // else
} while(tea !== "stop");
console.log(teaCollection)
*/

// 4. write do while loop that adds no. from 1 to 3 and store the res in a variable named total
console.log("Ques 4.");
let total = 0;
let l = 1;
do{
    total += l;
    l++;
} while(l<=3);
console.log(total)

// 5. write a for loop that multiples each element in the array [2, 4, 6] by 2 and stores the res in new array named multipleNumbers.
console.log("Ques 5.");
let array = [2, 4, 6];
let array3 = [2, 4, 6];
let multipleNumbers = [];
let multipleNumbers3 = [];
for(let m = 0; m<array.length; m++){
    let num = array[m];
    multipleNumbers.push(num*2);
}
console.log(multipleNumbers);

for(let m = 0; m<array.length; m++){
    multipleNumbers.push(array[m]*2);
}
console.log(multipleNumbers);


for(let val of array3){
    multipleNumbers.push(array[val]*2);
}
console.log(multipleNumbers3);


// write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and each city in a new array named cityList.
console.log("Ques 6.");
let cityList = [];
let cities = ["Paris", "New York", "Tokyo", "London"];
for(let city of cities){
    cityList.push(city);
}
console.log(cityList);
console.log(cities)