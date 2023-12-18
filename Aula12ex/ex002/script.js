function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('res')
    if (Number(fano.value) > ano || fano.value.length == 0 ){//se FAno estiver vazio ou for maior que ano atual
        alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        //var msex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (fsex[0].checked){
            gen = 'Homem'
                if (idade<13){
                
                }else if (idade<18){
            
                }else if (idade<50){
                
                }else{
                
                }
        }else if(fsex[1].checked){
            gen = 'Mulher'
                if (idade<13){
                    
                }else if (idade<18){
            
                }else if (idade<50){
                
                }else{
                }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} de ${idade} anos`

        
    }

}