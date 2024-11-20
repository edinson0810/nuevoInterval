// funcion llamada asincronica
function asincronica() {
    // promesa con argumentos
        return new Promise((resolve) => {
            // funcion que permite que la promesa se resuelva con retraso de 1 segundo
        setTimeout(() => {
             // llamamos a resolve para que se muestre el mensaje
            resolve("Promesa Completada");
        }, 1000);
        });
    }
    
    async function async1() {
        // constante resultado es igual a await y llamamos la funcion asincronica
      const resultado = await asincronica();
        // sale en consola la constante resultado
        console.log(resultado);
       
    }
//    llamamos la funcion async1   
async1();