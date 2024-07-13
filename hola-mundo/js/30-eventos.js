'use strict'

// Eventos - Es una función que se ejecuta cuando sucede algo en el navegador.

// Evento Load - Cargo todos los eventos y mi código JS dentro de la función flecha luego de que la página esté cargada. Esto me permite cargar mis scripts en el head de mi HTML y no al final. Que es lo más recomendable.
window.addEventListener('load', () => {
    // #region Eventos del ratón.
    // Puedo llamarlos desde el HTML o desde el JS. No es incorrecto pero ensuciamos nuestro código HTML y no encapsulamos nuestros scripts en nuestro JS.
    function cambiarColor() {
        var bg = boton.style.background;

        if (bg == "green")   {
            boton.style.background = "red";
        }      
        else
            boton.style.background = "green"; 
            
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    var boton = document.querySelector("#boton");

    // Click.
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    // Mouse over - Ejecuta al pasar el cursor por encima.
    boton.addEventListener('mouseover', function() {
        boton.style.background = "yellow";
    });

    // Mouse out - Ejecuta al quitar el cursor de encima.
    boton.addEventListener('mouseout', function() {
        boton.style.background = "#ccc"; // #ccc es el color gris claro.
    });
    //#endregion

    //#region Eventos de teclado y foco

    // Focus
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function() {
        console.log("[focus] Estás dentro del input.");
    });

    // Blur
    input.addEventListener('blur', function() {
        console.log("[blur] Estás fuera del input.");
    });

    // Keydown - Se dispara al presionar cualquier tecla.
    input.addEventListener('keydown', function(event) {
        console.log(`[keydown] Estás pulsando ésta tecla: ${String.fromCharCode(event.keyCode)}.`);
    });

    // Keypress - Se dispara al presionar teclas con valor de caracter (por ejemplo, ignora el shift).
    input.addEventListener('keypress', function(event) {
        console.log(`[keypress] Estás pulsando ésta tecla: ${String.fromCharCode(event.keyCode)}.`);
    });

    // Keyup
    input.addEventListener('keyup', function(event) {
        console.log(`[keyup] Liberaste la tecla: ${String.fromCharCode(event.keyCode)}.`);
    });

    //#endregion
});

