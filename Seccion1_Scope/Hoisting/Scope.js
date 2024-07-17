// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

const entrada = prompt("¿Sabes de Scope? \nSi \nNo").toLowerCase();
switch (entrada) {
  case "si":
      const pregunta1 = prompt("¿Es posible acceder a una variable global desde cualquier lugar? \n1. si \n2. no");
      if (pregunta1 === "1"){
        const justificación = prompt("Justifique su respuesta");
        if (justificación === ""){
          alert("Debes responder");
        }
        else if (justificación.includes("global") != justificación){
          alert("No es correcto");
        }
        else{
          alert("Correcto");
          const pregunta2 = prompt("¿Como se accede a una variable local?");
          if (pregunta2 === ""){
            alert("Debes responder")
          }
          else if (pregunta2 != pregunta2.includes("funcion")){
            alert("No es correcto");
          }else{
            alert("Correcto");
            const pregunta3 = prompt("¿Se puede acceder desde cualquier lugar a una variable de bloque? \si \no")
            if (pregunta3 === "no") {
              const justificación = prompt("Justifique su respuesta")
              if (justificación != justificación.includes("dentro")){
                alert("Incorrecto")
              }else{
                alert("Correcto")
                alert("Sabes de scope")
                alert("Hasta la proxima")
              }
            }else{
              alert("incorrecto")
            }
          }
        }
    }
    break;
  case "no":
      alert("Vale, vuelve en otra ocación.")
    break
  default:
    break;
};