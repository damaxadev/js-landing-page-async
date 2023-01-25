//Código para consummir un método GET de una API de prueba...

//Esto es para referenciar paquetes
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1' //Ruta de la API a llamar

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest(); //Instancia del paquete xmlhttp
    xhttp.open('GET', url, true); //Open a la petiición
    xhttp.onreadystatechange = function(event) { //Escuchar diferentes estados de la solicitud
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } /* else {            
            //const error = new Error('Error ' + url);
            //console.log(error);
            //console.log(xhttp.readyState + '  -  ' + xhttp.status);
            return callback(xhttp.readyState, null);
        } */
    }

    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) {
        return console.error(error1);
    }
    console.log(data1[1]);
})

/*
fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3) { //Optional para que no salga error ?
            if (error3) return console.error(error3); 
            console.log(data1[0]);
            //console.log(data2.title);
            //console.log(data3.name);
        }) 
    })
})
*/