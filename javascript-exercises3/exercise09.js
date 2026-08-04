console.clear()
const ask = require("readline-sync")

function mainMenu(option){
    switch(option){
        case 1:
            function verifyEvenUneven(numb1){
                if (numb1 % 2 === 0 ){
                    console.log("Even number")
                }else {
                    console.log("Uneven number")
                }
            }
            
            let answer = ask.question("What is the number? ")
            
            verifyEvenUneven(Number(answer))
        break
        case 2:
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
            let grade = ask.question("What grade did you get? ")
            
            verifyResults(Number(grade))
        break
        case 3:
let weight = Number(ask.question("What is your weight? "))
let height = Number(ask.question("What is your height? "))

let imc = (weight /(height * height)).toFixed(2)

if(imc < 18.5){
    console.log('Underweight')
}else if(imc > 18.4 && imc < 25){
    console.log("Normal weight")
}else if(imc > 24.9 && imc < 30){
    console.log("Overweight")
}else if(imc > 29.9 && imc < 35){
    console.log("Obesity grade I")
}else if(imc > 34.9 && imc< 40){
    console.log("Obesity grade II")
}else {
    console.log("Obesity grade III")
}           break
        case 4:
            console.clear()
            console.log("Left")
        break
        default:
            console.log("Invalid")
    }
}

let choose = Number(ask.question(`What would you like to do?
    1: Verify even/uneven number
    2: Classify a grade
    3: Calculate IMC
    4: Leave
    
    Select an option: `))

console.log(mainMenu(choose))