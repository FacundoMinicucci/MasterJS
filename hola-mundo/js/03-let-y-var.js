"use strict"

var numero = 40;

console.log(numero); // 40

if (true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

var texto = "Javascript";

console.log(texto); // Javascript

if (true) {
    let texto = "Laravel"; 
    console.log(texto); // Laravel
}

console.log(texto); // Javascript