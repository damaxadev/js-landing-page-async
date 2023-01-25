
//Lógica de un callback
function sum(num1, num2){ //función base
    return num1 + num2;
}

function getSum(num1, num2, callback) { //funcíon donde se pasa como argumento la nueva función
    return callback(num1, num2);
}

console.log(getSum(15, 23, sum)) //No es necesario llamar la función con los paréntesis

//lógica de un callback con setTimeOut
setTimeout(function () { //Esto se llama una función anónima, para los timeout
    console.log("Hello"); //Lógica a ejecutar
}, 5000) //Tiempo de delay

function grettings(name) {
    console.log(`Hellooooo ${name}`) //Para concatenar con este método es necesario ``
}

setTimeout(grettings, 3000, 'Diego'); //(función a llamar, tiempo de delay, argumentos...)

//Manera de hacerlo por platzi
function myCallback(callback) {
    //esta va con delay
    setTimeout(function() {
        callback(); //se ejecuta la función
    }, 5000)
}

const myFunction = () => console.log('After 5s');
myCallback(myFunction);

//Ahora con parametros, hacemos un porcentaje despues de 10 segundos --Full myself:)

function calcPercent(num1, nump) {
    let var1 = 0;
    var1 = num1 * (nump/100);
    console.log(var1);
}

function myCallbackPercent(num1, nump, callback) {
    setTimeout(function() {
        callback(num1, nump);
    }, 10000)
}

myCallbackPercent(100, 10, calcPercent);
myCallbackPercent(1000, 10, calcPercent);
myCallbackPercent(10000, 25, calcPercent);
