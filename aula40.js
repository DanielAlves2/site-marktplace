const coisa = {
    abc: 'abece',
    bcd:'becede',
    cde: 'cedee',
    deg: 'deege'
}

const novoCoisa = {
  ...coisa,
    final: 'FINAL'
}


const lista = [1, 2, 3, 4, 5];
const lista2 =  [6, 7, 8, 9, 10];

const listaJunta = {
    ...lista, 
    ...lista2
}
//console.log(coisa)
//console.log(novoCoisa)
//console.log(lista)
//console.log(lista2)
console.log(listaJunta);
//speed