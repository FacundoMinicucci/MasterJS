'use strict'

// While
var year = 2024;

// Comprobamos una condición y luego ejecutamos un bloque de código.
while (year > 1991) {
    // Ejecuta esto
    console.log("Estamos en el año: " + year);

    if(year == 2000){
        break;
    }

    year--;
}

// Do While
var years = 30;

// Ejecutamos un bloque de código y luego comprobamos la condición.
do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
} while (years < 25);