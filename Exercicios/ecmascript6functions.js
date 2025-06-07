function nome(nome='desconhecido'){
    console.log('olá,', nome);
}
let nom2e = 'Jefferson';

nome(nom2e);
nome('Jefferson');
nome();

function soma(number1, number2){
    console.log(number1 + number2);
}

soma(43,98)

function soma2(...numbers){
    let soma = 0;

    for(number of numbers){
        soma += number;
    }

    console.log(soma);
}

soma2(8,8,8,8);