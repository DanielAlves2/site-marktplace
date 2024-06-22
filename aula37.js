class Usuario {
    email;
    senha;
    nome;


    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;

    }


    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        
    }
}

class Administrador extends Usuario{
  permissoes;
  constructor(email, senha, nome, permissoes){
    super(email, senha, nome);
    this.permissoes = permissoes;
    
}
}

class Comprador extends Usuario {
 
   compras;
}
const admin = new Administrador('email@email.com', 'senha', 'nome', [11,6]);
const usuario = new Usuario('email', 'senha', 'nome');

const comprador = new Comprador();
comprador.senha = 'nova senha';

console.log(usuario.validarSenha('email', 'senha'));

console.log(admin.validarSenha('email', 'senha'));