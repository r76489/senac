const imagem = document.querySelector("#imagem")
const mensagem = document.querySelector("#mensagem")
const botao = document.querySelector("#botao")

console.log(imagem.setAttribute("src", "assets/gatopreto.jpg"), imagem.setAttribute("alt", "Gato serio"))
console.log(imagem.getAttribute("src"), imagem.getAttribute("alt"))

botao.addEventListener("click", function () {
    mensagem.textContent = "Parabens, voce clicou no botao!"
})