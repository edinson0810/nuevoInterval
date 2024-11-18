// funcion llamada mipromesa
function miPromesa() {
    // promesa con argumentos
    return new Promise((resolve, reject) => {
        // funcion que permite que la promesa se resuelva con retraso de 3 segundo
        setTimeout(() => {
            // llamamos a resolve para que se muestre el mensaje
            resolve("Promesa Resuelta");
        }, 3000);
    })
}
// .then ejecuta la promesa se resuelva 
miPromesa().then(mensaje => console.log(mensaje));
