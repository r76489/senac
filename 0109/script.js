const numb1 = document.querySelector("#numb1")
const numb2 = document.querySelector("#numb2")
const result = document.querySelector("#result")
const add = document.querySelector("#button__add")
const subtract = document.querySelector("#button__subtract")
const multiply = document.querySelector("#button__multiply")
const divide = document.querySelector("#button__divide")

add.addEventListener("click", function(){
    result.textContent = Number(numb1.value) + Number(numb2.value)
})

subtract.addEventListener("click", function(){
    result.textContent = Number(numb1.value) - Number(numb2.value)
})

multiply.addEventListener("click", function(){
    result.textContent = Number(numb1.value) * Number(numb2.value)
})

divide.addEventListener("click", function(){
    result.textContent = Number(numb1.value) / Number(numb2.value)
})

/*--------------------------------------------------------------------------

let slideAtual = 0
const slides = document.querySelector(".slide")
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
        slideAtual = slides.children.length -2;
    }
    atualizarCarrossel();
}) 
    
        <section id="project__section" class="slide">
            <h1>Sobre a calculadora</h1>
            <p>A Calculadora do Garfield foi desenvolvida no Curso de Interfaces de Sistemas do SENAC, no período de
                setembro, utilizando ferramentas como javascript, html e css. É uma calculadora com uma foto do
                Garfield.
            </p>
        </section>
    </section>

    <section id="button__slide">
        <button id="anterior" class="button">Anterior</button>
        <button id="proximo" class="button">Proximo</button>
    </section>
    */