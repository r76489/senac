const card = document.querySelector("#card")
const mudar = document.querySelector("#mudar")

mudar.addEventListener("click", function() {
    card.classList.toggle("ativo")
})
