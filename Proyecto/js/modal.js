"use strict";

const btnAjustes = document.getElementById("btnAjustes");

const modalAjustes = document.getElementById("modalAjustes");
const modalAjustesCaja = document.getElementById("modalAjustesCaja");

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