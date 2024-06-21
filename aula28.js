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

 const filtrarPessoa = (pessoa) => pessoa.nome === 'joao';

 const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 88);


 console.log(listaFiltrada);
