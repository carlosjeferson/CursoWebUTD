var number = [];

for(var i = 0; i < 10; i++){
    var numbers = Math.round((Math.random() * 59) + 1);

    number.push(numbers);
}

console.log(number);