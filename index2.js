// setTimeout
// setInterval

// greet in 
// setTimeout
function greet(){
    console.log('Hey there !!!')
}
setTimeout(greet, 1000 * 0.5)

// setInterval
let value = 11
let intervalid = null

function counting(){
    value-=1;
    console.log({counter:value})

    if(value===0){
        clearInterval(intervalid)
    }
}
intervalid = setInterval(counting, 1000)