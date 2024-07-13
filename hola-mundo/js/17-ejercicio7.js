'use strict'

// Tabla de multiplicar de un número introducido por pantalla.
var mensaje = "¿De qué número quieres la tabla de multiplicar?";
var numero = parseInt(prompt(mensaje),0);

document.write(`<h1>Tabla del ${numero}:</h1>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${numero}x${i} = ${numero * i}</br>`);
}

// Todas las tablas de multiplicar.
document.write(`<h1>Todas las tablas de multiplicar:</h1>`);
for (let j = 1; j <= 10; j++) {
    document.write(`<h1>Tabla del ${j}:</h1>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${j}x${i} = ${j * i}</br>`);
    }    
}

