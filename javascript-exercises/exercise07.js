let age = 34
let driversLicense = true

console.clear()

if(age >18 && driversLicense === true){
    console.log("You can drive!")
} else if (age < 18 && driversLicense === true){
    console.log("You cannot drive, you're under 18")
} else if (age > 18 && driversLicense === false){
    console.log("You cannot drive, you don't have a driver's license")
} else {
    console.log("You cannot drive, you're under 18 and you don't have a driver's license")
}