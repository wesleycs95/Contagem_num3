function contar() {
    var numIniElement = document.querySelector('#numini');
    var numFimElement = document.querySelector('#numfim');
    var numpassElement = document.querySelector('#numpass');

    var numIni = Number(numIniElement.value);
    var numFim = Number(numFimElement.value);
    var numpass = Number(numpassElement.value);

    if (numIni === 0 || numFim === 0 || numpass === 0) {
        alert('Erro, verifique os dados e tente novamente.');
    } else {
        var resultado = ''; // Inicializa uma string vazia para armazenar os números

        while (numIni <= numFim) {
            resultado += numIni + '👈 '; // Adiciona o número à string com um espaço entre eles
            numIni += numpass;
        }

        var resultadoElement = document.getElementById('res');
        resultadoElement.innerHTML =  resultado}; // Insere a string de números no elemento HTML
    }