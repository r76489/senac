console.clear()

function verifyEvenUneven(numb1){
    if (numb1 % 2 === 0 ){
        console.log("Even number")
    }else {
        console.log("Uneven number")
    }
}

const ask = require("readline-sync")
let answer = ask.question("What is the number? ")

verifyEvenUneven(Number(answer))
