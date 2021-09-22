function recuperar(){
    
    var query = window.location.search.substring(1);
    alert(query);
    var vars = query.split("&");
    var pair = new Array();
    var temp;
        
        for (var i=0; i < vars.length; i++) { 
            alert(vars[i]);           
            temp = vars[i].split("="); 
            pair.push(temp);            
        }
        
        vars[0]=vars[0].split("art_text=");
        vars[1]=vars[1].split("dat1_text=");
        vars[2]=vars[2].split("dat2_text=");
        /*
        var cero = pair[0];
        console.log(cero[1]);
        */

        document.forms["Formulario1"]["art_text"].value = vars[0][1];
        document.forms["Formulario1"]["dat1_text"].value = vars[1][1];
        document.forms["Formulario1"]["dat2_text"].value = vars[2][1];
    
    
}

 
 