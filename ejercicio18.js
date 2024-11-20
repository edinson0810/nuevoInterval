
const filtrar = async () => {
    try {
        return await fetch("./ejercicio18.json");
    } catch (error) {
        console.log(error);
        
    }
}

filtrar().then((respuesta) =>{
    respuesta.json().then(data => {
        console.log(data.nombre);
        console.log(data.edad);
        console.log(data.profesion);
        
        
        
    })
})
