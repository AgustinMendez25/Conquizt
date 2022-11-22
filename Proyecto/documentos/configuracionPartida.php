<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conquizt</title>

    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!--MODAL COLORES-->
    <div class="modalContainerColores" id="modalColores">
        <div class="modalColores">
            <div class="modalHeader">
                <h4>Seleccione un color</h4>
                <span id="cerrarColores">x</span>
            </div>
            <div class="modalBody">
                <div class="coloresContainer">
                    <div>
                        <div class="colorEleccion" id="rojo"></div>
                        <div class="colorEleccion" id="azul"></div>
                        <div class="colorEleccion" id="celeste"></div>
                        <div class="colorEleccion" id="naranja"></div>
                    </div>
                    <div>
                        <div class="colorEleccion" id="amarillo"></div>
                        <div class="colorEleccion" id="verde"></div>
                        <div class="colorEleccion" id="violeta"></div>
                        <div class="colorEleccion" id="negro"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper-config" id="modoJuego" value="<?php echo $_GET['modoJuego']?>">
        <div class="seleccion">
            <div class="conf-jugador">
                <div class="botonesAgregado">
                    <div class="colorContainer">
                        <div id="colorJugador" value="-">-</div>
                    </div>
                    <div id="faccionJugador" class="botonAgregar"><img src="../img/signoPregunta.png" height="55px" width="55px" alt=""></div>
                </div>
                <input type="text" id="nombreJugador" maxlength="14" value="Jugador 1" placeholder="Nombre del Jugador...">
                <input type="button" id="btnGuardarCJ" value="Guardar">
            </div>
            <div class="circle rueda-facciones">
                <ul>
                    <li class="faccion-li" id="li-faccion-1"><img src="../img/Cascos/CascoMongol.png" height="68px" alt=""></li>
                    <li class="faccion-li" id="li-faccion-2"><img src="../img/Cascos/CascoFrances.png" height="68px" alt=""></li>
                    <li class="faccion-li" id="li-faccion-3"><img src="../img/Cascos/CascoJapones.png" height="68px" alt=""></li>
                    <li class="faccion-li" id="li-faccion-4"><img src="../img/Cascos/CascoVikingo.png" height="68px" alt=""></li>
                    <li class="faccion-li" id="li-faccion-5"><img src="../img/Cascos/CascoEgipcio.png" height="68px" alt=""></li>
                    <li class="faccion-li" id="li-faccion-6"><img src="../img/Cascos/CascoRomano.png" height="68px" alt=""></li>
                </ul>
                <div class="circle circulo-jugadores">
                    <ul>
                        <li class="jugadorBusqueda liJ" color="" idCivilizacion="+" id="li-busqueda-1" idJugador="1">Jugador 1</li>
                        <li class="jugadorBusqueda liJ" color="" idCivilizacion="+" id="li-busqueda-2" idJugador="2">Jugador 2</li>
                        <li class="jugadorBusqueda liJ" color="" idCivilizacion="+" id="li-busqueda-3" idJugador="3">Jugador 3</li>
                        <li class="jugadorBusqueda liJ" color="" idCivilizacion="+" id="li-busqueda-4" idJugador="4">Jugador 4</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="infoDerecha">
            <div class="detallesCard" id="detallesFaccion">
                <h4 id="tituloFaccion">Detalles de la Facción</h4>
                <p id="descripcionFaccion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, blanditiis nihil ad beatae doloribus ducimus obcaecati esse impedit maiores tempore debitis doloremque illum quas placeat dolor nesciunt?.</p>
            </div>
            <div class="detallesCard" id="detallesUsuario">
                <h4 id="usuarioH4">Datos del Usuario</h4>    
                <div id="logueo">    
                    <div>
                        <input type="email" id="nombreIniciar" placeholder="Ingrese su email...">
                        <input type="password" id="passIniciar" placeholder="Ingrese su contraseña...">
                    </div>
                    <input type="button" id="btnRegistro" value="Registrarse" style="background-color:rgba(0,0,0,0);color:black">
                    <input type="button" id="btnIniciar" value="Ingresar">
                </div>
                <div id="logueado">
                    <img src="../img/sello.png" alt="" width="40px">
                    <span id="nombreUsuarioLogueado">Usuario</span>
                    <input type="button" id="btnCerrarSesion" value="Cerrar Sesión">
                </div>
            </div>
        </div>  
    </div>
    <div id="contenedorRegistro">
        <form action="" id="tarjetaRegistro">
            <span id="btnCerrarRegistro">X</span>
            <h4>Registro</h4>
            <input type="text" id="nombre" placeholder="Ingrese su nombre">
            <input type="email" id="email" placeholder="Ingrese su email">
            <input type="password" id="pass" placeholder="Ingrese su password">
            <input type="button" id="btnRegistrarse" value="Registrarse">
        </form>
    </div>
    <div class="btn-jugar">
        <a id="btnJugar">Jugar</a>
    </div>

    <!--JS-->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="../js/controlConfjugador.js"></script>
	<script src="../js/modoJuego.js"></script>

</body>
</html>