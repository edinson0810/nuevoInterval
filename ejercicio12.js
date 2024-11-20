function delay(ms) {
    // retorna la promesa cuando se resuelva
    return new Promise(resolve => setTimeout(resolve, ms));
}
// llamamos la funcion y le ponemos argumentos 
delay(3000).then(() => alert("se ejecutara despues de 3 segundos"));


