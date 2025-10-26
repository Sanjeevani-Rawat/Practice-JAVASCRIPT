let promise = new Promise((resolve) => resolve("DONE"))
promise.then((res) => console.log(res)).catch((err) => console.log(err))

async function returnSomething(){
    return "San"
}

const result = returnSomething()
console.log(result);
 

async function showResponse(){
    let promise = new Promise((res) => res("Done Done"))
    return promise
}

const promisee = showResponse();
console.log(promisee)
promisee.then((res)=>console.log(res))


async function showResponses(){
    try{
        let prom = new Promise((res, rej)=>res("Promise Done"))
        let res = await prom // func execution stops here until the promise is settled
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
showResponses()




const getUserData = async () => {
    try{
        const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await promise 
        const response = await data.json();
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
getUserData()