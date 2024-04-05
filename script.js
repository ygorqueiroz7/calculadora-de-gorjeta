let conta = 0
let pessoas = 0
let porcentagem = 0
const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value == "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPOrcentagemBotao)
})

function receberPOrcentagemBotao(evento) {
    botoesGorjeta.forEach(botao =>{
botao.classList.remove("botao-ativo")
        
        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })


    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {


        console.log(porcentagem)
    }
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPOrcentagemBotao)

function calcular () {
    if(conta ! == 0 porcentagem  gorjeta !==  pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem / pessoas) .toFixed (2)`


        const strong = document.querySelector("total > strong")
        strongGorjetaTotal.innerHTML = `R$ { ((conta + (conta * porcentagem)) / pessoas))} .toFixed(2)}`
    }
}

const botaoLimpar = document.querySelector(".resultados button") {/}
botaoLimpar.addEventListener("click", limpar)

function limpar () {

    contaInput.value = ""
}

botoesGorjeta.entries.forEach(botao => {
    botao.classList.remove("botao-ativo")
})

gorjetaInput.value =""

pessoasInput.value = ""

document.querySelector("gorjeta-total > strong") . innerHTML = "R$ 0.00"
document.querySelector (".total > strong"). innerHTML = "R$ 0.00"

conta = 0
porcentagem = 0
pessoas = 0 