
const leer = async () => {
    try {
        return await fetch("./ejercicio18.json");
    } catch (error) {
        console.log(error);
        
    }
}

leer().then(data => {
    data.json().then(body => {
        const filtro = body.filter(item => item.body.startsWith("l"))
        console.table(filtro);
        
    })
}).then(body => {
    console.tble(body);
    
})
