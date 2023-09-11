function contar() {
    var numIniElement = document.querySelector('#numini');
    var numFimElement = document.querySelector('#numfim');
    var numpassElement = document.querySelector('#numpass');

    var numIni = Number(numIniElement.value);
    var numFim = Number(numFimElement.value);
    var numpass = Number(numpassElement.value);
    var resultado = document.getElementById('res')

    if (numIni == 0 || numFim == 0 || numpass.length == 0) {
        alert('Erro, verifique os dados e tente novamente.');
    } else{
        resultado.innerHTML = 'Contando: '

        if (numpass <= 0 ){
            alert('Passo inválido! Considerando Passo "1"')
            numpass = 1
        }

        if(numIni <= numFim){
            for (let c = numIni; c <= numFim ; c += numpass){
                resultado.innerHTML += `${c} \u{1F449}`
        }
        } else {
            for (let c = numIni; c >= numFim ; c -= numpass){
                resultado.innerHTML += `${c} \u{1F449}`

            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}