'use strict'

function cambiaColor(elemento, color){
    elemento.style.backgroundColor = color;
}

// Document Object Model (DOM).

// Obtener elementos con un id concreto.
//var caja = document.getElementById("miCaja"); // Busca un elemento html por su id.
    //caja = document.getElementById("miCaja").innerHTML; // innerHTML permite acceder al valor que contiene un elemento HTML, ya sea para consultarlo o modificarlo.


var caja = document.querySelector("#miCaja"); // Permite seleccionar elementos por selectores CSS (#ID, .CLASE, NOMBRE).

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.backgroundColor = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "clase1 clase2";

cambiaColor(caja, "green");

// Obtener elementos por su etiqueta.
var todosLosDivs = document.getElementsByTagName("div");
var seccion = document.querySelector("#miSeccion")
var hr = document.createElement("hr");


/*
var contenidoEnTexto = todosLosDivs[2].textContent; // Es lo mismo que el innerHTML sólo que no permite asignación.
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";

console.log(contenidoEnTexto);

cambiaColor(contenidoEnTexto, "green");
*/

for (let valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == "string") {
        var parrafo = document.createElement("p"); // Permite crear elementos HTML pasándole el nombre de etiqueta.
        var texto = document.createTextNode(todosLosDivs[valor].textContent); // Permite crear texto para luego insertarlo en elementos HTML.
        parrafo.appendChild(texto); // Inserta un valor dentro de un elemento HTML.
        seccion.appendChild(parrafo);    
    }    
}

seccion.appendChild(hr);
// Obtener elementos por su clase.
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

for (let index in divsRojos) {
    if (divsRojos[index].className == "rojo") 
        cambiaColor(divsRojos[index], "red");
}

for (let index in divsAmarillos) {
    if (divsAmarillos[index].className == "amarillo") 
        cambiaColor(divsAmarillos[index], "yellow");
}

// Query selector
var id = document.querySelector("#encabezado"); // Solo recomendable para ids.
console.log(id);

var clase = document.querySelector("div.rojo"); // Para varias etiquetas o clases preferible getElementsByClassName
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

var divs = document.querySelectorAll(".rojo");
console.log(divs);