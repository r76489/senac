console.clear()

const ask = require('readline-sync')
let name = ask.question("What is your name? ")

name.trim()

if (name.includes(" ")) {
    console.log("Invalid")
} else if (name.length <3) {
    console.log("Too short")
}else if (name.length >15) {
    console.log("Too long")
}else {
    console.log(`
    Your name is: ${name.toLowerCase()}!`)
}