// Função fatorial

function fatorial(n){
    var fat = 1
    for(var i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5 * 4 * 3 * 2 * 1