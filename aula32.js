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
 lista.sort((a, b) => {
    if (a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }

    return 0;
 });

 console.log(lista)









//idade em ordem crescente
// lista.sort((a, b) => {
  //  if(a.idade < b.idade){
    //    return -1;
    //}
    //if(a.idade > b.idade){
    //    return 1;
    //}

    //return 0;
 //});

 //console.log(lista)