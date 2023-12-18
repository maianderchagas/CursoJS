function contar(){
    //Todas as variaveis
    var inicio = window.document.getElementById('inicio')
    var i = Number(inicio.value)
    var fim = window.document.getElementById('fim')
    var f = Number(fim.value)
    var passo = window.document.getElementById('passo')
    var p = Number(passo.value)
    var res = document.getElementById('res')
    //Se qualquer do numeros estiverem vazios = 'MSG ERRO'
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'IMPOSSÍVEL FAZER CONTAGEM!'
        alert('[ERRO] Faltam dados...')
    }else{
        res.innerHTML= 'Contando... '
        if(i < f){
            //se 'p' menor que 1(impossivel contar)
            if (p<=0){
                window.alert('Passo inválido')
            }
            //contagem crescente
            for (var c = i; c<=f ; c += p  ){
                
                res.innerHTML += `${c}`
                if (c < f){
                    res.innerHTML+= '\u{27A1}'
                }else{
                    res.innerHTML += ' Fim...'
                }
            
            }
        }else{
            //contagem decrescente
            for(var c = i; c >= f; c-=p){
            res.innerHTML += `${c}`
                if (c > f){
                    res.innerHTML+= '\u{27A1}'
                }else{
                    res.innerHTML += ' Fim...' 

                }               
            }       
        }
    }
}
