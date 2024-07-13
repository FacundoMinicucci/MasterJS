'use strict'

// Timers

window.addEventListener('load', () =>{
    // Set Interval - Nos permite ejecutar una porción de código cada "X" tiempo (ms).
    // Set timeout - Solo se ejecuta una vez cada "X" tiempo (ms).
    function intervalo(){
        var tiempo = setInterval(() => {
            //var tiempo = setTimeout(() => {
        
                console.log("Set interval ejecutado.");
                
                var encabezado = document.querySelector("h1");
        
                if (encabezado.style.fontSize == "50px") {
                    encabezado.style.fontSize = "20px";
                } else {
                    encabezado.style.fontSize = "50px";            
                }
        
            }, 1000);
        
        return tiempo;
    }

    var tiempo = intervalo();

    var btnStop = document.querySelector("#btnStop");

    btnStop.addEventListener('click', () => {
        clearInterval(tiempo);
        alert("Has parado el intervalo en bucle.");
    });

    var btnStart = document.querySelector("#btnStart");

    btnStart.addEventListener('click', () => {
        intervalo();
        alert("Has iniciado el intervalo en bucle.");
    });
});