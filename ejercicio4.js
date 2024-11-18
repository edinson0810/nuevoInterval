// creamos la funcion filtar
function filter(array, callback) {
//    creamos una variable vacia
    const resultado = [];
    // el bucle recorre la array
    for (let i = 0; i < array.length; i++) {
        // muestra el element actual
        const element = array[i];
    //    creamos una condicion si la callback devuelve true
        if (callback(element)) {
            // lo agregamos a la array
            resultado.push(element)
        }
        // retorna la array con elementos que pasaron el filter
    } return resultado
}
let numero = [ 10, 6, 4, 5];
// creamos una variable con la funcion que filtre los numeros  menor de 5
let menoresDeCinco = filter(numero,(numero) => numero < 5);
// muestra el resultado en consola
console.log(menoresDeCinco);


