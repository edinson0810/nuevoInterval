// se crea una variable i con valor en 0
let i = 0;
// se demora mas de 100 ms en ejecutar y se ejecuta despues del bucle 
setTimeout(() => alert(i), 100);
// al finalizar el bucle i ha sido incrementada en 100000000
for (let j = 0; j < 100000000; j++) {
    i++;
}

// alert mostrara 100000000