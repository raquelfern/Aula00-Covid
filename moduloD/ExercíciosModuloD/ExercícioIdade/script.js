function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'criançaH.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemH.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' //centraliza
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //Adiciona um elemento, no caso o img
    }
}