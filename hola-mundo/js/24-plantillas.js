'use strict'

// Plantillas de texto.
// Se definen entre ``
// Permiten ingresar texto multilínea.
// Con ${variable} puedo interpolar variables en las plantillas de texto.
var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

//var texto = " Mi nombre es: "+nombre+" </br> Mis apellidos son: "+apellidos;
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es ${nombre}</h3> 
    <h3>Mi apellido es ${apellidos}</h3>
`;

document.write(texto);