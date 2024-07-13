'use strict'

/*
- Programa que nos diga si un número es par o impar.
1. Ventana prompt.
2. Si el número es inválido que nos vuelva a pedir el número.
*/
var mensaje = "Ingrese un número";
var numero = parseInt(prompt(mensaje),0);

while (isNaN(numero)) {
    numero = parseInt(prompt(mensaje),0);
}

if (numero % 2 == 0) 
    alert(`El número ${numero} es par.`);
else
    alert(`El número ${numero} es impar.`);