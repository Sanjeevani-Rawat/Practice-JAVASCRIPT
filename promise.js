// let promise = bookHotelAPI(hotelID)
// {
//     stateRequest --> pending / fulfilled / rejected 
//     response --> value / error 
// }

const URL = "https://jsonplaceholder.typicode.com/todos/1"

let promise1 = fetch(URL);
console.log(promise1)

promise1
.then(function(response){    // to handle when the problem is resolved or fulfilled
    // console.log(response)
    return response.json()  // to get the data we have to return it to json
})
.then(function(data){
    console.log(data)
})
.catch(function(error){   // this is the catch method to handle the error we did chaning
    console.log("Error Occured", error) 
}) 



// CREATING YOUR OWN PROMISE 

const isRequestSuccessful = true;

let promise2 = new Promise((resolve, reject) => {
    if(isRequestSuccessful){
        resolve("promise resolved")
    }
    else{
        const error = new Error("Something went wrong")
        reject(error.message)

    }   
})

console.log(promise2)