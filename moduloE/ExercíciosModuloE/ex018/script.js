function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${num*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)                        //Adicionar elemento
            c++;
        }
    }
}