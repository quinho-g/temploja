
let aviso = document.getElementById('aviso')
aviso.addEventListener('animationend', ()=> {
    aviso.remove()
})


let titulo = document.getElementById('ti')
let tex = document.getElementById('tex')
let con = 0
function prox() {
    con++
    if(con == 0){
        titulo.innerText = 'Atendimento Personalizado'
        tex.innerHTML = 'Nossa equipe ajuda você a escolher as peças ideais para seu estilo e ocasião.'
    }if(con == 1){
        titulo.innerText = 'Qualidade Selecionada'
        tex.innerHTML = 'Trabalhamos com fornecedores que garantem tecidos duráveis e acabamento impecável.'   
    }if(con == 2){
        titulo.innerText = 'Variedade de Modelos'
        tex.innerHTML = 'Peças para diferentes estilos: casual, social, moderno e elegante.'   
    }if(con == 3){
        titulo.innerText = 'Facilidade na Compra'
        tex.innerHTML = 'Processo simples, rápido e seguro, com suporte direto pelo WhatsApp.'  
        con = -1
    }

}

