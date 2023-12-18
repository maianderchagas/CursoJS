function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora <= 12) {
        document.body.style.background = 'rgb(168, 184, 189)'
        img.src = "pexels-zen-chung-5749812.jpg"
        msg.innerHTML= `Bom dia... São ${hora}hs da manhã!`
    } 
    else if (hora > 12 && hora <=  18){
        document.body.style.background = "#b3947f"
        img.src = "tarde.jpg"
        msg.innerHTML= `Boa Tarde... São ${hora}hs da tarde`
        document.getElementById('').style.color ='#f2e6d8'
    }
    else{
        img.src = "noite.jpg" 
        msg.innerHTML= `Boa noite... São ${hora}hs da noite. Bons sonhos!`
        document.body.style.background = ' #3e3f43'
    }
}