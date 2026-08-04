console.clear()

function triangleType(side1, side2, side3){
    if (side1 === side2 && side2 === side3){
        console.log("Equilateral triangle")
    }else if (side1 === side2 || side1 === side3 || side2 === side3){
        console.log("Isosceles triangle")
    }else {
        console.log("Scalene triangle")
    }
}

const ask = require("readline-sync")
let numb1 = Number(ask.question("First side: "))
let numb2 = Number(ask.question("Second side: "))
let numb3 = Number(ask.question("Third side: "))

console.clear()
console.log(triangleType(numb1, numb2, numb3))