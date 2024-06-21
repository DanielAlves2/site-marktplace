const lista = [
    {
        nome: 'joão',
        idade: 89
    },
    {
        nome: 'jose',
        idade: 67
    },
    {
        nome: 'marcos',
        idade: 34
    },
    {
        nome: 'lucas',
        idade: 33
    }, {
        nome: 'patricio',
        idade: 20
    },
    {
        nome: 'alves',
        idade: 15
    },
 ]

 //for(let i = 0; i < lista.length; i++){
   // console.log(lista[i])
 //} mesma coisa da linha 31

//lista.forEach((objeto) => console.log(objeto));

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
}
lista.forEach(somaIdade);

console.log('soma: ', soma )