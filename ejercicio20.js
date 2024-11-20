const promesa1 = function (numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (numero)
        }, 1000);
    })
}

const promesa2 = function (numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (numero)
        }, 2000);
    })
}

const promesa3 = function (numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero)
        }, 3000);
    })
}

Promise.all([promesa1(10), promesa2(20), promesa3(30)]).then((message) =>{
    console.log(message);
    
})
    