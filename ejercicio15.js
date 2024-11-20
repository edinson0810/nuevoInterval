function rechazar() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("promise rechazada");
        }, 2000);
    })
}

rechazar()
.catch((error) =>{
    console.log("Error", error);
    
    
});

