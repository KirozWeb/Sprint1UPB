function recuperar(){

    var query = window.location.search.substring(1);
    //alert(query);
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
    //alert(vars[0][1]);
    //console.log(vars[0][1]);
    document.forms["form_registro_usuario"]["in_usuario"].value = vars[0][1];
    document.forms["form_registro_usuario"]["in_contrasena"].value = vars[1][1]


}


