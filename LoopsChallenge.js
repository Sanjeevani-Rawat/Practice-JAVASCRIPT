// 1. Write a "for" loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named 'selectedTeas
console.log("Challenge 1.");
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
let i = 0;
do{
    if (tea[i] != "chai"){
        selectedTeas.push(tea[i]);
    } else {
        break;
    }
    i++;
} while (i<tea.length);
console.log(selectedTeas);

// 2. Write a "for" loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store all cities in a new array named 'visitedCities'
console.log("Challenge 2.");
let cities =  ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let j=0; j<cities.length; j++){
    if(cities[j]=="Paris"){
        continue;
    }
    visitedCities.push(cities[j]);
}
console.log(visitedCities);

// 3. use of for-of loop to iterate over the array [1, 2, 3, 4, 5] and stop when the no. 4 is found. Store the numbers before 4 in an array named smallNumbers.
console.log("Challenge 3.");
let no = [1, 2, 3, 4, 5]
let smallNumbers = [];
for(let num of no){
    if(num==4)
        break
    smallNumbers.push(num);
}
console.log(smallNumbers);

// 4. use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip herbal tea. Store the other teas in an array named preferredTeas.
console.log("Challenge 4.");
let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(let tea of teas){
    if(tea=="herbal tea"){
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);


// ye vala shi se smjh nhi aaya video no. 47

// 5. use of "for in" loop to loop through an object containing city populations. stop the loop when the population of "Berlin" is found and store all prev cities population in a new obj named cityPopulations.
/*
    let citiesPopulations = {
    "London": 1000000,
    "New York": 2000000,
    "Paris": 3000000,
    "Berlin": 4000000
    };
*/
console.log("Challenge 4.");
let citiesPopulations = {
    "London": 1000000,
    "New York": 2000000,
    "Paris": 3000000,
    "Berlin": 4000000
    };
let cityPopulations = {};
for(let city in citiesPopulations){
    // if(Object.prototype.hasOwnProperty.call(citiesPopulations, city)){
    //     let element = citiesPopulations[city];
    // }
    console.log(city);
    console.log(citiesPopulations[city]);
    // cityPopulations.push(citiesPopulations[city]);
}
let cityNewPop = {}
for(let city in citiesPopulations){
    if(city=="Berlin"){
        break;
    }
    // key = value; 
    cityNewPop[city]=citiesPopulations[city]; 
}
console.log(cityNewPop)
console.log(Object.keys(cityPopulations))

console.log(Object.keys(citiesPopulations))
console.log(Object.values(citiesPopulations))

// 6. use a for in loop to loop through an object containing city populations . skip any city with a population below 3 million and store the rest in a new object named largeCities. 
console.log("Challenge 6.");
