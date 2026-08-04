console.clear()

function identifyDayOfWeek(date){
    switch (date){
        case (1):
            console.log("Sunday")
            break
        case (2):
        console.log("Monday")
            break
        case (3):
            console.log("Tuesday")
            break
        case (4):
            console.log("Wednesday")
            break
        case (5):
            console.log("Thursday")
            break
        case (6):
            console.log("Friday")
            break
        case (7):
            console.log("Saturday")
            break
        default:
            console.log("Invalid number")
            break
    }
}

const ask = require("readline-sync")
let dayOfWeek = ask.question("What number of the week? ")

identifyDayOfWeek(Number(dayOfWeek))