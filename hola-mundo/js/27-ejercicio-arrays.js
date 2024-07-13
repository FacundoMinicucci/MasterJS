'use strict'

/*
1. Pedir 6 números por pantalla y meterlos en un array. OK
2. Mostrar el array entero en el cuerpo de la página y en la consola. OK
3. Ordenar el array y mostrarlo. NO 
4. Invertir el orden del array y mostrarlo. OK
5. Mostrar cuantos elementos tiene el array. OK
6. Búsqueda de un valor introducido por el usuario, que devuelva si está en el array y su posición dentro del array. OK
*/

function mostrarArray(elementos, texto = ""){
    document.write(`<h1>Contenido del array ${texto}</h1>`);

    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write(`<li>${elemento}</li>`);
    });
    document.write("</ul>") 
}

var numero = 0;
var numeros = [];

// Pedir 6 números.
for (let i = 0; i < 6; i++) {
    numeros.push(parseInt(prompt("Ingrese un número: ")));
}

// Mostrar array por la consola.
console.log(numeros);

// Mostrar en el cuerpo de la página.
mostrarArray(numeros);

// Ordenar el array y mostrarlo.
numeros.sort(function(a,b){return a-b}); // Se debe pasar así una función callback como parámetro para ordenar arrays de números (a-b para orden ascendente o b-a para orden descendente).
mostrarArray(numeros, "ordenado");

// Invertir el orden del array.
numeros.reverse();
mostrarArray(numeros, "invertido");

// Mostrar cantidad de elementos del array.
document.write(`<h1>El array tiene ${numeros.length} elementos.</h1>`);

// Busqueda de un valor dentro del array.
var busqueda = parseInt(prompt("Ingrese un número: ",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>ENCONTRADO</h1>");
    document.write(`<h1>Posición de la búsqueda: ${posicion}</h1`);
} else {
    document.write("<h1>NO ENCONTRADO</h1")
}