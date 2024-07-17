console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
console.log(funcionDeclarada());
} catch (error) {
console.log("Error:", error.message);
}

console.log(
"Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
console.log(funcionExpresada());
} catch (error) {
console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/*
¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

R// Solo la función declarada pudo ser llamada sin ser declarada en cambio la expresada no pudo.

¿Cómo difieren los resultados entre la función declarada y la función expresada?

R// Los resultados difieren en que antes de ser declarada la funcion expresada muestra este error "Error: Cannot access 'funcionExpresada' before initialization", cosa que la funcion declarada no muestra.

¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

R// Indica que las funciones con nombre o declaradas si se ven afectadas por el hoisting de JavaScript en cambio la funcion anonima o expresada no.

*/ 