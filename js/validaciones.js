
export function validar_nombreUsuario(string){
    let perro = document.getElementById("in_usuario");
    //alert("este es dentro de validar nombre usuario"+perro.value);
    //console.log(perro.value);
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 3 || string.length > 9) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}

export function validar_contrasena(string){
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 6) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}

//var usuarios = "diego";
//var contrasena = "quiroz";
/*module.exports.validar_nombreUsuario = validar_nombreUsuario(usuarios);
module.exports.validar_contrasena = validar_contrasena(contrasena);*/
