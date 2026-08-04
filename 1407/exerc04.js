console.clear()

function toDrive(age, license) {
    if (age > 18 && license === true){
        console.log("Allowed to drive")
    }else {
        console.log("Not allowed to drive")
    }
}

let canYou = toDrive(45, true)

console.log(canYou)