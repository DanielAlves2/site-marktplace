class produto{
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque
    
    alterarPreco(novoPreco){
        if (novoPreco >= 0 ){
            this.preco =  novoPreco;
              
        }
   
    }


adicionarEstoque(quantidade){
    this.quantidade_em_estoque += quantidade;

}
removerEstoque(quantidade){
    const novoEstoque = this.quantidade_em_estoque - quantidade;
    if (novoEstoque >=0 ){    
        this.quantidade_em_estoque = novoEstoque;
    }else{
        throw Error('Estoque ira ficar negativo')
    }
}
constructor(nome, descricao, codigo){
this.nome = nome;
this.descricao = descricao;
this.codigo = codigo;
this.preco = 0;
this.quantidade_em_estoque = 0;
}
}
class Smartphone extends produto {
    marca;
    modelo;
    sistema_operacional;

    descricao(){
        rturn `
        nome: ${this.nome} /n
        preco: ${this.preco} /n
        descricao: ${this.descricao}/n
        Quantidade: ${this.quantidade_em_estoque}/n 
        marca: ${this.marca} /n
        modelo: ${this.modelo} /n
        sistema: ${this.sistema_operacional} /n

        `
    }
constructor(nome, descricao, codigo, marca, modelo, sistema_operacional){
    super(nome, descricao, codigo);
    this.marca = marca;
    this.modelo = modelo;
    this.sistema_operacional =  sistema_operacional;

} 
}

const smartphone1 =new Smartphone(
    'iphone', 
    'Celular',
    'jjhhhhkkk',
    'Apple',
    'SE',
    'i0515'

);

smartphone1.alterarPreco(300.30 );
smartphone1.adicionarEstoque(5);
smartphone1.removerEstoque(9);

console.log(smartphone1);