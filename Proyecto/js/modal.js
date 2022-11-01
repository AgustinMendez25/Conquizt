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
    pausarTiempo();
})

cerrarAjustes.addEventListener("click", ()=>{
    modalAjustes.style.visibility = "hidden";
    modalAjustes.style.opacity = "0";
    modalAjustesCaja.style.transform = "translateY(-30%)";
    despausarTiempo();
})