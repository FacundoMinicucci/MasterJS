'use strict'

/* 
- Utilizando un bucle calcular la media y la suma de los números ingresados por el usuario hasta que el usuario ingrese un número negativo.
*/

var suma = 0;
var media = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Ingrese un número"),0)

    if (isNaN(numero)) 
        numero = 0;
    else if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero > 0);

while(numero >= 0){

    suma += numero;
    contador++;

    numero = parseInt(prompt("Ingrese un número"),0)
}

media = suma/contador;

prompt(`La suma de los números ingresados es: ${suma}`);
prompt(`La media de los números ingresados es: ${media}`);