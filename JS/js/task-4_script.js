const credits = 23580;
const pricePerDroid = 3000;
let message;
  

const result = prompt('Скільки дроїдів ви хочете купити?')
if (result === null) { 
    alert('Скасовано користувачем!');
 } else if (result < credits / pricePerDroid ) {
    alert('Недостатньо коштів на рахунку!');
 }
const totalPrice = (credits / pricePerDroid)

const totalCredits = Math.floor(credits/pricePerDroid);
console.log('Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.')

