console.clear()

const ask = require("readline-sync")
let cep = Number(ask.question("What is your CEP? ").replace("-", ""))

Number.isNaN(cep)
cep.lenght() === 8