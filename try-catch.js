const userName = "Sanjeevani"

// console.log(myName)
// console.log(userName)

try{
    console.log(myName)
    someFunction()
} catch (error){
    console.log("Maybe its not defined.")
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    console.log("-------------------------")
} finally{
    console.log("User Name")
}
console.log(userName)