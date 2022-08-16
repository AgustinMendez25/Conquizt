"use strict";

/* FUNCIONES */

function mensajeTexto(mensaje) {
    let texto = document.getElementById("cajaAvisos");
    texto.innerHTML = texto.innerHTML + mensaje;
}

/*JUGADORES*/

let jugador1 = [];
let jugador2 = [];
let jugador3 = [];
let jugador4 = [];

let idActual = 0;
let jugadorActual = "";
let colorActual = "";

const idPartida = 1;
let numRonda = 0;

/*TERRITORIOS*/

const t1  = document.getElementById("Vector_1");
const t2  = document.getElementById("Vector_2");
const t3  = document.getElementById("Vector_3");
const t4  = document.getElementById("Vector_4");
const t5  = document.getElementById("Vector_5");
const t6  = document.getElementById("Vector_6");
const t7  = document.getElementById("Vector_7");
const t8  = document.getElementById("Vector_8");
const t9  = document.getElementById("Vector_9");
const t10 = document.getElementById("Vector_10");
const t11 = document.getElementById("Vector_11");
const t12 = document.getElementById("Vector_12");
const t13 = document.getElementById("Vector_13");
const t14 = document.getElementById("Vector_14");
const t15 = document.getElementById("Vector_15");
const t16 = document.getElementById("Vector_16");
const t17 = document.getElementById("Vector_17");
const t18 = document.getElementById("Vector_18");
const t19 = document.getElementById("Vector_19");
const t20 = document.getElementById("Vector_20");
const t21 = document.getElementById("Vector_21");
const t22 = document.getElementById("Vector_22");
const t23 = document.getElementById("Vector_23");
const t24 = document.getElementById("Vector_24");
const t25 = document.getElementById("Vector_25");
const t26 = document.getElementById("Vector_26");
const t27 = document.getElementById("Vector_27");
const t28 = document.getElementById("Vector_28");
const t29 = document.getElementById("Vector_29");
const t30 = document.getElementById("Vector_30");
const t31 = document.getElementById("Vector_31");
const t32 = document.getElementById("Vector_32");
const t33 = document.getElementById("Vector_33");
const t34 = document.getElementById("Vector_34");
const t35 = document.getElementById("Vector_35");

