'use strict'

// Browser Object Model (BOM)
// Todo lo que puede hacer el navegador lo podemos hacer a través del BOM desde Javascript.
function getBom(){
    console.log(`Ancho ventana: ${window.innerWidth}`);
    console.log(`Alto ventana: ${window.innerHeight}`);
    console.log(`Ancho pantalla: ${screen.width}`);
    console.log(`Alto pantalla: ${screen.height}`);
    console.log(`URL actual: ${window.location}`);
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url,"","width=400,height=300");
}

getBom();