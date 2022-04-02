/**
 * Fetch significa buscar
 * ja retorna por si so uma promesa
 */
import fetch from "node-fetch";
// modelo que funciona mas fica inviavel pois muitos fetch e then
// fetch('https://api.github.com/users/dsoldera')
//     .then(response => {
//         response.json()
//             // .then(data => console.log(data))
//             .then(data => {
//                 fetch(data.repos_url)
//                     .then(res => res.json()
//                         .then(d =>
//                             console.log(d)))
//             })
//     })

// mais reduzido usando o poder do encadeamento
fetch('https://api.github.com/users/dsoldera')
    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    .then(d => console.log(d))
    .catch(err => console.log(err))