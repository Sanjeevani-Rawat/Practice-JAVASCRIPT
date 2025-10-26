const parentElement = document.getElementById("parent-container");

const cardContainer = document.createElement("div")
cardContainer.classList.add("card-container", "d-flex", "gap-sm")

// creating card image element 

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image")

cardImageElement.setAttribute("src", "longRoad.jpg")
cardImageElement.setAttribute("alt", "journey")

// creating card text element
const cardTextElement = document.createElement("span")
cardTextElement.innerText = "The journey of a thousand miles begins with a single step."


cardContainer.appendChild(cardImageElement);
cardContainer.appendChild(cardTextElement)
parentElement.appendChild(cardContainer)