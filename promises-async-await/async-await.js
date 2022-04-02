// UMA REQUISICAO NORMAL DE PROMESA DO JS
const promessa = new Promise((resolve, rejesct) => {
    return resolve('ok')
});


/**
 * uma funcao que esta esperando (await) o retorno da promessa
 * para executar assincronamente
 * usa o try catch finally para poder pegar o erro
 * o finally nao é obrigatoria
 */
async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }

}

start()