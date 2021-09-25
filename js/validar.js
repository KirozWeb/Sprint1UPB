import * as valido from "./validaciones.js";
//let valido = require("./validaciones.js");
var usuarios;
var contrasena;
var query = window.location.search.substring(1);
//console.log(query);

var vars = query.split("&");
var pair = new Array();
var temp;
        
for (var i=0; i < vars.length; i++) { 
    //alert(vars[i]);           
    temp = vars[i].split("="); 
    pair.push(temp);            
}
        
vars[0]=vars[0].split("in_usuario=");
vars[1]=vars[1].split("in_contrasena=");

usuarios = vars[0][1];
contrasena = vars[1][1];
console.log(usuarios);
console.log(contrasena);
var usu = valido.validar_nombreUsuario(usuarios);
var cont = valido.validar_contrasena(contrasena);
console.log(usu);
console.log(cont);
