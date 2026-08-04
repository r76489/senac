const ask = require("readline-sync")
let pokemon = ask.question ("Escolha um pokemon inicial: ")

switch (pokemon){
    case "Bulbasauro":
        console.log("Tipo planta e veneno")
        break
    case "Charmander":
        console.log("Tipo fogo")
        break
    case "Squirtle":
        console.log("Tipo água")
        break
    default:
        console.log("Pokemon não encontrado")
}