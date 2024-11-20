const array = ["amarrillo", "azul", "rojo", "naranja"];

const funcionAsincrona = async () => {
    try {
      setTimeout(() => {
        for (let index = 0; index < array.length; index++) {
            const color = array[index];
            console.log(color);
            
        }
      }, 4000);
        


    } catch (error) {
        
    }
}

funcionAsincrona();