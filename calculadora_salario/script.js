
function calcularSalario() {

    var salario = document.getElementById("salarioBruto").value
    var fgts = salario * 0.08;

    // Calculando o INSS
    var inss = 0
    var porcentagemInss = 0

    if (salario <= 1302) {
        inss = salario * 0.075 // 7.5%
        porcentagemInss =  "7%"
    } else if (salario >= 1302.01 && salario <= 2571.29) {
        inss = salario * 0.09 // 9%
        porcentagemInss =  "9%"
    } else if (salario >= 2571.30 && salario <= 3856.94) {
        inss = salario * 0.12 // 12%
        porcentagemInss =  "12%"
    } else {
        inss = salario * 0.14 //14%
        porcentagemInss =  "14%"
    }

    // Calculando imposto de renda

    var impostoDeRenda = 0
    var porcentagemImpostoRenda = 0

    if (salario >= 1903.99 && salario <= 2826.65) {
        impostoDeRenda = salario * 0.075 // 7.5%
        porcentagemImpostoRenda = "7.5%"
    } else if (salario >= 2826.66 && salario <= 3751.05) {
        impostoDeRenda = salario * 0.15 // 15%
        porcentagemImpostoRenda = "15%"
    } else if (salario >= 3751.06 && salario <= 4664.68) {
        impostoDeRenda = salario * 0.225
        porcentagemImpostoRenda = "22.5%"
    } else if (salario > 4664.68) {
        impostoDeRenda = salario * 0.275
        porcentagemImpostoRenda = "27.5%"
    }

    var resultado = salario - inss - impostoDeRenda

    var salarioDigitado = document.getElementById('salarioDigitado')
    salarioDigitado.innerHTML = salario

    var porcentagemInssTabela = document.getElementById('porcentagemInssTabela')
    porcentagemInssTabela.innerHTML = porcentagemInss
    var valorDescontoInss = document.getElementById('valorDescontoInss')
    valorDescontoInss.innerHTML = inss

    var porcentagemImpostoRendaTabela = document.getElementById('porcentagemImpostoRendaTabela')
    porcentagemImpostoRendaTabela.innerHTML = porcentagemImpostoRenda
    var valorDescontadoImpostoDeRenda = document.getElementById('valorDescontadoImpostoDeRenda')
    valorDescontadoImpostoDeRenda.innerHTML = impostoDeRenda

    var tabelaResultado = document.getElementById('tabelaResultado')
    tabelaResultado.removeAttribute('hidden')
}


