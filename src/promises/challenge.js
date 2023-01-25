//vamos a consumir una API usando promesas y fetch 

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'; //Ruta de la API a llamar

function fetchData(url) {
    return fetch(url);
}

/*
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log("VGH");
    })
    .catch(error => console.log(error));
*/

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        console.log(product.category.id);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.id);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Todo terminado"))