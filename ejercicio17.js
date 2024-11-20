const leer = async () => {
    try {
        return await fetch("./ejercicio17.json");
    } catch (error) {
        console.log(error);
        
    }
}

leer().then((respuesta) =>{
    respuesta.json().then(data => {
        console.log(data.nombr);
        console.log(data.edad);
        
        
    })
})