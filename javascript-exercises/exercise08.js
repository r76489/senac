let temperature = 36

console.clear()

if(temperature < 10){
    console.log("Very cold")
} else if(temperature >9 && temperature<18){
    console.log("Cold")
} else if(temperature >17 && temperature <26){
    console.log("Pleasant")
} else if(temperature >25 && temperature <33){
    console.log("Hot")
}else {
    console.log("Very hot")
}