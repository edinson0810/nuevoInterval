let numero = parseInt(prompt("ingrese un numero"));

const promesa1 = function name(parametro) {
    return new Promise((resolve, reject) => {
        if (parametro % 2 === 0) {
            resolve(`El numero es: ${parametro} par`);
        }else{
            reject(`El numero  es: ${parametro} no es par`);
        }
    })
}

const promesa2 = function name(parametro) {
    return new Promise((resolve, reject) => {
        if (typeof(parametro) === "number") {
            resolve(`El : ${parametro} es numero`);
        }else{
            reject(`El: ${parametro} no es numero`);
        }
    })
}

const promesa3 = function name(parametro) {
    return new Promise((resolve, reject) => {
        if (parametro >= 0) {
            resolve(`El: ${parametro} es positivo`);
        }else{
            reject(`El: ${parametro} es negativo`);
        }
    })
}

Promise.allSettled([promesa1[numero], promesa2[numero], promesa3[numero]]).then((respuesta) => {
    respuesta.map((parametroCualquiera) => {
        console.log(parametroCualquiera.status);
        
    })
})