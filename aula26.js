 
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
 
 const converterObjeto = (objeto) => {
    return{
   ...objeto,
    nomeIdade: '${objeto.nome} + &{objeto.idade}'
    }
 }
 
  
 
 console.log(lista.map(converterObjeto ));
