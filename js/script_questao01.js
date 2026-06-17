//ESTRUTURAS DE REPETIÇÕES
//todo e em qualquer estrutura de repetição, obrigatoriamente precisa ter uma condição de parada
const btnContar = document.querySelector("#btnContar")
const resultado = document.querySelector("#resultado")


btnContar.addEventListener("click", () => {

    let contador = 0;

    for (let numero = 1; numero <= 1000; numero++) {

        if (numero % 7 === 0) {
            contador++
        }
    }

    resultado.textContent =
        `Existem ${contador} números entre 1 e 1000 divisíveis por 7.`
})
