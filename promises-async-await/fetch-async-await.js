/**
 * o objetivo de user async await e evitar um encadeamento
 * de then... then... de uma forma que trabalha os valores
 * assim que retornar a resposta
 */
import fetch from "node-fetch";

async function start() {
    const url = 'https://api.github.com/users/dsoldera';

    // FORMA EXTENSA
    // try {
    //     const response = await fetch(url)
    //     const user = await response.json();
    //     const reposResponse = await fetch(user.repos_url);
    //     const repos = await reposResponse.json()
    //     console.log(repos)
    // } catch (e) {
    //     console.log(e)
    // }

    // FORMA REDUZIDA
    const user = await fetch(url).then(r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json())
    console.log(repos)
}

start()