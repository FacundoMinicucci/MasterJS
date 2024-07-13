'use strict'

// Array multidimensional.
// Son arrays dentro de otros arrays.

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*
var elemento = prompt("Introduce una película: ");

while (elemento != "ACABAR") {
    peliculas.push(elemento); // Añade un elemento a un array.
    elemento = prompt("Introduce una película: ");
}

peliculas.pop(); // Elimina el último elemento de un array.
peliculas.pop();
peliculas.pop();


console.log(peliculas);

// Eliminar un elemento específico de un array.
var index = peliculas.indexOf("Gran torino");
console.log(index);

if (index > -1) 
    peliculas.splice(index, 1); // splice nos permite en base a un índice borrar cuantos pasos hacia adelante quiero borrar (indice, pasosABorrar).
console.log(peliculas);

// Convertir array a una string.
var peliculasString = peliculas.join(); // Convierte un array a un string separado por comas.

// Convertir una string en array.
var cadena = "Texto1, Texto2, Texto3";
var cadenaArray = cadena.split(",");

console.log(cadenaArray);
*/

// Ordenar arrays.
peliculas.sort(); // Ordena alfabéticamente un array.
peliculas.reverse(); // Invierte el orden de un array.
console.log(peliculas);