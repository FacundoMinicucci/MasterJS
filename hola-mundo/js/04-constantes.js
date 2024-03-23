"use strict"

var web = "www.google.com.ar";
const ip = "192.168.0.1";

web = "www.google.com";
ip = "192.168.88.1"; // El valor de una constante no puede ser cambiado, arroja error.

console.log(web, ip);