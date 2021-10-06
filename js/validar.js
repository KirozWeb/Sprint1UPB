import * as valido from "./validaciones.js";
import * as validate from "./registro.js";
//let valido = require("./validaciones.js");
let usuario;
let contrasena;
let boton;
let arreglito = [];
let contador=0;

window.onload = inicio;

function inicio(){
    contrasena = document.getElementById("in_contrasena");
    usuario = document.getElementById("in_usuario");
    boton = document.getElementById("boton");

    boton.addEventListener("click",mostrarValorCampo);
    //console.log(arreglito);
    //validate.filtrarPorContrasena(arreglito,10);
}
function mostrarValorCampo(){
    //alert(campo.value);
    console.log("usuario "+usuario.value);
    console.log("contrasena "+contrasena.value);
    let decision1 = valido.validar_nombreUsuario(usuario.value);
    let decision2 = valido.validar_contrasena(contrasena.value);
    console.log(decision1);
    console.log(decision2);
    arreglito = validate.agregarRegistro();
    //arreglito.push(validate.registros);


    contador++;
    if(contador == 5)
    {
        console.log("Esto es el filtro");
        console.log(arreglito);
        validate.filtrarPorContrasena(arreglito,10);
        contador = 0;
    }

    console.log(contador);
}
