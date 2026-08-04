console.clear()
const ask = require("readline-sync")

function calculateDiscount(quantity, unitaryPrice) {
    if (quantity >= 10){
        return (unitaryPrice - (unitaryPrice / 100) * 20)
    }else if (quantity >4 && quantity <10){
        return (unitaryPrice - (unitaryPrice / 100) * 10)
    }else {
        console.log("No discount available")
    }
}

let quantity = Number(ask.question("What is the quantity of items? "))
let unitaryPrice = Number(ask.question("What is the price? "))
console.clear()

console.log(`
    Yout total is: ${calculateDiscount(quantity, unitaryPrice)}`)