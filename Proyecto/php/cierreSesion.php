<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    $jugador = $_POST['jugador'];

    $query = "UPDATE jugadores SET idUsuario = 1 where 
    idPartida = " . $idPartida . " and numJugador = " . $jugador;

    $result = mysqli_query($conexion, $query);  
    if(!$result) {
        echo false;
        die ('Query Error'.mysqli_error($conexion));
    }else{
        echo true;
    }
?>