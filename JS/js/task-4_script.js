const credits = 23580;
const pricePerDroid = 3000;

  

const result = prompt('Скільки дроїдів ви хочете купити?');
if (result === null) { 
    alert('Скасовано користувачем!');
 } else  (credits < pricePerDroid) 
    console.log('Недостатньо коштів на рахунку!');
 
const totalPrice = (result * pricePerDroid);
console.log(totalPrice);

const totalDroids = result;
const totalCredits = (credits - totalPrice);
console.log('Ви купили',totalDroids, 'дроїдів, на рахунку залишилося',totalCredits,' кредитів.');

