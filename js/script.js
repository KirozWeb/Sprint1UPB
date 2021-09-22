var aspectoBtn = document.getElementById("aspecto");
var mainElement = document.getElementById("columna_derecha");
var image2 = document.getElementById('navbar_logo2');
var image3 = document.getElementById('navbar_logo3');

var contador = 0;
aspectoBtn.addEventListener("click", function(){
    console.log("clickeado");
    mainElement.classList.toggle("dark");
    
    if( contador%2 == 0) {
        image2.src = "./imgs/logoblanco.png";
        image3.src = "./imgs/logoblanco.png";
    } else {
        image2.src = "./imgs/logo.png";
        image3.src = "./imgs/logo.png";
    }
    contador++;

});