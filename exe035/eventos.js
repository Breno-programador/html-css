function relatorio() {
    var velocidade = document.getElementById(`relatorio`)

if (velocidade > 80) {
    velocidade.innerHTML(`Sua velocidade atual é de ${velocidade} Km/h`)
}else { // Se não
    console.log(`Boa Viagem! Use sempre cinto de segurança.`)
}
}
