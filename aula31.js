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


 const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
 }
 
 const pessoas = lista.reduce(funcaoReduce, {}); 
 
 const chaves = Object.keys(pessoas);

 const listaDevolta = chaves.map((chave) => ({nome: chave, idade: pessoas[chave].idade}))
 //console.log(pessoas);
 //console.log(chaves);
 
 console.log(listaDevolta);








  //const pessoasArray = lista.reduce((acc, objeto) => { 
    //acc.push(objeto.idade);
   // return acc;
 //}, []);

 //console.log(pessoas);
 //console.log(pessoas.marcos.idade);
