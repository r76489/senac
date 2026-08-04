console.clear()

const ask = require("readline-sync")

function calculator(numb1, numb2, operator){
    switch(operator){
        case 1:
            return numb1 + numb2
            break
        case 2:
            return numb1 - numb2
            break
        case 3:
            return numb1 * numb2
            break
        case 4:
            return numb1 / numb2
            break
        case 5:
            return numb1 % numb2
            break
        default:
            console.log("Error")
    }
}

let numb1 = Number(ask.question("First number: "))
let numb2 = Number(ask.question("Second number: "))
let operator = Number(ask.question(`
    1: +
    2: -
    3: *
    4: /
    5: %
    
    Select operator:
    `))

console.clear()
console.log(calculator(numb1, numb2, operator))