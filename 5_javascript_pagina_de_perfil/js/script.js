console.log("¡Entramos a la página!")
function alerta(){
    alert("Hiciste clic en perfil");
    console.log("El usuario hizo clic en el título Perfil");
}

//elemento = <button class="boton_cerrar" onclick="eliminar(this)"><strong>Cerrar Sesión</strong></button>
//this se refiere al elemento con el cuál estoy interactuando.
function eliminar(elemento){
    elemento.remove();
}

// elemento <li onclick="cambiar_texto(this)">Inicio</li>
function cambiar_texto(elemento){
    elemento.innerText = "Texto distinto";
}

function cambia_imagen(elemento_img){
    elemento_img.src ="./assets/img/gonzalo.jpg";

}

function regresa_imagen(elemento_img){
    elemento_img.src ="./assets/img/isabel.jpeg";
}

//en editar perfil cambiare el texto con mi nombre a otro texto 
//en editar perfil  cambiar el lugar, color y mayuscula

function editar_perfil(){
    //querySelector puedo seleccionar cualquier elemento del documento HTML usando selectores,para id #, para class . , para <> nombre.
    
    // .getElementById("Identificador") podria hacerlo así en vez de .querySelector("#nombre")
    var elemento_nombre = document.querySelector("#nombre");
    elemento_nombre.innerText = "Cynthia Castillo";
    
    // .getElementByClassname("Identificador") podria hacerlo así en vez de querySelector(".lugar")
    var lugar =document.querySelector(".lugar");
    lugar.innerText = "Monterey";
    //.style cambia estilos
    lugar.style.color = "purple";
    //.lugar {text-transform: "uppercase"} eso cambia a mayúsculas
    lugar.style.textTransform = "uppercase";

    var parrafito = document.querySelector(".card-body-1 h3");
    parrafito.innerHTML = "Desarrolladora e instructora de programación <br> Mamá gatuna";

    //.querySelectorAll --> lista/array
    /*
    var parrafos = document.querySelectAll (".card-body p");
    parrafos[0]=primerparrafo;
    parrafos[1]=segundoparrafo;
    */

}

function cambiar_mode(){
    var elemento_body =document.querySelector("body");
    //elemento_body.classList.add("dark-mode");
    // classList -: array con las clases que tiene mi elemento

    if(elemento_body.classList.contains("dark-mode")){
        elemento_body.classList.remove("dark-mode");
    } else{
        elemento_body.classList.add("dark-mode");
    }
}