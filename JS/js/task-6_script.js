let input;
let total = 0;

while(true) {
    input = prompt('Введіть число');

    if (input === null) {
    alert('Загальна сума чисел дорівнює ${total}');
    break;
    }

    total += Number(input);
     
}