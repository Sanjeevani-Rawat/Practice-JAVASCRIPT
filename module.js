// common js module
// ECM ??
// dynamic imports ?? 

const allTheModules = require("./moduleUtils.js");
console.log(allTheModules)      //   { greet: [Function: greet], print: [Function: print], addSum: [Function: addSum] }

// print(greet("Sanjeevani"))
allTheModules.print(allTheModules.greet("Sanjeevani"))

// destructuring 
const {addSum} = require("./moduleUtils.js");
console.log(addSum(2,3))













// import modules from "./moduleUtils.js";

// const {mult} = modules;
// console.log(mult(2, 8))