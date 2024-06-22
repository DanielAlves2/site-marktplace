const lista = [
    {
        nome: 'joão',
        idade: 89,
        cartoes: ['9895', '7689']
    },
    {
        nome: 'jose',
        idade: 67,
        cartoes: ['9898', '7687']
    },
    {
        nome: 'marcos',
        idade: 34,
        cartoes: ['9890', '7680']
    },
    {
        nome: 'lucas',
        idade: 33,
        cartoes: ['9855', '7655']
    }, 
    {
        nome: 'patricio',
        idade: 20,
        cartoes: ['9893', '7681']
    },
    {
        nome: 'alves',
        idade: 15,
        cartoes: ['9892', '7684']
    },
 ]

 const cartoes = lista.flatMap((cartao) => cartao.cartoes);

 console.log(cartoes);