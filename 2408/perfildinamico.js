const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const cidade = document.querySelector("#cidade")
const imagem = document.querySelector("#imagem")
const botao = document.querySelector("#botao")

nome.textContent = "Maria"
idade.textContent = "18"
cidade.textContent = "Sao Leopoldo"

botao.addEventListener("click", function () {
    if(imagem.getAttribute("src") === "assets/gato.png"){
        imagem.src = "assets/gatopreto.jpg"
        imagem.alt = "Gato serio"
    } else {
        imagem.src = "assets/gato.png"
    }
})