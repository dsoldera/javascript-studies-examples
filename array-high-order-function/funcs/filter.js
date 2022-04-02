const { childrenAge, mailList } = require('../data.js');
/**
 * FILTER
 * cria um novo array, fazendo uma filtragem, return true ou false e
 * devolve um array novo filtrado
 */

//1. Selecionar as crianças entre 2 e 11 anos 
console.table(childrenAge);

// USING FUNCTION MORE OPEN
function fChildrenAge(element, index, array) {
    if (element >= 2 && element <= 11) return true;
    return false;
}
const childrenfiltered1 = childrenAge.filter(fChildrenAge);

// ANOTHER WAY TO DO THE SAME
const childrenfiltered2 = childrenAge.filter((el) => { return el >= 2 && el <= 11 });

console.table(childrenfiltered1);
console.table(childrenfiltered2);

/*
. 
. 
.
.
.
.
*/

// 2. filtrar os email das rocketseat
const mailfiltered = mailList.filter(mail => mail.includes('@rocketseat.com'));

console.table(mailfiltered);