function a(callback){
    console.log("Hello")
    callback();
}

function b(){
    console.log("Bye")
}

a(b)
// b is a callback function for function a 

setTimeout(function callback(){
    console.log("Executed after a delay [Inside setTimeout]")
}, 2000)
console.log("Wait for the setTimeout to be execute...")

/*
fetch("http://....")
    .then(function(){
        // response logic
    })
       
*/

const btn = document.getElementById('btn')
btn.addEventListener("click", function (){
    console.log("clicked")
})