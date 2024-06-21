

const soma = (valor) => {
    if(valor = 0){
        return 0;
    }
    return valor + soma(valor - 1)
}

console.log('soma: '. soma())