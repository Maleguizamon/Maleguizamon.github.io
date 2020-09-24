
function ejecutar(){
    for(var i=0; i<3; i++){
        document.getElementsByTagName("p")[i].onclick=alerta;
    }
}


function alerta(){
    alert('Mensaje de alerta');
}

window.onload=ejecutar;  