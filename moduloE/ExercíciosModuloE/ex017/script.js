function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for( var c = 1; c <= f; c += p){
                res.innerHTML +=/*concatenação*/ `${c}` \u{1f449} //Emoji no JS
            }
        } else {
            //Contagem regressiva
            for( var c = 1; c >= f; c -= p){
                res.innerHTML +=/*concatenação*/ `${c}` \u{1f449} //Emoji no JS
            }
        } res.innerHTML += \u{1F3C1}
}