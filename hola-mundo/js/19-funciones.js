'use strict'

function ImprimirPorConsola(numero1, numero2) {
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("****************************");
}

function ImprimirPorPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1+numero2) + "</br>");
    document.write("Resta: " + (numero1-numero2) + "</br>");
    document.write("Multiplicación: " + (numero1*numero2) + "</br>");
    document.write("División: " + (numero1/numero2) + "</br>");
    document.write("****************************");
}

function Calculadora(numero1, numero2, mostrar = false) {

    if(!mostrar){
        ImprimirPorConsola(numero1, numero2)
    } else{
        ImprimirPorPantalla(numero1, numero2)
    }

    return true;
}

Calculadora(1, 4);
Calculadora(2, 5, true);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
//     Calculadora(i,8);
// }