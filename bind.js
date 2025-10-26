// POLYFILL for BIND

const obj = {
    name: "Sanjeevani",
    city: "Dwarka",
}

function displayUserInfo(state){
    console.log(`Hi I am ${this.name} from ${this.city}, ${state}. `)
}

const bindFunc = displayUserInfo.bind(obj, "Delhi")
console.log(bindFunc)
bindFunc()

Function.prototype.myBind = function(context, ...args){
    context.wrapperFunc = this;
    return function(){
        context.wrapperFunc(...args)
        delete context.wrapperFunc
    }
}

const bindFunc2 = displayUserInfo.myBind(obj, "delhi")
console.log(bindFunc2)
bindFunc2()