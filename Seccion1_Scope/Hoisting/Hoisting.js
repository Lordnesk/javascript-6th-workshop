// vars call
console.log("Valor de a:", a);

const pregunta = prompt("Si tengo esta variable 'var a;' y la imprimo que deberia devolverme \n1 Error \n2 Object \n3 Undefined")
if (pregunta == 3){
    alert(`Es correcto y eso se debe a que las variables var siempre se devolveran como undefined`)
}else{
    alert("Incorrecto")
}

const pregunta2 = prompt("Tengo esta función 'funcionDeclarada()', que me deberia retornar esto? \n1 cualquier cosa dentro de la función \n2 debo declararla antes de iniciarla")
if (pregunta2 == 1){
    alert(`Es correcto y eso se debe a que las funciones declaradas al tener hoisting se puden poner en cualquier lugar antes de declararlas e igual funcionaran.`)
}else{
    alert("incorrecto")
}

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
};

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};


// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

