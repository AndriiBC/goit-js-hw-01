const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

 const result = prompt('Введіть пароль адміністратора') ;

if (result === null) { 
    alert('Скасовано користувачем!');
 } else if (result === 'jqueryismyjam') {
    alert('Ласкаво просимо!');
 } else if (result !== null && 'jqueryismyjam') {
    alert('Доступ заборонений, невірний пароль!');
 }
