let computer = {cpu: 12}
let lenovo = {screen: "HD",
    __proto__: computer
}
let tomHardware = {}

console.log(`computer`, computer.__proto__);    // dunder
console.log(`lenovo`, lenovo.__proto__);


let car = {
    tyres: 4
}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, car)
console.log(`tesla`, tesla);
console.log(`tesla tyres`, tesla.tyres);

console.log(`tesla`, Object.getPrototypeOf(tesla));
