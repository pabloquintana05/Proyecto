let cerrar = document.querySelector(".cerrar");
let abrirvideo = document.querySelector(".solicitar-videollamada");
let popup = document.querySelector(".popup");
let popupC = document.querySelector(".popup-contenedor");
let nombrePac = document.getElementById("nombrePac");
let apellidoPac = document.getElementById("apellidoP");
let cedulaP = document.getElementById("documentoP");
let motivoC = document.getElementById("motivoC")
const textopopup = document.getElementById("texto");



abrirvideo.addEventListener("click",function(e){
    e.preventDefault();
    if (nombrePac.value==""){
        alert("Debe Ingresar el Nombre del Paciente");
        nombrePac.focus();
    } else {
        if (apellidoPac.value=="") {
            alert("Debe Ingresar el Apellido del Paciente");
            apellidoPac.focus();
        } else {
            if (cedulaP.value==""){
                alert("Debe Ingresar el Documento del Paciente");
                cedulaP.focus();
            } else {
                if (motivoC.value==""){
                    alert("Debe Ingresar el MOTIVO de la CONSULTA");
                    motivoC.focus();
                } else {
                    popupC.style.opacity = "1";
                    popupC.style.visibility = "visible";
                    popup.classList.toggle("popup-cerrar");
                    textopopup.innerHTML = "El paciente" + "&nbsp" + nombrePac.value +  "&nbsp" + apellidoPac.value + "," + "&nbsp" + "con Documento:" + "&nbsp" + cedulaP.value + "," + "&nbsp" + "motivo de consulta:" + "&nbsp" + motivoC.value + "," + "&nbsp" + "se encuentra en la primer posición para hacer atendido por el Médico disponible. Disculpe la molestia.";
                }
            }
        }
    }
    
    
});


cerrar.addEventListener("click",function(){
    popup.classList.toggle("popup-cerrar");
   
    setTimeout(function(){
        popupC.style.opacity = "0";
        popupC.style.visibility = "hidden";
    },900)
    nombrePac.value="";
    apellidoPac.value="";
    cedulaP.value="";
    motivoC.value="";
    nombrePac.focus();
});
