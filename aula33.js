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
//apenas um para dar true
const resultadoSome = lista.some((objeto) => objeto.idade > 85)
//Todos dever ser acima d 50 para ser true(tenta o 10 pra ver)
const resultadoEvery = lista.every((objeto) => objeto.idade > 60)

console.log("some", resultadoSome);

console.log("Every", resultadoEvery);