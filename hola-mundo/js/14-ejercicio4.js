'use strict'

/*
- Mostrar todos los números impares que hay entre dos números introducidos por el usuario.
*/

var numero1 = parseInt(prompt("Ingrese el primer número"),0);
var numero2 = parseInt(prompt("Ingrese el segundo número"),0);

document.write(`<h1>Desde el ${numero1} hasta el ${numero2} están estos números impares:</h1>`);

for (let index = numero1+1; index <= numero2; index++) {    
    
    if (index % 2 != 0) 
        document.write(`${index}<br/>`);
}