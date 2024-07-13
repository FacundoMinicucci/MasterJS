'use strict'

/*
- Mostrar todos los números divisores de un número que se introduce.
*/

var numero = parseInt(prompt("Ingrese el primer número"),0);

document.write(`<h1>El ${numero} tiene estos divisores:</h1>`);

for (let index = 0; index <= numero; index++) {    
    
    if (numero % index == 0) 
        document.write(`${index}<br/>`);
}