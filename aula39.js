const propridadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se true => suario.nome = novo nome
    configurable: false, // se estier true => deletar nome
    enumerable: true, // se treu  => sera exibido no objeto
})



class Usuario {

constructor(email, senha, nome) {
    Object.defineProperties(this,  {
        nome: {
            get: () => nome,
            set: (value) => nome = value
        },
        senha:{
            get: () => senha,
            set: (value) => { 
                if (value.length < 4) {
                    throw new TypeError('Deve ter pelo menos 4 letras')
                }

            }
        },
        email: {
        get: () => email,
        set: (value) => email = value
        }
    })
}  
}  
    
    
    
   // Object.defineProperty(this, 'nome',{
     //   value: nome,
       // writable: false, // se true => suario.nome = novo nome
        //configurable: false, // se estier true => deletar nome
        //enumerable: true, // se treu  => sera exibido no objeto
    //})

const usuario =  new Usuario('emails', 'senhas', 'nomes');
usuario.senha = '@daes';

console.log(usuario.senha);