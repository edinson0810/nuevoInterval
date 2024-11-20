// creamos la funcion findIndex que consiste en dar la posicion del elemento que cumplan
function findIndex(array, callback) {
    // bucle para recorrer el array
    for (let i = 0; i < array.length; i++) {
        // muestra el elemento actual
        const element = array[i];
        // creamos una condiciones que si devuelve true
        if (callback(element)) {
            // cuenta los elementos
            return i;
        }
        // si los elementos no cumplen retorna undifened
    } return undefined
}
// varibale con una array de 5 elementos
const numeros = [10, 20, 22, 5, 4];
// variable con la funcion findIndex que n dar la posicion del elemento que cumplanmayores a 15
const mayoresQue15 = findIndex(numeros, (numero) => numero > 15);
// retorna posicion 2
console.log(mayoresQue15); 


