import axios from 'axios';

/**
 * Promise.all recebe um array de requisições
 * retorna um array de promesas tb
 */
Promise.all([
    axios.get('https://api.github.com/users/dsoldera'),
    axios.get('https://api.github.com/users/dsoldera/repos')
])
    .then(responses => {
        console.log(responses[0].data.login)
        console.log(responses[1].data.length)
    })
    .catch(err => console.log(err.message))