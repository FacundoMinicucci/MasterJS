'use strict'

var numero = 12;
var texto = "Hola Mundo soy una variable global";

function holaMundo(texto){
    var hola_mundo = "Texto dentro de función.";

    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(texto);