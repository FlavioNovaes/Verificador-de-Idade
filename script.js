function verificar() {
    var nascimento = document.getElementById('ano-nascimento')
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('resultado')
    var idade = ano - Number(nascimento.value)
    var fsex = document.getElementsByName('radsex')
    var genero = ''

    if (ano < Number(nascimento.value)) {
        window.alert('[ERRO] Verifique os dados inseridos!')
    } else {
        if (fsex[0].checked) {
            genero = 'homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
        }

        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos!`
    }
}