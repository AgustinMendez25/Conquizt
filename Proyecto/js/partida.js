"use strict";

/* VARIABLES */

const fondoNegro = document.getElementById("fondoNegro");

/* FUNCIONES */

function colocarFondoNegro() {
    fondoNegro.style.opacity = "1";
    fondoNegro.style.visibility = "visible";
}

function sacarFondoNegro() {
    fondoNegro.style.opacity = "0";
    fondoNegro.style.visibility = "hidden";
}

function mensajeTexto(mensaje) {
    let texto = document.getElementById("cajaAvisos");
    texto.innerHTML = texto.innerHTML + mensaje;
}

/* COMENZAR PARTIDA */

document.getElementById("btnComenzarPartida").addEventListener("click", ()=>{
    setTimeout(() => {}, 2000);
    const cargPartida = document.getElementById("cargaPartida");
    cargaPartida.style.opacity = "0";
    cargaPartida.style.visibility = "hidden";
    despausarTiempo();
})

/*JUGADORES*/

let jugador1 = [];
let jugador2 = [];
let jugador3 = [];
let jugador4 = [];

let idActual = 0;
let jugadorActual = "";
let colorActual = "";
let faccionActual = 0;

let cantJugadores = 4;

const idPartida = document.getElementById("btnComenzarPartida").getAttribute("idPartida");
//let modoJuego = "";
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
        url: '../php/obtenerModoJuego.php',
        type: 'POST',
        data: {"idPartida" : idPartida},
        success: function(response) {
            let respuesta = JSON.parse(response);
            var modoJuego = respuesta[0]['modoJuego'];

            const li3 = document.getElementById("jugador-3");
            const li4 = document.getElementById("jugador-4");

            switch (modoJuego) {
                case "FFA":
                    document.getElementById('modoJuegoTXT').innerHTML = "Partida FFA";
                    break;
                case "1vs1":
                    document.getElementById('modoJuegoTXT').innerHTML = "Partida 1vs1";
                    li3.style.visibility = "hidden";
                    li4.style.visibility = "hidden";
                    cantJugadores = 2;
                    break;
                case "Triple":
                    document.getElementById('modoJuegoTXT').innerHTML = "Partida Triples";
                    li4.style.visibility = "hidden";
                    cantJugadores = 3;
                    break;
                case "2vs2":
                    document.getElementById('modoJuegoTXT').innerHTML = "Partida 2vs2";
                    break;            
                default:
                    break;
            }
            setearJugadores();
        }
    })
    function setearJugadores() {
        $.ajax({
            url: '../php/controlBDD.php',
            type: 'POST',
            data: {"idPartida" : idPartida},
            success: function(response) {
                var jugadores = JSON.parse(response);
                
                
                jugador1 = [jugadores[0]['numJugador'], jugadores[0]['nickname'], jugadores[0]['color']];
                jugador2 = [jugadores[1]['numJugador'], jugadores[1]['nickname'], jugadores[1]['color']];
                
                idActual = jugador1[0];
                jugadorActual = jugador1[1];
                colorActual = jugador1[2];
                
                $('#jugador1').html(jugador1[1]);
                $('#jugador2').html(jugador2[1]);
                
                document.getElementById("jugador1").style.color = jugador1[2].substr(0, jugador1[2].length - 5) + "0.714)";
                document.getElementById("jugador2").style.color = jugador2[2].substr(0, jugador2[2].length - 5) + "0.714)";
                
                nombreJugadorTurno.style.color = colorActual;
                $('#nombreJugadorTurno').html(jugador1[1]);
                
                if (cantJugadores == 3) {
                    jugador3 = [jugadores[2]['numJugador'], jugadores[2]['nickname'], jugadores[2]['color']];
                    $('#jugador3').html(jugador3[1]);
                    document.getElementById("jugador3").style.color = jugador3[2].substr(0, jugador3[2].length - 5) + "0.714)";
                }
                if (cantJugadores == 4) {
                    jugador3 = [jugadores[2]['numJugador'], jugadores[2]['nickname'], jugadores[2]['color']];
                    jugador4 = [jugadores[3]['numJugador'], jugadores[3]['nickname'], jugadores[3]['color']];
                    $('#jugador3').html(jugador3[1]);
                    $('#jugador4').html(jugador4[1]);
                    document.getElementById("jugador3").style.color = jugador3[2].substr(0, jugador3[2].length - 5) + "0.714)";
                    document.getElementById("jugador4").style.color = jugador4[2].substr(0, jugador4[2].length - 5) + "0.714)";
                }
            }
        })
    }
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
        case jugador1[0]:
            t.style.fill = jugador1[2].substr(0, jugador1[2].length - 5) + "0.333)";
            break;
        case jugador2[0]:
            t.style.fill = jugador2[2].substr(0, jugador2[2].length - 5) + "0.333)";
            break;
        case jugador3[0]:
            t.style.fill = jugador3[2].substr(0, jugador3[2].length - 5) + "0.333)";
            break;
        case jugador4[0]:
            t.style.fill = jugador4[2].substr(0, jugador4[2].length - 5) + "0.333)";
            break;
        default:
            t.style.fill = "#0000001";
            break;
    }
}

