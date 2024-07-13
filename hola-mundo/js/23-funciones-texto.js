'use strict'

// Transformación de cadenas.

var numero = 444;
var texto1 = " Bienvenido al curso de Javascript curso ";
var texto2 = "Es muy buen curso";

//var dato = numero.toString();
//    dato = texto1.toLowerCase();
//    dato = texto2.toUpperCase();
    
//console.log(dato);

// Calcular longitud de una cadena.
//var nombre = "Facundo Minicucci";
//    nombre = ["Hola", "Mundo"];

//console.log(nombre.length);

// Concatenar - Unir textos.
//var textoTotal = texto1 + " " + texto2;
//var textoTotal = texto1.concat(" "+texto2);
//console.log(textoTotal);

// Busqueda dentro de cadenas.
//var busqueda = texto1.indexOf("curso"); // Indice donde arranca la string.
//    busqueda = texto1.lastIndexOf("curso"); // Ultimo índice donde arranca la string.
//    busqueda = texto1.search("curso"); // Es lo mismo que indexOf
//    busqueda = texto1.match(/curso/g); // Separa en un array con cada repetición de una string
//    busqueda = texto1.substr(14,5); // Crea una nueva string a partir de un determinado caracter y hasta otro como límite.
//    busqueda = texto1.charAt(23); // Obtiene el caracter de una determinada posición de una string.
//    busqueda = texto1.startsWith("Bi"); // Consulta si una cadena arranca con una determinada string y devuelve un booleano.
//    busqueda = texto1.endsWith("curso"); / Consulta si una cadena termina con una determinada string y devuelve un booleano.
//    busqueda = texto1.includes("Javascript"); // Consulta si una string contiene una determinada cadena. Es case sensitive
//console.log(busqueda);

// Reemplazo de textos
var busqueda = texto1.replace("Javascript","C#"); // Reemplaza una porción de string por otra dentro de un texto.
    busqueda = texto1.slice(14); // Separar un string a partir de un caracter determinado. Devuelve el string a partir de dicho index.
    busqueda = texto1.split(" "); // Recorta una string y la separa en un array donde cada posición es una porción cortada de la string.
    busqueda = texto1.trim();
console.log(busqueda);