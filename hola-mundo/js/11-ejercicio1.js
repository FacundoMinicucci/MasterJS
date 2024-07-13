'use strict'

/*
- Programa que pida dos números y que nos diga:
- Cuál es el mayor.
- Cuál es el menor.
- Si son iguales.
PLUS: Si los números no son un número o son menores o iguales a cero, nos vuelva a pedir que ingresemos los datos.
*/

var num1 = parseInt(prompt("Ingrese el primer número", 0));
var num2 = parseInt(prompt("Ingrese el segundo número", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingrese el primer número", 0));
    num2 = parseInt(prompt("Ingrese el segundo número", 0));    
}

if(num1 > num2)
    alert(`El número ${num1} es mayor que el número ${num2}.`);
else if(num2 > num1)
    alert(`El número ${num2} es mayor que el número ${num1}.`);
else if(num1 === num2)
    alert("Los números son iguales.");
else
alert("Los números son inválidos. Por favor, introduce números válidos.")