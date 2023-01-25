//Construir promesas
const promise = new Promise(function(resolve, reject){
    resolve('HEY!')
});

//Vamos a hacer una lógica que devuelve una cadena dependiendo de que tenemos 10 vacas 
//y vaidando una variable la cual tiene el valor total de las vacas que necesitamos
const cows = 8;

//Esta es la lógica de la promesa, la cual tiene 2 args, el resolve y el reject, el resolve es 
//cuando se cumple lo que quiero y el reject es el else (en este caso)
const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas, pleno`);
    } else {
        reject(`Tenemos ${cows} vacas, F!`)
    }
});

//Para ejecutar las promesas se deben usar con 3 funciones, una es el .then, con el que se puede 
//usar un array function para mostrar el resultado que haya en la lógica de resolve de la promesa, el .then
//es cuando se cumple, y cuando hay error se usa el .catch y se muestra lo que esté en reject y
//se usa el .finally para ejecutar algo independientemente del resultado de la lógica nterna de la promesa
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Este es el FINALLY!");
})
