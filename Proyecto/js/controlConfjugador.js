"use strict";

let idPartida = 0;

$(document).ready(function() {
    //$_POST['idJugador1'] 
    $.ajax({
        url: '../php/crearPartida.php',
        type: 'POST',
        data: {
            "modoJuego" : document.getElementById("modoJuego").getAttribute("value")
        },
        success: function(response) {
            let respuesta = JSON.parse(response);
            idPartida = respuesta[0]['idPartida'];
        }
    })
});

const liBusqueda1 = document.getElementById("li-busqueda-1");
const liBusqueda2 = document.getElementById("li-busqueda-2");
const liBusqueda3 = document.getElementById("li-busqueda-3");
const liBusqueda4 = document.getElementById("li-busqueda-4");

const nombreJugador = document.getElementById("nombreJugador");
const usuarioH4 = document.getElementById("usuarioH4");

const btnGuardarCJ = document.getElementById("btnGuardarCJ");

let liActual = 1;

function consultarLogueo() {
    $.ajax({
        url: '../php/consultarLogueo.php',
        type: 'POST',
        data: {
            "idPartida" : idPartida,
            "jugador" : usuarioH4.value
        },
        success: function(response) {
            if (response == "Invitado") {
                document.getElementById("logueo").style.display = "inline-block";

                document.getElementById("logueado").style.display = "none";
            }else{
                document.getElementById("logueo").style.display = "none";

                document.getElementById("logueado").style.display = "inline-block";
                document.getElementById("nombreUsuarioLogueado").innerHTML = response;
            }
        }
    })
}

function setearFaccionIMG(i){
    switch (i) {
        case "1":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoMongol.png");
            break;
        case "2":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoFrances.png");
            break;
        case "3":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoJapones.png");
            break;
        case "4":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoVikingo.png");
            break;
        case "5":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoEgipcio.png");
            break;
        case "6":
            faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoRomano.png");
            break;
        default:
            faccionJugador.firstElementChild.setAttribute("src", "../img/signoPregunta.png");
            break;
    }
}

liBusqueda1.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda1.innerHTML;
    usuarioH4.innerHTML = liBusqueda1.innerHTML;
    usuarioH4.value = 1;
    setearFaccionIMG(liBusqueda1.getAttribute("idCivilizacion"));
    faccionJugador.value = liBusqueda1.getAttribute("idCivilizacion");
    liActual = 1;
    consultarLogueo();
})
liBusqueda2.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda2.innerHTML;
    usuarioH4.innerHTML = liBusqueda2.innerHTML;
    usuarioH4.value = 2;
    setearFaccionIMG(liBusqueda2.getAttribute("idCivilizacion"));
    faccionJugador.value = liBusqueda2.getAttribute("idCivilizacion");
    liActual = 2;
    consultarLogueo();
})
liBusqueda3.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda3.innerHTML;
    usuarioH4.innerHTML = liBusqueda3.innerHTML;
    usuarioH4.value = 3;
    setearFaccionIMG(liBusqueda3.getAttribute("idCivilizacion"));
    faccionJugador.value = liBusqueda3.getAttribute("idCivilizacion");
    liActual = 3;
    consultarLogueo();
})
liBusqueda4.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda4.innerHTML;
    usuarioH4.innerHTML = liBusqueda4.innerHTML;
    usuarioH4.value = 4;
    setearFaccionIMG(liBusqueda4.getAttribute("idCivilizacion"));
    faccionJugador.value = liBusqueda4.getAttribute("idCivilizacion");
    liActual = 4;
    consultarLogueo();
})

const liFaccion1 = document.getElementById("li-faccion-1");
const liFaccion2 = document.getElementById("li-faccion-2");
const liFaccion3 = document.getElementById("li-faccion-3");
const liFaccion4 = document.getElementById("li-faccion-4");
const liFaccion5 = document.getElementById("li-faccion-5");
const liFaccion6 = document.getElementById("li-faccion-6");

const faccionJugador = document.getElementById("faccionJugador");

function obtenerInfoFaccion(i) {
    $.ajax({
        url: '../php/obtenerInfoFaccion.php',
        type: 'POST',
        data: {
            "faccion" : i
        },
        success: function(response) {
            let respuesta = JSON.parse(response);
            document.getElementById("tituloFaccion").innerHTML = respuesta[0]['tipoCivilizacion'];
            document.getElementById("descripcionFaccion").innerHTML = respuesta[0]['descripcionFaccion'];
        }
    })
}

