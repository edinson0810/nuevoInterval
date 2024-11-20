function promesa(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero)
        }, 1000);
    })
}

const promesa1 = promesa(5)
const promesa2 = promesa(10);
const promesa3 = promesa(15);

promesa1.then((resultado1)=>{
    console.log("resultado 1:", resultado1);
    return promesa2.then((resultado2)=>{
        console.log("resultado 2:", resultado2);
        return promesa3.then((resultado3) =>{
            console.log("resultado 3:", resultado3);
            })
    })
})

Promise.all([promesa1, promesa2, promesa3]).then((resultado) => {
    let total =0;
    resultado.map((res)=> {
        total += res;
    });
    console.log(`El resultado de las promesas es de:
    ${total}`);
    });





