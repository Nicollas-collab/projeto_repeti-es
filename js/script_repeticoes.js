//ESTRUTURAS DE REPETIÇÕES
//todo e em qualquer estrutura de repetição, obrigatoriamente precisa ter uma condição de parada
const divFor = document.querySelector('#div-for')
for (i = 0; i < 10; i++) {
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR 
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0, contPar = 0; contImpar = 0
let acum = 0.0

btnNum1.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum1.value)

    cont++
    acum += numDigitado

    if (numDigitado % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }

    divResult.innerHTML = `Total de número digitado ${cont} <br> 
A soma dos números digitado ${acum} <br>
Total de número Par digitado: ${contPar} <br>
Total de número impar digitado: ${contImpar} <br>`

    inputNum1.value = ''
})

//REPETIÇÃO COM WHILE
const inputFrase = document.querySelector('#msg')
const inputNumRepeticao = document.querySelector('#numRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')

let contFrase = 0
let totalRepeticao = 0

btnExibir.addEventListener('click', (evt) => {
    totalRepeticao = Number(inputNumRepeticao.value)

    while (totalRepeticao > contFrase) {
        divResultFrase.innerHTML += `${contFrase + 1} - ${inputFrase.value} <br>`
        contFrase++
    }
})