$(document).ready(function() {
    //Si entra aca el jQuery funciona 
    $.ajax({
        url: '../php/obtenerRonda.php',
        type: 'POST',
        data:{"idPartida" : idPartida},
        success: function(response) {
            var resultado = JSON.parse(response);
            numRonda = resultado[0]['ronda'];
            ronda.innerHTML = numRonda;
        }
    })
    $.ajax({
        url: '../php/controlBDD.php',
        type: 'POST',
        success: function(response) {
            var jugadores = JSON.parse(response);
            jugador1 = [jugadores[0]['idJugador'], jugadores[0]['nombre'], jugadores[0]['color']];
            jugador2 = [jugadores[1]['idJugador'], jugadores[1]['nombre'], jugadores[1]['color']];
            jugador3 = [jugadores[2]['idJugador'], jugadores[2]['nombre'], jugadores[2]['color']];
            jugador4 = [jugadores[3]['idJugador'], jugadores[3]['nombre'], jugadores[3]['color']];
            idActual = jugador1[0];
            jugadorActual = jugador1[1];
            colorActual = jugador1[2];
            $('#jugador1').html(jugador1[1]);
            $('#jugador2').html(jugador2[1]);
            $('#jugador3').html(jugador3[1]);
            $('#jugador4').html(jugador4[1]);
            document.getElementById("jugador1").style.color = jugador1[2] + "b6";
            document.getElementById("jugador2").style.color = jugador2[2] + "b6";
            document.getElementById("jugador3").style.color = jugador3[2] + "b6";
            document.getElementById("jugador4").style.color = jugador4[2] + "b6";
            $('#nombreJugadorTurno').html(jugador1[1]);
        }
    })
    $.ajax({
        url: '../php/obtenerValoresTerritorios.php',
        type: 'POST',
        success: function(response) {
            var territorios = JSON.parse(response);
            
            for (const t in territorios) {
                switch (territorios[t]['idTerritorio']) {
                    case "1":
                        t1.setAttribute("value", territorios[t]['nombre']);
                        t1.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "2":
                        t2.setAttribute("value", territorios[t]['nombre']);
                        t2.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "3":
                        t3.setAttribute("value", territorios[t]['nombre']);
                        t3.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "4":
                        t4.setAttribute("value", territorios[t]['nombre']);
                        t4.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "5":
                        t5.setAttribute("value", territorios[t]['nombre']);
                        t5.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "6":
                        t6.setAttribute("value", territorios[t]['nombre']);
                        t6.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "7":
                        t7.setAttribute("value", territorios[t]['nombre']);
                        t7.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "8":
                        t8.setAttribute("value", territorios[t]['nombre']);
                        t8.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "9":
                        t9.setAttribute("value", territorios[t]['nombre']);
                        t9.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "10":
                        t10.setAttribute("value", territorios[t]['nombre']);
                        t10.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "11":
                        t11.setAttribute("value", territorios[t]['nombre']);
                        t11.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "12":
                        t12.setAttribute("value", territorios[t]['nombre']);
                        t12.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "13":
                        t13.setAttribute("value", territorios[t]['nombre']);
                        t13.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "14":
                        t14.setAttribute("value", territorios[t]['nombre']);
                        t14.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "15":
                        t15.setAttribute("value", territorios[t]['nombre']);
                        t15.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "16":
                        t16.setAttribute("value", territorios[t]['nombre']);
                        t16.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "17":
                        t17.setAttribute("value", territorios[t]['nombre']);
                        t17.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "18":
                        t18.setAttribute("value", territorios[t]['nombre']);
                        t18.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "19":
                        t19.setAttribute("value", territorios[t]['nombre']);
                        t19.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "20":
                        t20.setAttribute("value", territorios[t]['nombre']);
                        t20.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "21":
                        t21.setAttribute("value", territorios[t]['nombre']);
                        t21.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "22":
                        t22.setAttribute("value", territorios[t]['nombre']);
                        t22.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "23":
                        t23.setAttribute("value", territorios[t]['nombre']);
                        t23.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "24":
                        t24.setAttribute("value", territorios[t]['nombre']);
                        t24.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "25":
                        t25.setAttribute("value", territorios[t]['nombre']);
                        t25.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "26":
                        t26.setAttribute("value", territorios[t]['nombre']);
                        t26.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "27":
                        t27.setAttribute("value", territorios[t]['nombre']);
                        t27.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "28":
                        t28.setAttribute("value", territorios[t]['nombre']);
                        t28.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "29":
                        t29.setAttribute("value", territorios[t]['nombre']);
                        t29.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "30":
                        t30.setAttribute("value", territorios[t]['nombre']);
                        t30.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "31":
                        t31.setAttribute("value", territorios[t]['nombre']);
                        t31.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "32":
                        t32.setAttribute("value", territorios[t]['nombre']);
                        t32.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "33":
                        t33.setAttribute("value", territorios[t]['nombre']);
                        t33.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "34":
                        t34.setAttribute("value", territorios[t]['nombre']);
                        t34.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                    case "35":
                        t35.setAttribute("value", territorios[t]['nombre']);
                        t35.setAttribute("idT", territorios[t]['idTerritorio']);
                        break;
                }
            }
        }
    })
})

function cambiarColorTerritorio(t) {
    switch (t.getAttribute("value")) {
        case jugador1[1]:
            t.style.fill = jugador1[2] + "55";
            break;
        case jugador2[1]:
            t.style.fill = jugador2[2] + "55";
            break;
        case jugador3[1]:
            t.style.fill = jugador3[2] + "55";
            break;
        case jugador4[1]:
            t.style.fill = jugador4[2] + "55";
            break;
        default:
            t.style.fill = "#e1e4e055";
            break;
    }
}

