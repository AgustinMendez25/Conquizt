"use strict";

/*Modales Ajustes*/

const btnAjustes = document.getElementById("btnAjustes");

const modalAjustes = document.getElementById("modalAjustes");
const modalAjustesCaja = document.getElementById("modalAjustesCaja");

const cerrarAjustes = document.getElementById("cerrarAjustes");

btnAjustes.addEventListener("click", ()=>{
    modalAjustes.style.visibility = "visible";
    modalAjustes.style.opacity = "1";
    modalAjustesCaja.style.transform = "translateY(0%)";
})

cerrarAjustes.addEventListener("click", ()=>{
    modalAjustes.style.visibility = "hidden";
    modalAjustes.style.opacity = "0";
    modalAjustesCaja.style.transform = "translateY(-30%)";
})

/*Modales Atacar Defender*/

const atacarBtn = document.getElementById("atacarBtn");
const defenderBtn = document.getElementById("defenderBtn");

const modalAtacar = document.getElementById("modalAtacar");
const modalDefender = document.getElementById("modalDefender");

const cerrarModalDefender = document.getElementById("cerrarModalDefender");
const cerrarModalAtacar = document.getElementById("cerrarModalAtacar");

defenderBtn.addEventListener("click", ()=>{
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
    modalDefender.style.visibility = "visible";
    modalDefender.style.opacity = "1";
})

cerrarModalDefender.addEventListener("click", ()=>{
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
})

atacarBtn.addEventListener("click", ()=>{
    modalAtacar.style.visibility = "visible";
    modalAtacar.style.opacity = "1";
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
})

cerrarModalAtacar.addEventListener("click", ()=>{
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
})

/*Modal Preguntas*/

const btnConfirmarDefensa = document.getElementById("btnConfirmarDefensa");
const btnConfirmarAtaque = document.getElementById("btnConfirmarAtaque");

const modalPreguntas = document.getElementById("modalPreguntas");

btnConfirmarDefensa.addEventListener("click", ()=>{
    modalPreguntas.style.opacity = "1";
    modalPreguntas.style.visibility = "visible";
})

btnConfirmarAtaque.addEventListener("click", ()=>{
    modalPreguntas.style.opacity = "1";
    modalPreguntas.style.visibility = "visible";
})