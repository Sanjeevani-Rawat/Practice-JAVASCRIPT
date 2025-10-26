// POLYFILL for CALL

const obj = {
    name: "Sanjeevani",
    city: "Dwarka",
}

function displayUserInfo(state){
    console.log(`Hi I am ${this.name} from ${this.city}, ${state}. `)
}

displayUserInfo.call(obj, "Delhi")

Function.prototype.myCall = function(context, ...args){
    console.log(context)
    console.log(this)

    console.log("")

    context.showMessage = this;
    context.showMessage(...args)
    // delete context.showMessage
}
displayUserInfo.myCall(obj, "Delhi")
console.log(obj)


console.log("")
Function.prototype.myApply = function(context, args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage
}
displayUserInfo.myApply(obj, ["delhi"])
console.log(obj)