//Se incluye un timeout ya que ajax demora un poco en obtener los nombres, una vez obtenidos se procesa el resto
setTimeout(function(){
    jugadorActual = jugador1[1];
    cambiarColorTerritorio(t1);
    cambiarColorTerritorio(t2);
    cambiarColorTerritorio(t3);
    cambiarColorTerritorio(t4);
    cambiarColorTerritorio(t5);
    cambiarColorTerritorio(t6);
    cambiarColorTerritorio(t7);
    cambiarColorTerritorio(t8);
    cambiarColorTerritorio(t9);
    cambiarColorTerritorio(t10);
    cambiarColorTerritorio(t11);
    cambiarColorTerritorio(t12);
    cambiarColorTerritorio(t13);
    cambiarColorTerritorio(t14);
    cambiarColorTerritorio(t15);
    cambiarColorTerritorio(t16);
    cambiarColorTerritorio(t17);
    cambiarColorTerritorio(t18);
    cambiarColorTerritorio(t19);
    cambiarColorTerritorio(t20);
    cambiarColorTerritorio(t21);
    cambiarColorTerritorio(t22);
    cambiarColorTerritorio(t23);
    cambiarColorTerritorio(t24);
    cambiarColorTerritorio(t25);
    cambiarColorTerritorio(t26);
    cambiarColorTerritorio(t27);
    cambiarColorTerritorio(t28);
    cambiarColorTerritorio(t29);
    cambiarColorTerritorio(t30);
    cambiarColorTerritorio(t31);
    cambiarColorTerritorio(t32);
    cambiarColorTerritorio(t33);
    cambiarColorTerritorio(t34);
    cambiarColorTerritorio(t35);
}, 500);

/*MODALES*/

const modalAtacar = document.getElementById("modalAtacar");
const modalDefender = document.getElementById("modalDefender");

const cerrarModalDefender = document.getElementById("cerrarModalDefender");
const cerrarModalAtacar = document.getElementById("cerrarModalAtacar");

cerrarModalDefender.addEventListener("click", ()=>{
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
})

cerrarModalAtacar.addEventListener("click", ()=>{
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
})

/*Modales*/

function llenarDatosTerritorio(t){
    $.ajax({
        url: '../php/pedirDatosTerritorio.php',
        type: 'POST',
        data: {territorio : t},
        success: function(response) {
            var territorio = JSON.parse(response);
            
            $('#nombreTerritorioDef').html(territorio[0]['nombreTerritorio']);
            $('#nombreTerritorioAtq').html(territorio[0]['nombreTerritorio']);
            $('#cantSoldadosDef').html(territorio[0]['cantSoldados']);
            $('#cantSoldadosAtq').html(territorio[0]['cantSoldados']);
            $('#dificultadDef').html(territorio[0]['dificultadPreguntas']);
            $('#dificultadAtq').html(territorio[0]['dificultadPreguntas']);
        }
    })
}

function eventoClickTerritorio(t, numT) {
    t.addEventListener("click", ()=>{
        llenarDatosTerritorio(numT);
        if(t.getAttribute("value") != jugadorActual){
            modalAtacar.style.visibility = "visible";
            modalAtacar.style.opacity = "1";
            modalDefender.style.visibility = "hidden";
            modalDefender.style.opacity = "0";
        }else{
            modalDefender.style.visibility = "visible";
            modalDefender.style.opacity = "1";
            modalAtacar.style.visibility = "hidden";
            modalAtacar.style.opacity = "0";
        }
        territorioActual = t;
    })
}

eventoClickTerritorio(t1,1);
eventoClickTerritorio(t2,2);
eventoClickTerritorio(t3,3);
eventoClickTerritorio(t4,4);
eventoClickTerritorio(t5,5);
eventoClickTerritorio(t6,6);
eventoClickTerritorio(t7,7);
eventoClickTerritorio(t8,8);
eventoClickTerritorio(t9,9);
eventoClickTerritorio(t10,10);
eventoClickTerritorio(t11,11);
eventoClickTerritorio(t12,12);
eventoClickTerritorio(t13,13);
eventoClickTerritorio(t14,14);
eventoClickTerritorio(t15,15);
eventoClickTerritorio(t16,16);
eventoClickTerritorio(t17,17);
eventoClickTerritorio(t18,18);
eventoClickTerritorio(t19,19);
eventoClickTerritorio(t20,20);
eventoClickTerritorio(t21,21);
eventoClickTerritorio(t22,22);
eventoClickTerritorio(t23,23);
eventoClickTerritorio(t24,24);
eventoClickTerritorio(t25,25);
eventoClickTerritorio(t26,26);
eventoClickTerritorio(t27,27);
eventoClickTerritorio(t28,28);
eventoClickTerritorio(t29,29);
eventoClickTerritorio(t30,30);
eventoClickTerritorio(t31,31);
eventoClickTerritorio(t32,32);
eventoClickTerritorio(t33,33);
eventoClickTerritorio(t34,34);
eventoClickTerritorio(t35,35);