//Se incluye un timeout ya que ajax demora un poco en obtener los nombres, una vez obtenidos se procesa el resto
setTimeout(function(){
    jugadorActual = jugador1[1];
    idActual = jugador1[0];
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

const modalAtacarDefender = document.getElementById("modalAtacarDefender");
//const modalDefender = document.getElementById("modalDefender");

//const cerrarModalDefender = document.getElementById("cerrarModalDefender");
const cerrarmodalAtacarDefender = document.getElementById("cerrarModalAtacarDefender");

/*cerrarModalDefender.addEventListener("click", ()=>{
    modalDefender.style.visibility = "hidden";
    modalDefender.style.opacity = "0";
})*/

cerrarmodalAtacarDefender.addEventListener("click", ()=>{
    modalAtacarDefender.style.visibility = "hidden";
    modalAtacarDefender.style.opacity = "0";
})

/*Modales*/

function llenarDatosTerritorio(t){
    $.ajax({
        url: '../php/pedirDatosTerritorio.php',
        type: 'POST',
        data: {territorio : t, idPartida : idPartida},
        success: function(response) {
            var territorio = JSON.parse(response);

            faccionActual = territorio[0]['idFaccion'];
            
            if(faccionActual != null){
                $('#faccionDuenia').html(territorio[0]['nombreFaccion']);
            }else{
                $('#faccionDuenia').html("Desconocido");
            }
            $('#nombreTerritorio').html(territorio[0]['nombreTerritorio']);

            const cantSold = territorio[0]['cantSoldados'];

            $('#cantSoldados').html(cantSold);
            if (cantSold <= 75) {
                $('#dificultad').html("Fácil");
            }else if (cantSold <= 200 && cantSold > 75) {
                $('#dificultad').html("Intermedio");
            }else if (cantSold > 200) {
                $('#dificultad').html("Difícil");
            }
            
        }
    })
}

let modoJugador = "0";

function eventoClickTerritorio(t, numT) {
    t.addEventListener("click", ()=>{
        llenarDatosTerritorio(numT);
        if(t.getAttribute("value") != idActual){
            modalAtacarDefender.style.visibility = "visible";
            modalAtacarDefender.style.opacity = "1";
            modalAtacarDefender.style.backgroundColor = "rgba(255, 238, 0, 0.5)";
            modalAtacarDefender.style.top = "30%";
            modalAtacarDefender.style.left = "30%";
            document.getElementById('btnConfirmarAtaqueDefensa').setAttribute("value","Atacar");
            document.getElementById('btnConfirmarAtaqueDefensa').style.backgroundColor = "rgb(170, 13, 13)";
            modoJugador = 1;
        }else{
            modalAtacarDefender.style.visibility = "visible";
            modalAtacarDefender.style.opacity = "1";
            modalAtacarDefender.style.backgroundColor = "rgba(0, 255, 234, 0.5)";
            modalAtacarDefender.style.top = "30%";
            modalAtacarDefender.style.left = "70%";
            document.getElementById('btnConfirmarAtaqueDefensa').setAttribute("value","Defender");
            document.getElementById('btnConfirmarAtaqueDefensa').style.backgroundColor = "rgb(44, 170, 13)";
            modoJugador = 2;
        }
        territorioActual = t;
    })
}

/*
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
}*/

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
const modalResultadosCaja = document.getElementById("modalResultadosCaja");

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
    minutos = 0;
    segundos = 30;
}

function mostrarResultados(){
    modalResultados.style.visibility = "visible";
    modalResultados.style.opacity = "1";
    modalResultadosCaja.style.transform = "translateY(0%)";
    
    $.ajax({
        url: '../php/obtenerResultados.php',
        type: 'POST',
        data: {"id" : idPartida},
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
    setTimeout(() => {
        $.ajax({
            url: '../php/borrarPartida.php',
            type: 'POST',
            data:{"idPartida" : idPartida}
        })
        pausarTiempo();
    }, 5000);
}

function darTiempo() {
    const modalPreguntas = document.getElementById("modalPreguntas");
    const modalPreguntasCaja = document.getElementById("modalPreguntasCaja");

    const Tiempo = setTimeout(()=>{
        modalPreguntas.style.visibility = "hidden";
        modalPreguntas.style.opacity = "0";
        modalPreguntas.style.pointerEvents = "none";
        if((numRonda >= (cantRondas)) && (turnoJugador == cantJugadores)){
            mostrarResultados();
        }else{
            pasarTurno();
        }
    }, 800);

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
            'ptsSumados' : ptsSumados,
            'modoJugador' : modoJugador
            
        },
        success: function(response){
            let resultado = JSON.parse(response);
            let soldados = resultado[0]['soldados'];
            
            /*
            const nombreT = "Vector_" + idTerritorio;
            const posicion = document.getElementById(nombreT).getBoundingClientRect();
            console.log(posicion['x']);
            
            const imagen = document.createElement("img");
            imagen.setAttribute("src", "../img/duelo.jpg");
            imagen.style.width = "200px";
            imagen.style.height = "200px";
            imagen.style.postion = "absolute";
            imagen.style.left = posicion['x'];
            document.getElementById("estandartes").appendChild(imagen);*/

            const e = document.getElementById('soldadosAgregados');
            e.innerHTML = "+" + soldados;

            const modal = document.getElementById('modalSoldados');
            modal.style.visibility = "visible";
            modal.style.opacity = "1";

            setTimeout(() => {
                modal.style.visibility = "hidden";
                modal.style.opacity = "0";
                escalarMensajeTurno();
            }, 2500);
        }
    })
}

