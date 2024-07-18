function waitForSeconds(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Han pasado ${seconds} segundos`);
      }, seconds * 1000);
    });
}

function fetchData(url) {
return fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    });
}

function interactiveScript() {
// Pedir al usuario que ingrese el número de segundos
const userInput = prompt("Por favor ingrese la cantidad de segundos:");

if (userInput === null) {
    console.log("No se ingresó ningún valor.");
    return;
}

const seconds = parseInt(userInput);

if (isNaN(seconds) || seconds <= 0) {
    console.log("Por favor ingrese un número válido de segundos mayor que cero.");
    return;
}

// Mostrar un mensaje después de n segundos
waitForSeconds(seconds)
    .then(message => {
    console.log(message);
    // Cargar datos de la API
    return fetchData('https://jsonplaceholder.typicode.com/posts');
    })
    .then(data => {
    console.log("Datos cargados desde la API:");
    console.log(data);
    })
    .catch(error => {
    console.error('Error:', error);
    });
}

// Llamar a la función principal
interactiveScript();
/* `
Explicación paso a paso:
    waitForSeconds(seconds): Esta función devuelve una promesa que se resuelve después de seconds * 1000 milisegundos. Dentro del setTimeout, se resuelve la promesa con un mensaje indicando cuántos segundos han pasado.

    fetchData(url): Esta función utiliza fetch para obtener datos de la URL proporcionada. Si la respuesta no es exitosa (response.ok es false), se lanza un error. Luego, se convierte la respuesta a JSON y se devuelve.

    interactiveScript(): Esta es la función principal que realiza la interacción con el usuario y maneja la secuencia de eventos:

    Solicita al usuario que ingrese un número de segundos.
        Si el usuario cancela la entrada (userInput === null) o ingresa un valor inválido (isNaN(seconds) || seconds <= 0), se manejan estos casos mostrando un mensaje en la consola.
        Si el usuario ingresa un valor válido de segundos:
            Espera los segundos ingresados usando waitForSeconds.
            Después de que se cumple la promesa, muestra el mensaje en la consola.
            Luego, llama a fetchData para obtener datos de la API. Si tiene éxito, muestra los datos en la consola.
            Si ocurre algún error durante el proceso, lo maneja mostrando un mensaje de error en la consola.
`   */
