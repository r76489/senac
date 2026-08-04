console.clear()

const ask = require("readline-sync")
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
}