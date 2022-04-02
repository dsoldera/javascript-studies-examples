// FILTER
//filtra o array e retorna todas as opcoes da condicao que passei
// no caso abaixo removendo o item se ele tiver
const arrayF1 = ['carros', 'motos', 'cavalos', 'bicicletas'];
const arrayF2 = arrayF1.filter(item => {
    return item !== 'motos';
});
console.log('Filter >', arrayF2);

// FIND
// filtra e retorna o item que achou (um) e para
const arrayFi1 = ['computador', 'teclado', 'mouse', 'ventilador']
const arrayFi2 = arrayFi1.find(item => {
    return item === 'ventilador';
});
console.log('Find >', arrayFi2);

// MAP
// transforma o array em outro com condição adicionada
// retorna o item e tem a opcao de retornar o index
const arrayM1 = ['banana', 'maca', 'laranja', 'cenoura'];
const arrayM2 = arrayM1.map((fruta, index) => {
    return '<p>posicao ' + index + ' - ' + fruta + '</p>';
})
console.log('Map >', arrayM2);

// INCLUDES
// retorna true ou false se encontrou ou nao o item dentro do array
const arrayI1 = ['#fff', '#000', '#f12', '#3ca', '#fafa2a'];
console.log('INCLUDES > 1 ', arrayI1.includes('#f12'));
console.log('INCLUDES > 2 ', arrayI1.includes('#f122ac'));

// SPREAD
// cria um novo array de outro array adicionando + item
const arrayS1 = [1, 2, 3, 4, 5, 6];
const arrayS2 = [...arrayS1, 7];
console.log('SPREAD >', arrayS2);

// REVERSE
// nao cria um novo array, apenas altera a ordem do original
const arrayR1 = ['batata frita', 'hamburguer', 'pizza', 'mana poke'];
const arrayR2 = [...arrayR1].reverse();
console.log('REVERSE > ', arrayR2);

//FOREACH
// nao cria nada, nao muda nada se nao quiser, apenas passa pelo array
// nao precisa de return
const arrayFe = ['cachorrinho', 'gatinho', 'passarinho', 'peixinho'];
let n = 1;
arrayFe.forEach(item => {
    console.log('FOR EACH ' + n + '>', item);
    n++
});