/*Turno y ronda*/

const nombreJugadorTurno = document.getElementById("nombreJugadorTurno");
const ronda = document.getElementById("ronda");
const modalResultados = document.getElementById("modalResultados");

const cantJugadores = 4;
let turnoJugador = 1;
let cantRondas = 3;

/*Preguntas*/

function pasarTurno(){
    if(turnoJugador >= cantJugadores){
        turnoJugador = 1;
        numRonda++;
        $.ajax({
            url: '../php/updateRonda.php',
            type: 'POST',
            data: {"idPartida" : idPartida}
        })
    }else{
        turnoJugador++;
    }
    switch (turnoJugador) {
        case 1:
            idActual = jugador1[0];
            jugadorActual = jugador1[1];
            colorActual = jugador1[2];
            break;
        case 2:
            idActual = jugador2[0];
            jugadorActual = jugador2[1];
            colorActual = jugador2[2];
            break;
        case 3:
            idActual = jugador3[0];
            jugadorActual = jugador3[1];
            colorActual = jugador3[2];  
            break;
        case 4:
            idActual = jugador4[0];
            jugadorActual = jugador4[1];
            colorActual = jugador4[2];
            break;
    }
    nombreJugadorTurno.innerHTML = jugadorActual;
    nombreJugadorTurno.style.color = colorActual;
    ronda.innerHTML = numRonda;
}

function mostrarResultados(){
    modalResultados.style.visibility = "visible";
    modalResultados.style.opacity = "1";
    modalResultadosCaja.style.transform = "translateY(0%)";
    
    $.ajax({
        url: '../php/obtenerResultados.php',
        type: 'POST',
        success: function(response) {
            var resultados = JSON.parse(response);
            let count = 0;
            resultados.forEach(e => {
                count++;
                const tr = document.createElement("tr");

                const td1 = document.createElement("td");
                const td1T = document.createTextNode(count);
                td1.appendChild(td1T);
                tr.appendChild(td1);
                
                const td2 = document.createElement("td");
                const td2T = document.createTextNode(e['nombre']);
                td2.appendChild(td2T);
                tr.appendChild(td2);
                
                const td3 = document.createElement("td");
                const td3T = document.createTextNode(e['terrDominados']);
                td3.appendChild(td3T);
                tr.appendChild(td3);

                const td4 = document.createElement("td");
                const td4T = document.createTextNode(e['ptsAcumulados']);
                td4.appendChild(td4T);
                tr.appendChild(td4);
                
                document.getElementById("tablaResultados").appendChild(tr);
            });
        }
    })
    $.ajax({
        url: '../php/borrarPartida.php',
        type: 'POST',
        data:{"idPartida" : idPartida}
    })
    
}

function darTiempo() {
    const modalPreguntas = document.getElementById("modalPreguntas");
    const modalPreguntasCaja = document.getElementById("modalPreguntasCaja");

    const Tiempo = setTimeout(()=>{
        modalPreguntas.style.visibility = "hidden";
        modalPreguntas.style.opacity = "0";
        modalPreguntas.style.pointerEvents = "none";
        if((numRonda == (cantRondas)) && (turnoJugador == cantJugadores)){
            mostrarResultados();
        }else{
            pasarTurno();
        }
    }, 1200);

}

const btnRespuesta1 = document.getElementById("respuesta1");
const btnRespuesta2 = document.getElementById("respuesta2");
const btnRespuesta3 = document.getElementById("respuesta3");
const btnRespuesta4 = document.getElementById("respuesta4");

let respCorrecta = "";

var territorioActual = null;

