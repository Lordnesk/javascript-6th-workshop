console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
    console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
    console.log("Microtarea 3 (Promesa)");
    })
    .then(() => {
    console.log("Microtarea 4 (Promesa)");
    });

console.log("Fin del script");

/*
    ¿Qué tareas se consideran macrotareas y cuáles son microtareas?

    Macrotareas:
        -Las promesas con timeout

    Microtareas:
        - Los return dentro de un timeout
        -then sin timeout
        -promesas sin timeout

    ¿Cómo se relacionan las macrotareas y microtareas con el event loop?

    R// Las microtareas se resuelven primero que las macrotareas

    ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?

    R// Entra a la pila y luego se resuelve

    ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?

    R// Primero se resuelven las promesas y luego los timeout
*/ 