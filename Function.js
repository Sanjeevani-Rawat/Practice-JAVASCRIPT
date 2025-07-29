// 1. write a function named makeTea that takes one parameter, typeOfTea and returns a string like Making green tea when called with green tea. store the result in a variable named teaOrder. 
console.log("Ques 1");
let teaOrder = [];
function makeTea(typeOfTea){
    teaOrder.push(typeOfTea)
    return `Making ${typeOfTea}`;
}
console.log(makeTea("Green Tea"));
console.log(makeTea("Chai Tea"));
console.log(makeTea("Herbal Tea"));

console.log(teaOrder)


// 2. create a function named orderTea that takes one parameter, teaType. inside this function, create another function named 'confirmOrder' that returns a msg like order cnfm for chai. call confirmOrder from within orderTea and return the result.
console.log("Ques 2");
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirm for ${teaType}`;
    }
    return confirmOrder();
}
console.log(orderTea("Chai"));
console.log(orderTea("Herbal Tea"))


// 3. write an arrow function named calcTot that takes 2 parameters price and quantity. the func should return the total cost by multiplying the price and quantity. store the result in variable names totCost.
console.log("Ques 3");
let totCost = []
const calcTot = (price, quantity) => {return price*quantity};
totCost.push(calcTot(20, 2));
console.log(totCost)


// 4. write a function names processTeaOrder that takes another func makeTea as a parameter and calls it with the arguement earl grey. return the res of callin makeTea
console.log("Ques 4");
function makeTea(typeOfTea){
    return `this is my makeTea function ${typeOfTea}`;
}
function processTeaOrder(makeTeaFunction){
    return makeTeaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order)


// 5. write a function names createTeaMaker that returns another function. the returned function should tk one parameter, teaType and return a msg like making green tea. store the returned func in a variable named teaMaker and call it with green tea.
console.log("Ques 5");
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker()
console.log(teaMaker)
console.log(createTeaMaker)
console.log(teaMaker())
console.log(teaMaker("Green Tea"))