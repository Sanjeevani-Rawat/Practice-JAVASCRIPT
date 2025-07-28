/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/


let teaFlavors = ["green tea", "black tea", "oolong tea"];
console.log(teaFlavors[0]);


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/


let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
console.log(favoriteCity);


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/


let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1]="jasmine tea";
console.log(teaTypes);


/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/


let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); // when u  dont know the length of the array
console.log(citiesVisited);

citiesVisited[3]="London"; // specific index value
citiesVisited=citiesVisited.concat("Rome"); // add at the last
citiesVisited[citiesVisited.length]="Venice";
console.log(citiesVisited);


// Desired Action	Method	Example

// Add to end	push():	cities.push("Berlin")
// Add to start	unshift():	cities.unshift("Paris")
// Add at specific index	splice():	cities.splice(1, 0, "Tokyo")
// Create new array	concat():	cities = cities.concat("Rome")
// Spread + add	Spread syntax:	cities = [...cities, "Delhi"]



/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/


let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(teaOrders);
console.log(teaOrders.pop());
console.log(teaOrders);


/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
// 

let popularTeas = ["green tea", "oolang tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.push("matcha"); // coz of this both of the variables will manipulate.. original and soft copy both.. 
console.log(softCopyTeas);
console.log(popularTeas);


/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/


let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; 
topCities.pop(); // hard copy will not change if we manipulate original
console.log(hardCopyCities);
console.log(topCities);

let hardCopyCities2 = topCities.slice(); // another way to create a hard copy
console.log(hardCopyCities2);
topCities.pop(); 
console.log(hardCopyCities2);
console.log(topCities);


/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/


let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let worldCities2 = [...europeanCities, ...asianCities];
console.log(worldCities2);


/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/


let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];
menuLength = teaMenu.length;
console.log(menuLength); // undefined


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/


let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

// if((cityBucketList.item) == "Londpn"){
//     console.log("You already have London in your bucket list");
// }

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);