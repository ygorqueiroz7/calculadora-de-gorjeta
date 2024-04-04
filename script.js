let conta = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", recebervalorconta)

function recebervalorconta(event) {
    conta = number(evento.target.value)
}

const pessoasinput = document.querySelector(#"pessoas")
pessoasinput.addEventListener("input", receberquantidadePessoas)

function receberquantidadePessoas(evento) {
    if(evento.target.value == "0") {
        const paragrafoerro = document.querySelector(".pessoas #erro")
        paragrafoerro.style.display = "block"

        const diverro = document.querySelector(".pessoas .input-box")
        diverro.setAttribute("id", "erro-div")
    }else {
        paragrafoerro.style.display = "none"
        diverro.setAttribute("id", "")
        pessoas= Number(evento.target.value)
    }

