//ESTRUTURAS DE REPETIÇÕES
//todo e em qualquer estrutura de repetição, obrigatoriamente precisa ter uma condição de parada
const btnCadastrar = document.querySelector("#btnCadastrar")
const btnResultado = document.querySelector("#btnResultado")
const resultado = document.querySelector("#resultado")

let menor18 = 0
let maior65 = 0
let entre18e65 = 0
let feminino = 0
let masculino = 0

btnCadastrar.addEventListener('click', () => {

    let nome = document.querySelector("#nome").value
    let idade = Number(document.querySelector("#idade").value)
    let sexo = document.querySelector("#sexo").value

    if (idade < 18) {
        menor18++
    }

    if (idade >= 65) {
        maior65++
    }

    if (idade >= 18 && idade < 65) {
        entre18e65++
    }

    if (sexo === "F" || sexo === "f") {
        feminino++
    }

    if (sexo === "M" || sexo === "m") {
        masculino++
    }

    document.querySelector("#nome").value = ""
    document.querySelector("#idade").value = ""
    document.querySelector("#sexo").value = ""
})

btnResultado.addEventListener("click", () => {

    resultado.innerHTML =
        `Menores de 18 anos: ${menor18}<br>
         Maiores ou iguais a 65 anos: ${maior65}<br>
         Entre 18 e 64 anos: ${entre18e65}<br>
         Feminino: ${feminino}<br>
         Masculino: ${masculino}`
})