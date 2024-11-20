
const leer = async () => {
    try {
        return await fetch("./ejercicio19.json");
    } catch (error) {
        console.log(error);
        
    }
}

leer().then(data => {
    data.json().then(body => {
        const filtro = body.filter(item => item.body.startsWith("a"))
        console.table(filtro);
        
    })
}).then(body => {
    console.table(body);
    
})