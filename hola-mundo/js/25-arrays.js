'use strict'

// Arrays, Arreglos, Matrices.
// Son colecciones de datos.
// Cada valor se llama posición y arrancan en el índice 0.
var nombre = "Facundo Minicucci";
var nombres = ["Facundo", "Jorge", "Pedro", 52, true];
var lenguajes = new Array("C#", "PHP", "Javascript", "Java", "Go", "Python");

//console.log(nombres[2]); // Acceder una posición específica.

/*
console.log(nombres.length); // Ver longitud de un array.

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));

if (elemento >= nombres.length) 
    alert("Introduce un número menor que " + nombres.length);
else 
    alert("El usuario seleccionado es: " + nombres[elemento]); 
*/

document.write("<h1>Lenguajes de programación del 2024</h1>");

document.write("<ul>");
/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + " </li>");    
}
*/
/*
lenguajes.forEach((element, index, array) => {
    document.write("<li>" + index + " " + element + " </li>");
});
*/

for(let index in lenguajes){
    document.write("<li>" + lenguajes[index] + " </li>");
}

document.write("</ul>");

// Busquedas en un array.
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); // Permite sacar el texto del elemento que estoy buscando.
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); // Permite sacar el índice del elemento que estoy buscando.

var precios = [10,20,50,80,12];
busqueda = precios.some(precio => precio > 80); // Permite comparar elementos del array con una condición.


console.log(busqueda);