//ESTRUTURAS DE REPETIÇÕES
//todo e em qualquer estrutura de repetição, obrigatoriamente precisa ter uma condição de parada
const btnCadastrar = document.querySelector("#btnCadastrar")
const btnResultado = document.querySelector("#btnResultado")
const resultado = document.querySelector("#resultado")

let totalPessoas = 0
let somaSalarioMasc = 0
let qtdMasc = 0
let mulheres1000a3000 = 0
let mascAcima2000 = 0
let femAcima2000 = 0

btnCadastrar.addEventListener('click', () => {

    let idade = Number(document.querySelector("#idade").value)
    let sexo = document.querySelector("#sexo").value
    let renda = Number(document.querySelector("#renda").value)

    totalPessoas++

    if (sexo === "M" || sexo === "m") {
        somaSalarioMasc += renda
        qtdMasc++
    }

    if (sexo === "F" || sexo === "f") {
        if (renda >= 1000 && renda <= 3000) {
            mulheres1000a3000++
        }
    }

    if (renda >= 2000) {
        if (sexo === "M" || sexo === "m") {
            mascAcima2000++
        }
        if (sexo === "F" || sexo === "f") {
            femAcima2000++
        }
    }

    document.querySelector("#idade").value = ""
    document.querySelector("#sexo").value = ""
    document.querySelector("#renda").value = ""
})

btnResultado.addEventListener("click", () => {

    let mediaMasc = qtdMasc > 0 ? somaSalarioMasc / qtdMasc : 0

    let percMasc = totalPessoas > 0 ? (mascAcima2000 / totalPessoas) * 100 : 0
    let percFem = totalPessoas > 0 ? (femAcima2000 / totalPessoas) * 100 : 0

    resultado.innerHTML =
        `Total de pessoas: ${totalPessoas}<br>
        Média salarial masculino: R$ ${mediaMasc.toFixed(2)}<br>
        Mulheres com renda entre 1000 e 3000: ${mulheres1000a3000}<br>
        Percentual homens com renda >= 2000: ${percMasc.toFixed(2)}%<br>
        Percentual mulheres com renda >= 2000: ${percFem.toFixed(2)}%`
})