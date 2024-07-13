'use strict'

/* 
Calculadora:
1. Pida dos números por pantalla.
2. Si ingresa un número inválido, que vuelva a pedir los números.
3. En el cuerpo de la página, en una alerta y por la consola, el resultado de sumar, restar, multiplicar y dividir esos dos números.
*/
var mensaje1 = "Ingresa el primer número:";
var mensaje2 = "Ingresa el segundo número:";
var numero1 = parseInt(prompt(mensaje1),0);
var numero2 = parseInt(prompt(mensaje2),0);

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt(mensaje1),0);
    numero2 = parseInt(prompt(mensaje2),0);
}

var resultado = `La suma es: ${numero1+numero2} <br/>` +
                `La resta es: ${numero1-numero2} <br/>` +
                `La multiplicación es ${numero1*numero2} <br/>` +
                `La división es: ${numero1/numero2} <br/>`;

var resultadoCMD = `La suma es: ${numero1+numero2} \n` +
                `La resta es: ${numero1-numero2} \n` +
                `La multiplicación es ${numero1*numero2} \n` +
                `La división es: ${numero1/numero2} \n`;

document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);