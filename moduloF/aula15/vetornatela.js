var valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
----Percurso para exibição do vetor 
for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//----Forma simplificada:
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

