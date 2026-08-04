console.clear()

function verifyAge(age){
    if(age >= 18){
        console.log("You are an adult")
    }else {
        console.log("You are not an adult")
    }
}

const ask = require("readline-sync")
let ageOfUser = ask.question("How old are you? ")

verifyAge(Number(ageOfUser))

/*function verifyAge(age){
    return age >= 18
} 
    
if(verifyAge(age)){
    console.log("Adult")
}else {
    console.log("Kid")
}*/
