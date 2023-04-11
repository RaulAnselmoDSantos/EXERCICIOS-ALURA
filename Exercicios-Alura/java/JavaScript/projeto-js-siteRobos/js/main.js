const subtrair = document.querySelector('#subtrair')
const soma = document.querySelector('#somar')
const braco = document.querySelector('#braco')



soma.addEventListener("click", () => {manipuladados("somar")})

subtrair.addEventListener("click", () => {manipuladados("subtrair")})


function manipuladados(operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}

