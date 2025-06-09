class Pessoa{

    cpf
    nome
    idade
    cartao

    constructor(cpf, nome = "anonimo", idade = "sem limites"){
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
        this.cartao = false;
    }

    pedirCartao(){
        this.cartao = true;
    }

    fazerCommpras(valor){
        if(this.cartao) return valor - valor * 0.1;
        
        return valor;
    }


}

const p1 = new Pessoa("646465", "Bruno", 19);
const p2 = new Pessoa("643465", "Alice", 32);
const p3 = new Pessoa("456465");

console.log(p1);
console.log(p2);
console.log(p3);

p1.pedirCartao();

console.log(p2.fazerCommpras(200));
console.log(p1.fazerCommpras(200));