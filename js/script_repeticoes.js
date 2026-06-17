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

//COLEÇÃO DE DADOS - ARRAY
transporte = ['Bicicleta', 'carro', 'moto', 'ônibus', 'avião', 'tototo']

for(i = 0; i < transporte.length; i++){
    console.log(transporte[i])
}
const divForin = document.querySelector('#div-forin')

//FOR IN
for(let pos in transporte){
    console.log(transporte[pos])
    divForin.innerHTML += `${transporte[pos]} <br>`
}

//for OF

const divForOF = document.querySelector('#div-forof')

for(let elem of transporte){
    divForOF.innerHTML += `${elem} <br>`
}

//COLEÇÃO DE PESSOAS - ARRAY DE OBJETO
const pessoas = [
    {nome: 'Maria', idade: 18, renda: 15000},
    {nome: 'Josefina', idade: 23, renda: 18000},
    {nome: 'Chicó', idade: 32, renda: 1.50},
    {nome: 'João Grilo', idade: 34, renda: 2.20},
]
console.log('----------LISTA POR FOR IN')
for (let indiceObjPessoa in pessoas) {
    console.log(pessoas[indiceObjPessoa].nome, pessoas[indiceObjPessoa].idade, pessoas[indiceObjPessoa].renda)
}
console.log('-----------LISTA POR FOR OF---------')
for(let pessoa of pessoas){
    console.log(pessoa.nome, pessoa.idade, pessoa.renda)
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

pessoas.forEach((elem, i) => {
    divForeach.innerHTML += `${i} - ${elem.nome}, ${elem.idade} anos com renda R$ 
    ${elem.renda.toFixed(2).replace('.', ',')} <br> `
})