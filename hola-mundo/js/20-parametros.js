'use strict'

// Parámetros REST y SPREAD.

// REST: se definen como un parámetro más de un método pero con ... adelante.
// Me permite recibir parámetros adicionales no definidos explícitamente en forma de array que puedo iterar. 

// SPREAD: se pasan como un parámetro de una función, dentro de un array, anteponiendo ... al nombre del array. Se interpretan en la función que los recibe como N parámetros pasados en orden.

// Definición de un parámetro REST.
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);

    resto_de_frutas.forEach(fruta => {        
        console.log(fruta);
    });
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

// Pasaje de parámetro de tipo SPREAD.
var frutas = ["Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco"];
listadoFrutas(...frutas);