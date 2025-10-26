console.log("Hello from script..");
console.log(document);
console.log(document.firstChild);
console.log(document.firstChild.firstChild);
console.log(document.getElementsByTagName("h1"));

// alert("connected");

// example 1 

// document.querySelector('#changeTextButton')
let hold = document.getElementById("changeTextButton").addEventListener('click', function (){
    // console.log(this);
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    paragraph.textContent = "I have changed the paragraph."
});
// console.log(hold);  // just to show what is holding


// example 2

document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight')
});

// example 3

document.getElementById('changeOrder').addEventListener('click', function () {
    let coffee = document.getElementById('coffeeType')
    coffee.textContent = "Espresso"

    coffee.style.backgroundColor = "brown";
    coffee.style.padding = "5px";

    let coffeeRev = document.getElementById('coffeeTypeBack')
    coffeeRev.textContent = "Latte"
})

// example 4

document.getElementById('addNewItem').addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";

    document.getElementById('shoppingList').appendChild(newItem) 
})

// example 5

document.getElementById('removeLastTask').addEventListener('click', function() {
    let taskList = document.getElementById('taskList')
    taskList.lastElementChild.remove();
})

// example 6 

document.getElementById('clickMeButton').addEventListener('click', function(){
    alert("This is an alert")
})
document.getElementById('hoverMe').addEventListener('mouseover', function(){
    alert("ALERT")
})

// example 7 

document.getElementById('teaList').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.teaItem')){
        alert("You selected: " + event.target.textContent)
    }
})

// example 8 

document.getElementById("feedbackForm").addEventListener('submit', function(e){
    // alert("Feedback Submitted!!!")
    e.preventDefault();
    let feedback = document.getElementById('feedbackInput').value
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
})

// example 9 

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM is fully loaded."
})

// example 10 

document.getElementById("toggleHighlight").addEventListener('click', function (){
    let descriptionText = document.getElementById("descriptionText")
    descriptionText.classList.add('highlight')
    // descriptionText.classList.toggle('highlight')
})