function loop(){
    setTimeout(() => {
        console.log("Mensaje 1: Inmediatamente.");
    });

    setTimeout(() => {
        console.log("Mensaje 2: Con timeout de 0 segundos.");
    }, 0);

    setTimeout(() => {
        console.log("Mensaje 3: Con timeout de 1 segundos.");
    }, 1000);
}

loop()

/*
¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 

R// Puesto que el timeout de Mensaje 2 debe procesar el tiempo de respuesta que se le puso, lo cual hace que lo retrase unos milisegundos

¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

R// Esto nos dice que JS maneja los eventloop en orden de la pila y resuelve segun las condiciones implementadas en las funciones, en ese caso se resuelven una tras otra por el tiempo de espera pero responde en orden de respuesta segun sea el tiempo determinado.

*/