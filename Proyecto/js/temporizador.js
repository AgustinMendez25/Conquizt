"use strict";

let minutos = 0;
let segundos = 30;

let pasarSeg = 0;

function pasarSegundos() {
    let txtSegundos;

    if(segundos < 0){
        segundos = 59;
    }

    if(segundos < 10){
        txtSegundos = "0" + segundos;
    }else{
        txtSegundos = segundos;
    }
    document.getElementById("segundos").innerHTML = txtSegundos;
    segundos --;

    pasarMinutos(segundos);
}

function pasarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() => {
           minutos--; 
        }, 500);
    }else if(segundos == -1 && minutos == 0){
        //finalizó el tiempo
        if((numRonda == (cantRondas)) && (turnoJugador == cantJugadores)){
            mostrarResultados();
        }else{
            pasarTurno();
            escalarMensajeTurno();
        }
        minutos = 0;
        segundos = 30;

        const modalPreguntas = document.getElementById("modalPreguntas");
        modalPreguntas.style.visibility = "hidden";
        modalPreguntas.style.opacity = "0";
        modalPreguntas.style.pointerEvents = "none";
        const modalAtacarDefender = document.getElementById("modalAtacarDefender");        
        modalAtacarDefender.style.visibility = "hidden";
        modalAtacarDefender.style.opacity = "0";
    }
    txtMinutos = minutos;
    document.getElementById("minutos").innerHTML = txtMinutos;
}

function pausarTiempo() {
    clearInterval(pasarSeg);
}

function despausarTiempo(){
    pasarSeg = setInterval(pasarSegundos, 1000);
}