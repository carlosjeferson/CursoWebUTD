var numbers = [];
var temp = 0;

for(var i = 0; i < 10; i++){
    var numberRandom = Math.round((Math.random() * 99) + 1);

    numbers.push(numberRandom);
}

for(var atual = 0; atual < numbers.length; atual++){
    for(var proximo = atual + 1; proximo < numbers.length; proximo++){
        if(numbers[atual] < numbers[proximo]){
            temp = numbers[atual];

            numbers[atual] = numbers[proximo];

            numbers[proximo] = temp;
        }
    }
}

console.log(numbers);