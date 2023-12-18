let num = document.getElementById('num')
let lista = document.getElementById('cxnum')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n)>=1 && Number(n) <=100){
        return true
    } else {
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado... `
        lista.appendChild(item)
    }else{
        window.alert('[ERRO] Digite um valor para ser adicionado à lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma+=valores[pos]
            media = soma/tot
            if(valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML +=  `<p>Foram adicionados um total de ${tot} valores.</p>`
        res.innerHTML +=  `<p>O maior valor adicionado foi o numero ${maior}</p>`
        res.innerHTML +=  `<p>O menor valor adicionado foi o numero ${menor}</p>`
        res.innerHTML +=  `<p>A soma de todos os valores é de ${soma}.</p>`
        res.innerHTML +=  `<p>A média de valores é de ${media}.`

    }
}



