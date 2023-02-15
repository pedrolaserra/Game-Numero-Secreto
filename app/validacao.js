function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>SENHA INCORRETA</div>'
        return
}

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>SENHA INCORRETA: DIGA UM NUMERO ENTRE ${menorValor} e ${maiorValor}.</div>`
        return
}

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>ACESSO LIBERADO.</h2>
        <h3>A SENHA ERA: ${numeroSecreto}.</h3>

        <button id="jogar-novamente" class="btn-jogar">RECOMEÇAR</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O NÚMERO É MENOR <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O NÚMERO É MAIOR <i class="fa-solid fa-arrow-up"></i></div>`
    }


    function chuteForInvalido(numero){
        return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})