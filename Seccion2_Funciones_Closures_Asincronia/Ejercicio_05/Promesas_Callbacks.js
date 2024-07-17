function manejarAsincronia(callback, promesa) { // La funcion acepta como parametro una funcion
    const miPromesa = new Promise((resolve, reject) => { // Creamos una nueva instancia de promesa que lleva como parametro resolve, que sera la función asincrona
        setTimeout(() => { // Le ponemos un tiempo de respuesta
            resolve(); // Al pasar ese tiempo, se ejecuta resolve satisfactoriamente 
        }, 1000); //Tiempo de respuesta en segundos
    });

    miPromesa.then(() => { // Una vez resuelta la asincronia le decimos a JS que ejecute la siguiente función que volvera como promesa en el parametro de la funcion anterior
        callback();
    });
}

// Invocar la función pasando un callback y la promesa
function miCallback() { //Definimos esta funcion que solo imprimra el resultado de que funciono
    console.log("¡Promesa cumplida y callback ejecutado!");
}

manejarAsincronia(miCallback()); // Al invocar la primera función poniendo como parametro la segunda, al resolverse el timeout imprimira lo que hay en la segunda funcion

/*
¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?

R// Al ponerle 5s la funcion esperara ese tiempo para imprimir el resultado, en cambio con 1s lo hace enseguida

¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?

R// Mostrara un error en la promesa diciendo que callback no es una funcion u otro error

¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?

R// Si es posible, se podrian poner mas condiciones o funciones dentro de la funcion principal que definan si la promesa se cumple o no.

Ejemplo:

const randomNumber = Math.random();

        // Resolvemos la promesa con un tipo de dato aleatorio
        if (randomNumber < 0.5) {
            resolve("Éxito: La promesa se resolvió correctamente.");
        } else {
            reject("Error: La promesa no pudo completarse.");
        }
    });

    // Manejamos el resultado de la promesa
    miPromesa.then((resultado) => {
        callback(resultado); // Llamamos al callback con el resultado
    }).catch((error) => {
        callback(error); // Llamamos al callback con el error en caso de rechazo
    });

*/
