let promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise 1 resolved"), 1000))
let promise2 = new Promise(resolve => setTimeout(()=> resolve("Promise 2 resolved"), 2000))
let promise3 = new Promise(resolve => setTimeout(()=> resolve("Promise 3 resolved"), 3000))

// promise1.then((res) => console.log(res))
// promise2.then((res) => console.log(res))
// promise3.then((res) => console.log(res))

let arrOfPromises = [promise1, promise2, promise3]

let promise = Promise.all(arrOfPromises)
// console.log(promise)
promise.then((res) => console.log(res)).catch((err) => console.log(err))



console.log("")

let users = ["Sanjeevani-Rawat", "prakashsakari"]

// let promise4 = fetch("https://github.com/KZarzour/Password-Generator")
// let promise5 = fetch("https://github.com/LadybirdBrowser/ladybird")

let arrOfPromisess = users.map((user) => fetch(`https://github.com/${user}`))
console.log(arrOfPromisess)

let prom = Promise.all(arrOfPromisess)
// console.log(prom)
prom.then((response) => response.forEach((data) => console.log(data.url))).catch((err) => console.log(err.message))