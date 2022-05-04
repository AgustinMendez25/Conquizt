"use strict";

const liBusqueda1 = document.getElementById("li-busqueda-1");
const liBusqueda2 = document.getElementById("li-busqueda-2");
const liBusqueda3 = document.getElementById("li-busqueda-3");
const liBusqueda4 = document.getElementById("li-busqueda-4");

const nombreJugador = document.getElementById("nombreJugador");

const btnGuardarCJ = document.getElementById("btnGuardarCJ");

let liActual = 1;

liBusqueda1.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda1.innerHTML;
    liActual = 1;
})
liBusqueda2.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda2.innerHTML;
    liActual = 2;
})
liBusqueda3.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda3.innerHTML;
    liActual = 3;
})
liBusqueda4.addEventListener("click", ()=>{
    nombreJugador.value = liBusqueda4.innerHTML;
    liActual = 4;
})

let valorNombre;
btnGuardarCJ.addEventListener("click", ()=>{
    switch(liActual){
        case 1:
            valorNombre = nombreJugador.value;
            liBusqueda1.innerHTML = valorNombre;
            nombreJugador.setAttribute("value", valorNombre);
            break;
        case 2:
            valorNombre = nombreJugador.value;
            liBusqueda2.innerHTML = valorNombre;
            nombreJugador.setAttribute("value", valorNombre);
            break;
        case 3:
            valorNombre = nombreJugador.value;
            liBusqueda3.innerHTML = valorNombre;
            nombreJugador.setAttribute("value", valorNombre);
            break;
        case 4:
            valorNombre = nombreJugador.value;
            liBusqueda4.innerHTML = valorNombre;
            nombreJugador.setAttribute("value", valorNombre);
            break;
    }
})