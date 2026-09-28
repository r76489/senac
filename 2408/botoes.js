const mensagem = document.querySelector("#mensagem")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const contador = document.querySelector("#contador")
const diminuir = document.querySelector("#diminuir")
const aumentar = document.querySelector("#aumentar")
const quadrado = document.querySelector("#quadrado")
const campo = document.querySelector("#campo")
const resultado = document.querySelector("#resultado")

btn1.addEventListener("click", function () {
    mensagem.textContent = "Olá usuário!"
})

btn2.addEventListener("click", function () {
    mensagem.textContent = "Até mais!"
})

btn3.addEventListener("click", function () {
    mensagem.textContent = "Estou aprendendo Javascript!"
})

diminuir.addEventListener("click", function () {
    contador.textContent = Number(contador.textContent) - 1
})

aumentar.addEventListener("click", function () {
    contador.textContent = Number(contador.textContent) + 1
})

quadrado.addEventListener("mouseenter", function () {
    quadrado.textContent = "Mouse entrou"
})

quadrado.addEventListener("mouseleave", function () {
    quadrado.textContent = "Mouse saiu"
})

campo.addEventListener("input", function () {
    resultado.textContent = campo.value
})