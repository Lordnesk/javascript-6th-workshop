function crearContador() { // Esta funcion devuelve un objeto con dos funciones, incrementar y obtener valor
    let contador = 0;

    function incrementar() { // Esta funcion incrementa el contador
        contador++;
        alert('El contador ha sido incrementado. Valor actual: ' + contador);
    }

    function obtenerValor() { // Esta funcion devuelve el valor actual del contador
        return contador;
    }

    return { // Aca es donde devuelve el objeto con las funciones
        incrementar: incrementar, 
        obtenerValor: obtenerValor
    };
}

// Función para interactuar con el usuario
function interactuarConContador() { // Aca en esta funcion interactuamos con el usuario
    const miContador = crearContador(); // Metemos la funcion del contador en una variable
    let continuar = true; // Mientras sea true seguira preguntando

    while (continuar) {
        let opcion = prompt('Presiona "+" para incrementar el contador, o "q" para salir');

        if (opcion === '+') { // Cada que se elija + el contador va a ir incrementando
            miContador.incrementar(); // En esta linea se elije lo que necesitamos del objeto
        } else if (opcion === 'q') {
            continuar = false; // Al elejir la q cambiamos continuar a false para salir del bucle
        } else {
            alert('Opción no válida. Inténtalo de nuevo.'); // Aca nos aseguramos que el usuario elija solo una de las dos opciones o ponga cualquiera
        }
    }

    console.log('Valor final del contador: ' + miContador.obtenerValor()); // al final de la funcion, se imprimira el valor final del contador, elijiendo obtenerValor del objeto
}

// Ejecutar la función principal de interacción
interactuarConContador();
