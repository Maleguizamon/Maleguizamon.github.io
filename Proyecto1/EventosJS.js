
var miVideo, reproducir, barra, progreso, maximo;
maximo=1000;

function tipoImagen(){
    for(var i=0;i<6;i++){
        var imagen=document.getElementsByTagName("img")[i];
        imagen.addEventListener("click",mensaje,false);
    }
}

function mensaje(){
    alert(" Entonces mi pes ?? ");
}

window.onload=tipoImagen;

function playVideo(){
    miVideo=document.getElementById("videoCod");
    reproducir=document.getElementById("play");
    barra=document.getElementById("barraProgreso");
    colorear=document.getElementById("progreso");

    reproducir.addEventListener("click",clicando,false);
    barra.addEventListener("click",adelantar,false);

}

function clicando(){
    if((videoCod.paused==false) && (videoCod.ended==false)){
        videoCod.pause();
        reproducir.innerHTML="Play";
    }
    else{
        videoCod.play();
        reproducir.innerHTML="Pause";
        
        bucle=setInterval(estado,100);
    }
}

function estado(){
    if(videoCod.ended==false){
        var total=parseInt(videoCod.currentTime*maximo/videoCod.duration);
        colorear.style.whidth=total+"px";
    }
}

function adelantar(){
    if((videoCod.paused==false) && (videoCod.ended==false)){
        var ratonX=posicion.pageX-progresobarra.offsetleft;
        var nuevoT=ratonX*videoCod.duration/maximo;
        videoCod.currentTime=nuevoT;
        colorear.style.whidth=ratonX+"px";
    }
}

window.addEventListener("load",playVideo,false);

window.addEventListener("load",comenzar,false);

function comenzar(){
    var nombre=document.getElementById("FormularioNombre");
    var apellido=document.getElementById("FormularioApellido");

    nombre.addEventListener("input",validar,false);
    apellido.addEventListener("input",validar,false);
}

function validar(){
    if(nombre.value=="" && apellido.value==""){
        nombre.setCustomValidity("Introduce nombre o apellido")
        nombre.style.background="red";
        apellido.style.background="red";
    }
    else{
        nombre.setCustomValidity("");
        nombre.style.background="white";
        apellido.style.background="white";
    }

}