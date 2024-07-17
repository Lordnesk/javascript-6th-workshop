function fetch() {
    let mensaje = prompt("Escribe algo")
    let tiempoEspera = setTimeout(() => {
        console.log("Estas demorado")
    }, 1000);
    if(mensaje < tiempoEspera){
        fetch = async("https://jsonplaceholder.typicode.com/posts");
        
    }
}