function escalarMensajeTurno() {
    const partidaMensajeAviso = document.getElementById("partidaMensajeAviso");
    partidaMensajeAviso.style.transform = "translateY(30vh)";
    partidaMensajeAviso.style.backgroundColor = "(0,0,0,0.75)";
    partidaMensajeAviso.firstElementChild.style.fontSize = "92px";
    partidaMensajeAviso.lastElementChild.style.visibility = "hidden";
    partidaMensajeAviso.lastElementChild.style.opacity = "0";
    partidaMensajeAviso.parentNode.style.height = "100vh";
    partidaMensajeAviso.parentNode.style.backgroundColor = "rgba(0,0,0,0.5)";
    partidaMensajeAviso.parentNode.style.pointerEvents = "none";
    pausarTiempo();
    setTimeout(() => {
        partidaMensajeAviso.style.transform = "translateY(0)";
        partidaMensajeAviso.style.zIndex = "0";
        partidaMensajeAviso.firstElementChild.style.fontSize = "38px";
        partidaMensajeAviso.lastElementChild.style.visibility = "visible";
        partidaMensajeAviso.lastElementChild.style.opacity = "1";
        partidaMensajeAviso.parentNode.style.height = "0px";
        partidaMensajeAviso.parentNode.style.backgroundColor = "rgba(0,0,0,0)";
        partidaMensajeAviso.parentNode.style.pointerEvents = "auto";
        despausarTiempo();
    }, 3000);
}

