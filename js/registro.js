export let registros = [];

export function agregarRegistro(){
    var usuario= document.getElementById("in_usuario").value;
    //console.log("usuario de agregar"+usuario);
    var contrasena=document.getElementById("in_contrasena").value;
    //console.log("contrasena de agregar"+usuario);
    //var filtro = 10;
    //console.log(usuario);
    //console.log(contrasena);
    var userbol = true;
    var pwdbol = true;
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (usuario.length < 3 || usuario.length > 9) {
        userbol = false;
    } else if (!ptr.test(usuario)) {
        userbol = false;
    } else {
        userbol = true;
    }

    if (contrasena.length < 6) {
        pwdbol = false;
    } else if (!ptr.test(contrasena)) {
        pwdbol = false;
    } else {
        pwdbol = true;
    }
    if( userbol == true && pwdbol == true){
        //console.log("esta bueno");
        console.log(usuario+" "+contrasena);
        let dato = {"usuario":usuario, "contrasena":contrasena}
        registros.push(dato);
        registros.forEach(element => {
            //console.log(element);
        });
    }
    else{
        if(userbol == true && pwdbol == false){
        console.log("Escribiste el pasword errado");
        }
        if(userbol == false && pwdbol == true){
        console.log("Escribiste usuario errado");
        }
        if(userbol == false && pwdbol == false){
        console.log("Escribiste el usuario y el pasword errados");
        }

    }

    //filtrarPorContrasena(registros,filtro);
    return registros;
}
export function filtrarPorContrasena(arreglo, filtro){
    console.log("estoy dentro de filtrar");
    /*console.log(arreglo);
    console.log(filtro);*/

    let res_filtro = arreglo.filter(p => p.contrasena.length <= filtro);
    console.log(res_filtro);
    return res_filtro;

}

/*module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;*/