function darTerritorio(jugador, idTerritorio, idPartida, ptsSumados){
    $.ajax({
        url: '../php/subirTerritorio.php',
        type: 'POST',
        data: {
            'jugador' : jugador,
            'idTerritorio' : idTerritorio,
            'idPartida' : idPartida,
            'ptsSumados' : ptsSumados
            
        },
        success: function(response){
            let resultado = JSON.parse(response);
            let soldados = resultado[0]['soldados'];
/*
            const e = document.createElement("span");
            e.style.position = "absolute";
            e.style.zIndex = 1200;
            e.style.fontSize = "24px";
            e.style.bottom = "0";
            e.style.right = "0";

            const eT = document.createTextNode("+" + soldados);

            e.appendChild(eT);
            territorioActual.appendChild(e);
            console.log(territorioActual);*/

        }
    })
}

btnRespuesta1.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta1.getAttribute("value") == respCorrecta){
        btnRespuesta1.style.backgroundColor = "green";
        territorioActual.setAttribute("value", jugadorActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:" + colorActual +"'>" + jugadorActual +
        "</span> ha conquistado el territorio <span style='color:red'>" +
        territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta1.style.backgroundColor = "red";
    }
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta2.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta2.getAttribute("value") == respCorrecta){
        btnRespuesta2.style.backgroundColor = "green";
        territorioActual.setAttribute("value", jugadorActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:blue'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta2.style.backgroundColor = "red";
    }
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta3.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta3.getAttribute("value") == respCorrecta){
        btnRespuesta3.style.backgroundColor = "green";
        territorioActual.setAttribute("value", jugadorActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:blue'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta3.style.backgroundColor = "red";
    }
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta4.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta4.getAttribute("value") == respCorrecta){
        btnRespuesta4.style.backgroundColor = "green";
        territorioActual.setAttribute("value", jugadorActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:blue'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta4.style.backgroundColor = "red";
    }
    modalAtacar.style.visibility = "hidden";
    modalAtacar.style.opacity = "0";
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
    darTiempo();
})

/*Modal Preguntas*/

const btnConfirmarDefensa = document.getElementById("btnConfirmarDefensa");
const btnConfirmarAtaque = document.getElementById("btnConfirmarAtaque");

const modalPreguntas = document.getElementById("modalPreguntas");

function resetearRespuestas(){
    btnRespuesta1.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta2.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta3.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta4.style.backgroundColor = "rgb(64, 18, 138)";
}

btnConfirmarDefensa.addEventListener("click", ()=>{
    $.ajax({
        url: '../php/pedirDatosPregunta.php',
        type: 'POST',
        success: function(response) {
            var pregunta = JSON.parse(response);

            respCorrecta = pregunta[0]['respuestaCorrecta'];

            $('#consignaPregunta').html(pregunta[0]['pregunta']);
            respuesta1.setAttribute("value",respCorrecta);
            respuesta2.setAttribute("value",pregunta[0]['respuestaIncorrecta1']);
            respuesta3.setAttribute("value",pregunta[0]['respuestaIncorrecta2']);
            respuesta4.setAttribute("value",pregunta[0]['respuestaIncorrecta3']);
        }
    })
    resetearRespuestas();
    modalPreguntas.style.opacity = "1";
    modalPreguntas.style.visibility = "visible";
    modalPreguntas.style.pointerEvents = "auto";
})

btnConfirmarAtaque.addEventListener("click", ()=>{
    $.ajax({
        url: '../php/pedirDatosPregunta.php',
        type: 'POST',
        success: function(response) {
            var pregunta = JSON.parse(response);

            respCorrecta = pregunta[0]['respuestaCorrecta'];

            $('#consignaPregunta').html(pregunta[0]['pregunta']);
            respuesta1.setAttribute("value",pregunta[0]['respuestaCorrecta']);
            respuesta2.setAttribute("value",pregunta[0]['respuestaIncorrecta1']);
            respuesta3.setAttribute("value",pregunta[0]['respuestaIncorrecta2']);
            respuesta4.setAttribute("value",pregunta[0]['respuestaIncorrecta3']);
        }
    })
    resetearRespuestas();
    modalPreguntas.style.opacity = "1";
    modalPreguntas.style.visibility = "visible";
    modalPreguntas.style.pointerEvents = "auto";
})