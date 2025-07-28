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
/* 
    let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000, 
    "Berlin": 3500000,
    "Paris": 2200000
    };
*/
console.log("Challenge 6.");
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000, 
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities={}
for(let city in worldCities){
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city]=worldCities[city];
}
console.log(largeCities);

// 7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chaii", "oolang tea"]. stop the loop when "chaii" is found, and store all prev tea types in an array named 'availableTeas'
console.log("Challenge 7.");
let array = ["earl grey", "green tea", "chaii", "oolang tea"];
let availableTeas = [];
// here we dont have to define the name of the func as we need this func inside the loop only 
array.forEach(function(tea){
    if(tea=="chaii"){
        //break; // u cant directly used break or continue inside a func
        return;
    }
    console.log(tea);

    availableTeas.push(tea);
});
console.log(availableTeas)

// lambda expression 
// array.forEach((tea)=>{
//     console.group(tea);
// })

// we could write func like this as well 
// () => {
    
//}

// write a foreach loop that iterates through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store all cities in a new array named 'traveledPlaces' 
console.log("Challenge 8.");
let places = ["London", "New York", "Paris", "Berlin"];
let traveledPlaces = [];
places.forEach(function (place){
    if(place == "Paris"){
        return;
    }
    traveledPlaces.push(place);
});
console.log(traveledPlaces);

// 9. write a for loop that iterates through the array [2, 5, 7, 9]. skip the value 7 and multiply the rest by 2. store the res in new array named doubledNum.
console.log("Challenge 9.");
let numb = [2, 5, 7, 9];
let dbnum=[];
for(let n = 0; n<numb.length; n++){
    if(numb[n]==7){
        continue;
    }
    dbnum.push(numb[n]*2);
}
console.log(dbnum)



// 10. use a for of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the len of the current tea name is grtr than 10. store the teas iterated over in an array named shortteas.
console.log("Challenge 10.");
let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortteas = []
for(let mytea of myteas){
    if (mytea.length>10){
        break
    }
    shortteas.push(mytea);
}
console.log(shortteas)
