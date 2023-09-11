function calcular() {
    let a = document.getElementById('valini')
    let numentrada = Number(a.value)
    let resultado = document.getElementById('res')

     if (numentrada == 0) {
        resultado.innerHTML = '<strong> Preencha o Campo'
        }

    else{resultado.innerHTML =''

            for (let i= 1 ; i <= 10 ; i++){
                multip = numentrada * i
                resultado.innerHTML += `${numentrada} x ${i} = ${multip} <br>`
                }

        
    }
    
}