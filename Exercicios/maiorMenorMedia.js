var numbers = [];

var maior = 0;
var menor = 0;
var soma = 0;

for(var i = 0; i < 10; i++){
    var numbersRandom = Math.round((Math.random() * 99) + 1);

    numbers.push(numbersRandom);
}

for(var i = 0; i < numbers.length; i++){
    if(maior < numbers[i]){
        maior = numbers[i];
    }

    if(i === 0){
        menor = numbers[i];
    }

    if(menor > numbers[i]){
        menor = numbers[i];
    }

    soma += numbers[i];
}

console.log("Lista:", numbers);
console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Soma:", soma);
console.log("Média:", soma/numbers.length);