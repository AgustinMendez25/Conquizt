"use strict";

/*Turno y ronda*/

const siguienteTurno = document.getElementById("siguienteTurno");
const nombreJugadorTurno = document.getElementById("nombreJugadorTurno");
const ronda = document.getElementById("ronda");

const cantJugadores = 4;
let turnoJugador = 1;
let numRonda = 1;

/*Preguntas*/

function pasarTurno(){
    if(turnoJugador >= cantJugadores){
        turnoJugador = 1;
        numRonda++;
    }else{
        turnoJugador++;
    }
    nombreJugadorTurno.innerHTML = "Jugador " + turnoJugador;
    ronda.innerHTML = numRonda;
}

function darTiempo() {
    const modalPreguntas = document.getElementById("modalPreguntas");

    const Tiempo = setTimeout(()=>{
        modalPreguntas.style.visibility = "hidden";
        modalPreguntas.style.opacity = "0";
        pasarTurno();
    }, 3000);
}

const btnRespuesta1 = document.getElementById("respuesta1");
const btnRespuesta2 = document.getElementById("respuesta2");
const btnRespuesta3 = document.getElementById("respuesta3");
const btnRespuesta4 = document.getElementById("respuesta4");

const respCorrecta = btnRespuesta3.getAttribute("id");

btnRespuesta1.addEventListener("click", ()=>{
    if(btnRespuesta1.getAttribute("id") == respCorrecta){
        btnRespuesta1.style.backgroundColor = "green";
    }else{
        btnRespuesta1.style.backgroundColor = "red";
    }
    darTiempo();
})

btnRespuesta2.addEventListener("click", ()=>{
    if(btnRespuesta2.getAttribute("id") == respCorrecta){
        btnRespuesta2.style.backgroundColor = "green";
    }else{
        btnRespuesta2.style.backgroundColor = "red";
    }
    darTiempo();
})

btnRespuesta3.addEventListener("click", ()=>{
    if(btnRespuesta3.getAttribute("id") == respCorrecta){
        btnRespuesta3.style.backgroundColor = "green";
    }else{
        btnRespuesta3.style.backgroundColor = "red";
    }
    darTiempo();
})

btnRespuesta4.addEventListener("click", ()=>{
    if(btnRespuesta4.getAttribute("id") == respCorrecta){
        btnRespuesta4.style.backgroundColor = "green";
    }else{
        btnRespuesta4.style.backgroundColor = "red";
    }
    darTiempo();
})


