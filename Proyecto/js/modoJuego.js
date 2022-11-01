"use strict";

const li1 = document.getElementById("li-busqueda-1");
const li2 = document.getElementById("li-busqueda-2");
const li3 = document.getElementById("li-busqueda-3");
const li4 = document.getElementById("li-busqueda-4");

const modoJuego = document.getElementById("modoJuego").getAttribute("value");

switch (modoJuego) {
    case "1vs1":
        li1.style.marginLeft = "-100px";
        li1.style.marginTop = "-230px";
        li2.style.marginLeft = "-100px";
        li2.style.marginTop = "180px";
        li2.style.transform = "rotate(180deg)";
        li3.style.visibility = "hidden";
        li4.style.visibility = "hidden";
        break;
    case "2vs2":
        li1.style.marginLeft = "-100px";
        li1.style.marginTop = "-230px";
        li2.style.marginLeft = "105px";
        li2.style.marginTop = "-25px";
        li2.style.transform = "rotate(90deg)";
        li3.style.marginLeft = "-100px";
        li3.style.marginTop = "180px";
        li3.style.transform = "rotate(180deg)";
        li4.style.marginLeft = "-305px";
        li4.style.marginTop = "-25px";
        li4.style.transform = "rotate(270deg)";
        break;
    case "Triple":
        li1.style.marginLeft = "-100px";
        li1.style.marginTop = "-230px";
        li2.style.marginLeft = "105px";
        li2.style.marginTop = "-25px";
        li2.style.transform = "rotate(90deg)";
        li3.style.marginLeft = "-100px";
        li3.style.marginTop = "180px";
        li3.style.transform = "rotate(180deg)";
        break;
    case "FFA":
        li1.style.marginLeft = "-100px";
        li1.style.marginTop = "-230px";
        li2.style.marginLeft = "105px";
        li2.style.marginTop = "-25px";
        li2.style.transform = "rotate(90deg)";
        li3.style.marginLeft = "-100px";
        li3.style.marginTop = "180px";
        li3.style.transform = "rotate(180deg)";
        li4.style.marginLeft = "-305px";
        li4.style.marginTop = "-25px";
        li4.style.transform = "rotate(270deg)";
        break;
    default:
        break;
}

/* CREAR PARTIDA */

document.getElementById("btnJugar").addEventListener("click",()=>{
    const lis = document.getElementsByClassName("jugadorBusqueda");
    let fallo = false;
    for (const i of lis) {
        if(i.getAttribute("idCivilizacion") == "+"){
            fallo = true;
        }
    }
    if(fallo){
        alert("Todos los jugadores deben seleccionar una facción");
    }else{
        window.location = "partida.php?idPartida=" + idPartida;
    }
    /*
    $.ajax({
        url: '../php/crearPartida.php',
        type: 'POST',
        data: {
            "modoJuego" : modoJuego,
            "idJugador1" : li1.getAttribute("idJugador"),
            "idJugador2" : li2.getAttribute("idJugador"),
            "idJugador3" : li3.getAttribute("idJugador"),
            "idJugador4" : li4.getAttribute("idJugador")
        },
        success: function(response){
            let respuesta = JSON.parse(response);
            window.location = "partida.php?idPartida=" + respuesta[0]['idPartida'];
        }
    })*/
})

