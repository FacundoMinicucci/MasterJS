'use strict'

// Condicional IF

/** Operadores relacionales
 * Igual: ==
 * Distinto: !=
 * Mayor: >
 * Mayor o igual: >= 
 * Menor: <
 * Menor o igual: <=
 */

var edad = 72;
var nombre = 'David Suarez';

if(edad >= 18){
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if (edad == 33) {
        console.log("Todavía eres millenial.");
    } else if(edad >= 70) {
        console.log("Eres anciano.");
    } else {
        console.log("Ya no eres millenial.");
    }
} else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/** Operadores lógicos
 * AND: &&
 * OR: ||
 * Negación: !
 */

// Negación
var year = 2023;
if (year != 2024) {
    console.log("El año no es 2024");
}

// AND
if(year >= 2000 && year <= 2024 && year != 2024){
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna.");
}

// OR
if(year == 2004 || (year >= 2004 && year == 2024)) {
    console.log("El año termina en 4.");
} else {
    console.log("AÑO NO REGISTRADO.");
}