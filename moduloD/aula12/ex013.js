var agora = new Date() //Pegar o horário atual
var hora = agora.getHours()
console.log('Agora são eatamente ${hora} horas.')
if(hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}