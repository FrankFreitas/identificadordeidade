function verificar() {
    var dd = new Date()
    var ano = dd.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//valores do sexo
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.png')
            } else {
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.png')
            } else {
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