btnRespuesta1.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta1.getAttribute("idResp") == respCorrecta){
        btnRespuesta1.style.backgroundColor = "green";
        territorioActual.setAttribute("value", idActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:" + colorActual +"'>" + jugadorActual +
        "</span> ha conquistado el territorio <span style='color:red'>" +
        territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta1.style.backgroundColor = "red";
        setTimeout(() => {
            escalarMensajeTurno();
        }, 1000);
    }
    modalAtacarDefender.style.visibility = "hidden";
    modalAtacarDefender.style.opacity = "0";
    //modalDefender.style.visibility = "hidden";
    //modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta2.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta2.getAttribute("idResp") == respCorrecta){
        btnRespuesta2.style.backgroundColor = "green";
        territorioActual.setAttribute("value", idActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:blue'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta2.style.backgroundColor = "red";
        setTimeout(() => {
            escalarMensajeTurno();
        }, 1000);
    }
    modalAtacarDefender.style.visibility = "hidden";
    modalAtacarDefender.style.opacity = "0";
    //modalDefender.style.visibility = "hidden";
    //modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta3.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta3.getAttribute("idResp") == respCorrecta){
        btnRespuesta3.style.backgroundColor = "green";
        territorioActual.setAttribute("value", idActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:blue'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta3.style.backgroundColor = "red";
        setTimeout(() => {
            escalarMensajeTurno();
        }, 1000);
    }
    modalAtacarDefender.style.visibility = "hidden";
    modalAtacarDefender.style.opacity = "0";
    //modalDefender.style.visibility = "hidden";
    //modalDefender.style.opacity = "0";
    darTiempo();
})

btnRespuesta4.addEventListener("click", ()=>{
    modalPreguntas.style.pointerEvents = "none";
    if(btnRespuesta4.getAttribute("idResp") == respCorrecta){
        btnRespuesta4.style.backgroundColor = "green";
        territorioActual.setAttribute("value", idActual);
        cambiarColorTerritorio(territorioActual);
        mensajeTexto("<span style='color:" + colorActual + "'>" + jugadorActual + "</span> ha conquistado el territorio <span style='color:red'>" + territorioActual.getAttribute('idT') + "</span>" + "<br>");
        darTerritorio(idActual, territorioActual.getAttribute("idT"), idPartida, 3);
    }else{
        btnRespuesta4.style.backgroundColor = "red";
        setTimeout(() => {
            escalarMensajeTurno();
        }, 1000);
    }
    modalAtacarDefender.style.visibility = "hidden";
    modalAtacarDefender.style.opacity = "0";
    //modalDefender.style.visibility = "hidden";
    //modalDefender.style.opacity = "0";
    darTiempo();
})

/*Modal Preguntas*/

//const btnConfirmarDefensa = document.getElementById("btnConfirmarDefensa");
const btnConfirmarAtaqueDefensa = document.getElementById("btnConfirmarAtaqueDefensa");

const modalPreguntas = document.getElementById("modalPreguntas");

function resetearRespuestas(){
    btnRespuesta1.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta2.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta3.style.backgroundColor = "rgb(64, 18, 138)";
    btnRespuesta4.style.backgroundColor = "rgb(64, 18, 138)";
}
/*
btnConfirmarDefensa.addEventListener("click", ()=>{
    $.ajax({
        url: '../php/pedirDatosPregunta.php',
        type: 'POST',
        //data: {'dificultad' : document.getElementById('')},
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
})*/

btnConfirmarAtaqueDefensa.addEventListener("click", ()=>{
    $.ajax({
        url: '../php/pedirDatosPregunta.php',
        type: 'POST',
        data: {
            'dificultad' : document.getElementById('dificultad').innerHTML,
            'faccion' : faccionActual
        },
        success: function(response) {
            var pregunta = JSON.parse(response);

            respCorrecta = pregunta['respuestaCorrecta'];

            $('#consignaPregunta').html(pregunta['pregunta']);
            btnRespuesta1.setAttribute("value",pregunta['respuesta1']);
            btnRespuesta1.setAttribute("idResp",1);
            btnRespuesta2.setAttribute("value",pregunta['respuesta2']);
            btnRespuesta2.setAttribute("idResp",2);
            btnRespuesta3.setAttribute("value",pregunta['respuesta3']);
            btnRespuesta3.setAttribute("idResp",3);
            btnRespuesta4.setAttribute("value",pregunta['respuesta4']);
            btnRespuesta4.setAttribute("idResp",4);
        }
    })
    resetearRespuestas();
    minutos = 0;
    segundos = 30;
    modalPreguntas.style.opacity = "1";
    modalPreguntas.style.visibility = "visible";
    modalPreguntas.style.pointerEvents = "auto";
})