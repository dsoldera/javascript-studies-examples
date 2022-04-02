/**
 * Promise
 * return resolve -> deu tudo certo
 * return reject -> deu algo errado
 */

let aceitar = true;
console.log('pedir Uber');

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('o carro chegou')
    }
    return reject('pedido negado')
})

console.log('aguardando')

promessa
    .then(result => { console.log(result) })
    .catch(error => console.log(error))
    .finally(() => console.log('promessa finalizada'))