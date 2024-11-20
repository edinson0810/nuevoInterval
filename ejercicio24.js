const persona = {
    nombre : "edinson",
    apellido: "Barrios",
    edad : 39
}

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
       },
       set(objetivo, propiedad, valor) {
        console.log(Object.keys(objetivo));
        Object.preventExtensions(objetivo);
        
        if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error("Valor debe contener solo letras y espacios");
        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo numeros");
        }
        objetivo[propiedad] = valor
       }
}

const proxy = new Proxy(persona, manejador);
proxy.nombre = "Yamir ";
proxy.apellido = "Lache";
proxy.edad = 40
console.log(proxy.nombre);
console.log(persona);

