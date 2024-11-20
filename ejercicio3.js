// creamos una funcion map 
function map(array, callback) {
    // creamos una variable vacio
    const resultado = [];
    // bucle para recorrer la array
    for(let i = 0; i < array.length; i++){
        // muestra el Element actual
        const elemento = array[i];
        
        const resultadoCallback = callback(elemento);
        // sube los resultado a la array
        resultado.push(resultadoCallback)
        // retorna la array con los resultados
    } return resultado;
}
// variable numero con elementos
let numero = [10, 20, 30, 40];
// variable divison llamando map con la variable numero y la funcion numero divida en 2 lo numeros de la array
let division = map(numero, (numero) => numero / 2);
// muestra en consola el resultado de la variable division
console.log(division);






