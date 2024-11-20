const persona = {
   numero : 20,
   texto : "letras",
   email : null,
   fecha : null
}

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
       },
       set(objetivo, propiedad, valor) {
        console.log(Object.keys(objetivo));
        Object.preventExtensions(objetivo);
        
        if (propiedad == "numero" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo numeros");
        }

        if (propiedad == "texto" && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error("Valor debe contener solo letras y espacios");
        }

        if (propiedad == "email" && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/.test(valor)) {
            throw new Error("Valor invalido ingrese un formato de correo electronico valido");
        }

        if (propiedad == "fecha" && !/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
            throw new Error("Valor invalido debe ser formato de fecha");
        }
       
        objetivo[propiedad] = valor
       }
}

const proxy = new Proxy(persona, manejador);
proxy.numero = 40;
proxy.texto = "letras ";
proxy.email = "lache@hotmail.com";
proxy.fecha = "21-02-2024";
console.log(persona);