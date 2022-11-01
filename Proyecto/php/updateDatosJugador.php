<?php
    include('conexion.php');
    
    $faccion = $_POST['faccion'];

    $query = "";
    if ($faccion != null) {
        $query = "UPDATE jugadores SET idFaccion = ".$faccion.", nickname = '" . $_POST['nickname'] . "' 
        where numJugador = " . $_POST['jugador'] . " and idPartida = " . $_POST['idPartida'];
    }else{
        $query = "UPDATE jugadores SET nickname = '" . $_POST['nickname'] . "' 
        where numJugador = " . $_POST['jugador'] . " and idPartida = " . $_POST['idPartida'];
    }

    
    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    
?>