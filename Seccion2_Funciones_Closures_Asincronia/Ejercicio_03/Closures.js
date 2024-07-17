function crearSumador(x){ // Esta es la función para closures
    return function(y) { // Esta funcion sirve como almacenamiento temporal
        return x + y
    }
}

const sumador = crearSumador(10 + 20);
const sumador2 = crearSumador(30)
console.log(sumador(10));
console.log(sumador2(50))