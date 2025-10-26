let promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise 1 resolved"), 1000))
let promise2 = new Promise((resolve, reject) => setTimeout(()=> reject("Promise 2 rejected"), 2000))
let promise3 = new Promise(resolve => setTimeout(()=> resolve("Promise 3 resolved"), 3000))

let arrOfPromises = [promise1, promise2, promise3]

let promise = Promise.allSettled(arrOfPromises)
console.log(promise)
