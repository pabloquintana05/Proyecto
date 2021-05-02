const ListaMedUL = document.getElementById('listamed');
const botonCargar = document.getElementById('cargar');
let nombrePaciente = document.getElementById('nombreP');
let apellidoPaciente = document.getElementById('apellidoP');
let cedula = document.getElementById('documentoP');
let NombreMed = document.getElementById('nombre-Med');
let Cantidad = document.getElementById('cantidad-Med');
let botonEnviar = document.querySelector(".Enviar");
let botonBorrar = document.querySelector(".Borrar");
let botonEnviarResponse = document.querySelector(".EnviarMed");
let cerrar = document.querySelector(".cerrar");
let popup = document.querySelector(".popup");
let popupC = document.querySelector(".popup-contenedor");
const textopopup = document.getElementById("texto");


botonCargar.addEventListener('click',function(e) {
    e.preventDefault();
    if (nombrePaciente.value==""){
        alert("Debe ingresar el NOMBRE del Paciente");
        nombrePaciente.focus();
    } else {
        if (apellidoPaciente.value==""){
            alert("Debe ingresar el Apellido del Paciente");
            apellidoPaciente.focus();
        } else {
            if (cedula.value==""){
                alert("Debe ingresar la CEDULA del Paciente");
                cedula.focus();
            } else {
                if (NombreMed.value==""){
                    alert("Debe ingresar el Medicamento a repetir");
                    NombreMed.focus();
                } else {
                    if (Cantidad.value==""){
                        alert("Debe ingresar la Cantidad que toma por Día");
                        Cantidad.focus();
                    } else {
                        cargarMedicacion(NombreMed,Cantidad);
                        NombreMed.focus();
                    }
                    
                }
                
            }
        }
    }
    
});

botonBorrar.addEventListener('click',function(e) {
    e.preventDefault();
    // creo una variable que traigo todos los checked box 
    const cajitas = document.querySelectorAll("input:checked");

    // pregunto si hay checked box cliqueado, si no hay, largo el alert 
    if (cajitas.length == '0'){
        alert("Para eliminar uno o más Medicamentos, debe dar CLICK en una de las Cajitas del Medicamento a borrar!!!");
    } else {
    // sino, hago un for para recorrer todas las cajitas cliqueadas y voy borrando de a una 
        for (i=0; i < cajitas.length; i++){
            cajitas[i].parentElement.remove();
        }
    }    
});

botonEnviarResponse.addEventListener("click",function(e){
    e.preventDefault();
    if (nombrePaciente.value==""){
        alert("Debe Ingresar el Nombre del Paciente");
        nombrePaciente.focus();
    } else {
        if (apellidoPaciente.value==""){
            console.log(apellidoPaciente);
            alert("Debe Ingresar el Apellido del Paciente");
            apellidoPaciente.focus();
        } else {
            if (cedula.value==""){
                console.log(cedula);
                alert("Debe Ingresar el Documento del Paciente");
                cedula.focus();
            } else {
                if (NombreMed.value == "") {
                    alert("Debe Ingresar el Nombre de la Medicación");
                    NombreMed.focus();
                } else {
                    if (Cantidad.value == "") {
                        alert("Debe Ingresar la Cantidad que toma por Día");
                        Cantidad.focus();
                    } else {
                        popupC.style.opacity = "1";
                        popupC.style.visibility = "visible";
                        popup.classList.toggle("popup-cerrar");
                        textopopup.innerHTML = "La solicitud de repite de Medicación fue enviada correctamente. Serán avisados por SMS cuando sus recetas esten prontas para retirar. Gracias."; 
                    }
                }    
               
            }
        }
    }            
});

botonEnviar.addEventListener("click",function(e){
    e.preventDefault();
    if (nombrePaciente.value==""){
        alert("Debe Ingresar el Nombre del Paciente");
        nombrePaciente.focus();
    } else {
        if (apellidoPaciente.value==""){
            console.log(apellidoPaciente);
            alert("Debe Ingresar el Apellido del Paciente");
            apellidoPaciente.focus();
        } else {
            if (cedula.value==""){
                console.log(cedula);
                alert("Debe Ingresar el Documento del Paciente");
                cedula.focus();
            } else {
                if (ListaMedUL.children.length < 1){
                    alert("No se ha ingresado Medicación");
                    NombreMed.focus();
                } else {
                    popupC.style.opacity = "1";
                    popupC.style.visibility = "visible";
                    popup.classList.toggle("popup-cerrar");
                    textopopup.innerHTML = "La solicitud de repite de Medicación fue enviada correctamente. Serán avisados por SMS cuando sus recetas esten prontas para retirar";
                }    
            }
        }
    }
    
    
});


cerrar.addEventListener("click",function(){
    popup.classList.toggle("popup-cerrar");
    const cajitas = document.querySelectorAll("input[type=checkbox]");
    console.log(cajitas);
    setTimeout(function(){
        popupC.style.opacity = "0";
        popupC.style.visibility = "hidden";
    },900)
    for (i=0; i < cajitas.length; i++){
        cajitas[i].parentElement.remove();
    }
    nombrePaciente.value="";
    apellidoPaciente.value="";
    cedula.value="";
    NombreMed.value="";
    Cantidad.value="";
    nombrePaciente.focus();
});

function cargarMedicacion(Medicacion,cant){
    const nuevoelemento = document.createElement('li');
    const nuevaMedicacion = document.createElement('span');
    const Cantidad = document.createElement('span');
    const chequeo = document.createElement('input');
    
    // le agrego el atributo checkbox al input
    chequeo.setAttribute("type","checkbox");
    // le agrego al span el texto y la cantidad
    nuevaMedicacion.textContent =  "Nombre de Medicación:     " + Medicacion.value;
    Cantidad.textContent = "Cantidad que toma por día:    " + cant.value;
    // le agrego al li la medicacion, la cantidad y el checkbox
    nuevoelemento.appendChild(nuevaMedicacion);
    nuevoelemento.appendChild(Cantidad);
    nuevoelemento.appendChild(chequeo);
    // le agrego todo al UL
    ListaMedUL.appendChild(nuevoelemento);
    Medicacion.value="";
    cant.value="";
    
};

