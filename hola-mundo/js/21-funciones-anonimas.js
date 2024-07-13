'use strict'

// Funciones anonimas
// Es una función que no tiene nombre.
// Callback: es una función que se ejecuta dentro de otra.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){ // Función
    console.log("La suma es: ", dato);
},
dato => { // Función de flecha.
    console.log("La suma por dos es: ",(dato*2));
});