liFaccion1.addEventListener("click", ()=>{//Mongoles
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoMongol.png");
    faccionJugador.value = "1";
    obtenerInfoFaccion(1);
})
liFaccion2.addEventListener("click", ()=>{//Francos
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoFrances.png");
    faccionJugador.value = "2";
    obtenerInfoFaccion(2);
})
liFaccion3.addEventListener("click", ()=>{//Japoneses
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoJapones.png");
    faccionJugador.value = "3";
    obtenerInfoFaccion(3);
})
liFaccion4.addEventListener("click", ()=>{//Vikingos
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoVikingo.png");
    faccionJugador.value = "4";
    obtenerInfoFaccion(4);
})
liFaccion5.addEventListener("click", ()=>{//Egipcios
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoEgipcio.png");
    faccionJugador.value = "5";
    obtenerInfoFaccion(5);
})
liFaccion6.addEventListener("click", ()=>{//Romanos
    faccionJugador.firstElementChild.setAttribute("src", "../img/Cascos/CascoRomano.png");
    faccionJugador.value = "6";
    obtenerInfoFaccion(6);
})

let valorNombre;
btnGuardarCJ.addEventListener("click", ()=>{
    valorNombre = nombreJugador.value;
    const facc = faccionJugador.value;
    nombreJugador.setAttribute("value", valorNombre);
    usuarioH4.innerHTML = valorNombre;
    switch(liActual){
        case 1:
            liBusqueda1.innerHTML = valorNombre;
            liBusqueda1.setAttribute("idCivilizacion", facc);
            break;
        case 2:
            liBusqueda2.innerHTML = valorNombre;
            liBusqueda2.setAttribute("idCivilizacion", facc);
            break;
        case 3:
            liBusqueda3.innerHTML = valorNombre;
            liBusqueda3.setAttribute("idCivilizacion", facc);
            break;
        case 4:
            liBusqueda4.innerHTML = valorNombre;
            liBusqueda4.setAttribute("idCivilizacion", facc);
            break;
    }

    $.ajax({
        url: '../php/updateDatosJugador.php',
        type: 'POST',
        data: {
            "idPartida" : idPartida,
            "jugador" : liActual,
            "nickname" : valorNombre,
            "faccion" : facc
        }
    })
})

document.getElementById("btnRegistro").addEventListener("click", ()=>{
    const contenedorRegistro = document.getElementById("contenedorRegistro");

    contenedorRegistro.style.opacity = "1";
    contenedorRegistro.style.zIndex = "20";
    contenedorRegistro.style.visibility = "visible";
})
document.getElementById("btnCerrarRegistro").addEventListener("click", ()=>{
    const contenedorRegistro = document.getElementById("contenedorRegistro");

    contenedorRegistro.style.opacity = "0";
    contenedorRegistro.style.zIndex = "0";
    contenedorRegistro.style.visibility = "hidden";
})

document.getElementById("btnRegistrarse").addEventListener("click",()=>{
    $.ajax({
        url: '../php/registrarUsuario.php',
        type: 'POST',
        data: {
            "nombre" : document.getElementById("nombre").value,
            "email" : document.getElementById("email").value,
            "pass" : document.getElementById("pass").value
        },
        success: function(response) {
            if(response){
                const contenedorRegistro = document.getElementById("contenedorRegistro");

                contenedorRegistro.style.opacity = "0";
                contenedorRegistro.style.zIndex = "0";
                contenedorRegistro.style.visibility = "hidden";

                alert("Se creó el usuario correctamente");
            }else{
                document.getElementById("nombre").value = "";
                document.getElementById("email").value = "";
                document.getElementById("pass").value = "";
                alert("Datos Incorrectos. Ingrese nuevamente.");
            }
        }
    })
})

document.getElementById("btnIniciar").addEventListener("click",()=>{
    $.ajax({
        url: '../php/inicioSesion.php',
        type: 'POST',
        data: {
            "idPartida" : idPartida,
            "jugador" : usuarioH4.value,
            "email" : document.getElementById("nombreIniciar").value,
            "pass" : document.getElementById("passIniciar").value
        },
        success: function(response) {
            if(!response){
                document.getElementById("nombreIniciar").value = "";
                document.getElementById("passIniciar").value = "";
                alert("Datos Incorrectos. Ingrese nuevamente.");
            }else{
                document.getElementById("logueo").style.display = "none";

                document.getElementById("logueado").style.display = "inline-block";
                document.getElementById("nombreUsuarioLogueado").innerHTML = response;
            }
        }
    })
})

document.getElementById("btnCerrarSesion").addEventListener("click",()=>{
    $.ajax({
        url: '../php/cierreSesion.php',
        type: 'POST',
        data: {
            "idPartida" : idPartida,
            "jugador" : usuarioH4.value,
        },
        success: function(response) {
            if(!response){
                alert("Error al cerrar sesión");
            }else{
                document.getElementById("logueo").style.display = "inline-block";

                document.getElementById("logueado").style.display = "none";
            }
        }
    })
})