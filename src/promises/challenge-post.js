//Realizar consummos POST, PUT, ... con fetch y promises

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function putData(url, data){
    const response = fetch(url, {
        method: 'PUT',
        mode: 'cors',//investigar a fondo
        credentials: 'same-origin',//autenticación (no necesaria)
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

/*
function postData(url, data){
    const response = fetch(url, {
        method: 'PUT',
        mode: 'cors',//investigar a fondo
        credentials: 'same-origin',//autenticación (no necesaria)
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "New Product MaxDev",
    "price": 1076544567,
    "description": "A description for my new maxdev product",
    "categoryId": 9,
    "images": ["https://placeimg.com/646/47780/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data =>  console.log(data))
*/

const data = {
    "title": "Change title MaxDev",
    "price": 93426346337
}

putData(`${API}/products/213`, data)
    .then(response => response.json())
    .then(data =>  console.log(data))