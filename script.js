alert(`Hello World`)

let n1 = Number(prompt(`Digite o primeiro valor:`))
let n2 = Number(prompt(`Digite o segundo valor: `))
const soma = n1 + n2
const subtracao = n1 - n2
const multiplica = n1 * n2
const divisao = n1 / n2

alert(`A soma desses valores é: ${soma}
       A subtração desses valores é: ${subtracao}
       A multiplicação desses valores é: ${multiplica}
       A divisão desses valores é: ${divisao}
       `)

let valor = prompt(`Digite um valor para saber se ele é um número ou não`)

if(!isNaN(valor)){
    alert(`É um número`)
}else{
    alert(`Não é um número`)
}

let valorString = prompt(`Digite um valor para saber se ele é uma string ou não`)
if(!isNaN(valorString)){
    alert(`Não é uma String`)
}else{
    alert(`É uma String`)
}

let parOuImpar = prompt(`Digite um valor para saber se o seu valor é par ou ímpar`)

if(parOuImpar % 2 === 0){
    alert(`Seu valor é par`)
}else{
    alert(`Seu valor é ímpar`)
}