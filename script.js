//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("mysql").classList.add("barra-progreso3");
        document.getElementById("php").classList.add("barra-progreso4");
    }

}

//Validacion de correo

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const parrafo = document.getElementById("aviso");
const form = document.getElementById("form");

form.addEventListener("submit", e =>{
    e.preventDefault()
    let aviso = "";
    let entrada = false;
    let valEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(nombre.value.length <1){
        aviso += "Por favor ingrese un nombre. "
        entrada = true
    }
    if(!valEmail.test(correo.value)){
        aviso += "Por favor introduzca un correo válido!"
        entrada = true
    }
    if(entrada){
        parrafo.textContent = aviso;
    }else{
        parrafo.textContent = "";
        form.submit();
    }
})