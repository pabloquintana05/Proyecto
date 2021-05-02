let usuario = document.getElementById("UsuarioF");
let pass = document.getElementById("passwordF");
let botoningreso = document.querySelector(".login");
let cerrar = document.querySelector(".cerrar");
let popup = document.querySelector(".popup");
let popupC = document.querySelector(".popup-contenedor");
const textopopup = document.getElementById("texto");



botoningreso.addEventListener("click",function(e){
    e.preventDefault();
    if (usuario.value==""){
        alert("Debe Ingresar el Usuario");
        usuario.focus();
    } else {
        if (pass.value==""){
            alert("Debe Ingresar la Contraseña");
            pass.focus();
        } else {
            popupC.style.opacity = "1";
            popupC.style.visibility = "visible";
            popup.classList.toggle("popup-cerrar");
            textopopup.innerHTML = "La página actualmente se encuentra en Mantenimiento, volverá a la brevedad. Gracias.";
        }
    }
    
    
});


cerrar.addEventListener("click",function(){
    popup.classList.toggle("popup-cerrar");
   
    setTimeout(function(){
        popupC.style.opacity = "0";
        popupC.style.visibility = "hidden";
    },900)
    usuario.value="";
    pass.value="";
    usuario.focus();
});