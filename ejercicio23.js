const leer = async () => {
    try {
        return await fetch("./ejercicio23.json")
    } catch (error) {
       console.log(error);
        
    }
}

leer().then((respuesta) => {
    respuesta.json().then(data => {
        console.log(data.nombre);
        console.log(data.edad);
      
       console.log(data.obj);
        
    })
})