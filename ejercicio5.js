// creamos la funcion every que consiste que todos los elementos de la array se deben cumplir para que retorne true
function every(array, callback) {
    // bucle recorre la array
        for (let i = 0; i < array.length; i++) {
            // muestra el elemento actual
        const element = array[i];
        // creamos una condiciones que si la callback devuelve false
        if (!callback(element)) {
            // retornar false
            return false
        }
    } return true;
}

let numero = [2, 5, 7,];
// creamos la variable every para que la variable numero sean todos impares
let TodosImpares = every(numero, (numero) => numero % 2 !== 0);
// retorna true
 console.log(TodosImpares);
 
