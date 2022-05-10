"use strict";

const siguienteTurno = document.getElementById("siguienteTurno");
const nombreJugadorTurno = document.getElementById("nombreJugadorTurno");

const cantJugadores = 4;
let turnoJugador = 1;

siguienteTurno.addEventListener("click", ()=>{
    if(turnoJugador >= cantJugadores){
        turnoJugador = 1;
    }else{
        turnoJugador++;
    }
    nombreJugadorTurno.innerHTML = "Jugador " + turnoJugador;
})