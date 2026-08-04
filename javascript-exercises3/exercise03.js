console.clear()

function verifyResults(result){
    if(result === 9 || result === 10){
        console.log("Excellent")
    }else if(result === 7 || result === 8){
        console.log("Good")
    }else if(result === 5 || result === 6){
        console.log("Regular")
    }else if(result < 5){
        console.log("Failed")
    }else {
        console.log("Invalid")
    }
}

const ask = require("readline-sync")
let grade = ask.question("What grade did you get? ")

verifyResults(Number(grade))