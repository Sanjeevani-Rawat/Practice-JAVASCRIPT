// let satrtBtn = document.querySelector(".start")

// let button = document.querySelectorAll('.button')    // to select all with class name button

let startBtn = document.getElementById('btn-start')

// using normal function
function showMsg(){
    console.log("Button clicked.")
}
startBtn.addEventListener('click', showMsg) // we r giving reference to the function, we r not calling it 

// using arrow function
let stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', () => {
    stopBtn.innerText="OK";
})

// toggling the button 
let resetBtn = document.getElementById('btn-reset')
resetBtn.addEventListener('click', () => {
    if (resetBtn.innerText === "Reset"){
        resetBtn.innerText = "Undo";
    } else {
        resetBtn.innerText = "Reset";
    }
})

// count 
let countBtn = document.getElementById("btn-count")
let value = 0;
countBtn.addEventListener('click', ()=>{
    value++;
    console.log(value);
    
    // countBtn.classList.add("btn-red");
    countBtn.classList.toggle("btn-red");
})




let input1 = document.getElementById('input1');

input1.addEventListener("change", () => {
    console.log(input1.value);
})

let input2 = document.getElementById('input2');

input2.addEventListener("input", () => {
    console.log(input2.value);
})

let input3 = document.getElementById('input3');

input3.addEventListener("focus", () => {
    console.log(input3.value);
})


// MOUSE EVENTS

let mouseDown = document.getElementById('mouseDown')
mouseDown.addEventListener("mousedown", (event) => {
    console.log(event.button);
})

let cor = document.getElementById('mouseCor')
cor.addEventListener('mousedown', (event) => {
    let xcor = event.pageX  // clientX
    let ycor = event.pageY  // clientY
    let cors = `(${xcor}, ${ycor})`
    console.log(cors)
}) 

//     <!-- Bubbling and Capturing -->

let form = document.querySelector("#form")
let div = document.querySelector("#div")
let para = document.querySelector("#para")

para.addEventListener("click", () => {
    alert("this is para tag");
}, true);

div.addEventListener("click", () => {
    alert("this is div tag")
})

form.addEventListener("click", () => {
    alert("this is form tag")
})

//  event elegation 

let btnContainer = document.querySelector("#btn-container")
btnContainer.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.target.innerText)

    let btnText = event.target.innerText;
    if(btnText==="RED"){
        event.target.classList.add("btn-red")
    }
})