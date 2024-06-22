
class Pessoa{
   nome;
   idade;
   filhos; 
   quantosFilhos(){
    if(this.filhos){
        return this.filhos.lenght;
    }
    return 0;
   }
//thefull
   constructor(nome, idade, filhos){
    this.nome = nome;
    this.idade = idade;
    this.filhos = filhos;
   }
}
const filho1 = new Pessoa('henhique', 14);
const filho2 = new Pessoa('martines', 21);
console.log('filho1 tem: ', filho1.quantosFilhos())

const pessoa = new Pessoa('joao', 34, [filho1, filho2]);
console.log('quantos filhos tem: ', pessoa.quantosFilhos())
console.log(pessoa);
