//ESTRUTURAS DE REPETIÇÕES
//todo e em qualquer estrutura de repetição, obrigatoriamente precisa ter uma condição de parada
const campoNumero = document.querySelector("#numero");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");


btnCalcular.addEventListener('click', () => {

    const numero = Number(campoNumero.value)

    if (numero <= 0 || Number(numero) < 1) {
        resultado.textContent = "Digite um número inteiro positivo."
        return
    }

    let divisores = []


    for (let i = 1; i <= numero; i++) {

        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    resultado.textContent =
        `Os divisores de ${numero} são: ${divisores}.`
})