function calcularMedia(primeiraNota, segundaNota, terceiraNota) {
    var resultado = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota)) / 3
    return resultado.toFixed(2)
}

console.log(calcularMedia(9,6,7))

console.log(calcularMedia(10,5,6.4))

console.log(calcularMedia("10", "4", "10"))


