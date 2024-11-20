// creamos la funcion some que consiste que si al menos un elemento se cumple retorne true
function some(array, callback) {
    // bucle recorre el array
    for (let i = 0; i < array.length; i++) {
        // muestra el element actual
        const element = array[i];
        // creamos una condiciones que si la devuelve true
        if (callback(element)) {
            // retorna true
            return true
        }
        // de lo contrario retorna false
    } return false
}
// creamos la variabel numero con una array con 4 elemento
const numero = [1, 3, 5, 8];
// creamos una variable con una funcion que si al menos un numero de la array es par
const hayPares = some(numero, (numero) => numero % 2 === 0);
// retorna true
console.log(hayPares);
