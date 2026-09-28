let slideAtual = 0
const slides = document.querySelector(".slides")
const anterior = document.querySelector("#anterior")
const proximo = document.querySelector("#proximo")

function atualizarCarrossel(){
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}

proximo.addEventListener("click", function(){
    slideAtual++;
    if (slideAtual >= slides.children.length) {
        slideAtual = 0;
    }
    atualizarCarrossel();
})

anterior.addEventListener("click", function(){
    slideAtual--;
    if (slideAtual < 0) {
        slideAtual = slides.children.length -1;
    }
    atualizarCarrossel();
})
