function verificar() {
    var nascimento = document.getElementById('ano-nascimento')
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('resultado')
    var idade = ano - Number(nascimento.value)
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.width = '150px'
    img.style.height = '150px'
    img.style.display = 'block'
    img.style.margin = 'auto'
    img.style.borderRadius = '50%'

    if (ano < Number(nascimento.value)) {
        window.alert('[ERRO] Verifique os dados inseridos!')
    } else {
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos!`
        msg.appendChild(img)
        
    }
}