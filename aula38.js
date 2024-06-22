  
  
  const propridadePadrao = (valorInicial) => ({
        value: valorInicial,
        writable: false, // se true => suario.nome = novo nome
        configurable: false, // se estier true => deletar nome
        enumerable: true, // se treu  => sera exibido no objeto
    })

  
  
  class Usuario {
    
    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        Object.defineProperties(this,  {
            nome: propridadePadrao(nome),
            senha:propridadePadrao(senha),
            email: propridadePadrao(email)
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

  
console.log(usuario);