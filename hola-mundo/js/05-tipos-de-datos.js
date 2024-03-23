'use strict'

// Operadores aritméticos

/*
 * Suma (+)
 * Resta (-)
 * Multiplicación (*)
 * División (*)
 * Módulo (%)
 */
var numero1 = 7;
var numero2 = 12;
var operacion = numero1+numero2;

console.log("El resultado de la operación es: " + operacion);

// Tipos de datos
var numeroEntero = 44;
var cadenaTexto = "Hola que tal"; // La comilla que usemos para abrir la string tiene prioridad.
var booleano = true; // true (1) o false (0).

var numeroFalso = "33.4";
console.log(parseFloat(numeroFalso)+7);
console.log(String(numeroEntero)+4);

// typeof -> Permite saber el tipo de dato de una variable.
console.log(typeof(numeroEntero));
console.log(typeof(cadenaTexto));
console.log(typeof(booleano));
console.log(typeof(numeroFalso));