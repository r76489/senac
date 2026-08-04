console.clear()

const ask = require("readline-sync")
let email = ask.question("What is your email? ")

if (email.includes("@", ".")){
    console.log("Valid email")
}else {
    console.log("Invalid email")
}
