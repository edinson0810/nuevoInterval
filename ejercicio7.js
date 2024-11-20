// creamos la funcion find que consiste en finalizar si encuentra el elemento 
function find(array, callback) {
    // bucle recorre la array
    for (let i = 0; i < array.length; i++) {
        // muestra el elemento actual
        const element = array[i];
        // creamos una condicion que si encuentra el elemento
        if (callback(element)) {
            // retorna el primer elemento encontrado
           return element; 
        }
        // de lo contrario retorna undefined
    } return undefined;
}
// variable numero con 5 elementos
const numero = [12, 15, 16, 8, 9];
// variable find que si encuentra el primer numero de la array sea menor que 10 
const primerMenorQue10 = find(numero, (numero) => numero < 10);
// retorna el numero y termina
console.log(primerMenorQue10);
