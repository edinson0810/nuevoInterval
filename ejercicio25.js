const persona = {
    nombre : "edinson",
    apellido: "Barrios",
    edad : 40
}

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
       },
       set(objetivo, propiedad, valor) {
        console.log(Object.keys(objetivo));
        Object.preventExtensions(objetivo);
        
        if (propiedad == "nombre" && !isNaN(valor)) {
            throw new Error("Valor no permitido");
        }
        objetivo[propiedad] = valor
       }
}

const proxy = new Proxy(persona, manejador);
proxy.nombre = "Yamir ";
proxy.apellido = "Lache"
proxy.profesion = "hola";
console.log(proxy.nombre);
console.log(persona);

