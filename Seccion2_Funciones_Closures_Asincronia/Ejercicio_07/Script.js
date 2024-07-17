const codigo = `
console.log("Inicio del script");

setTimeout(() => {
    console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
    console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
` 

const pregunta = prompt(`Como se cual seria el orden de impresión de el siguiene codigo: \n${codigo}`);
if (pregunta == 15423){
    alert("Felicitaciones, es correcto")
}


