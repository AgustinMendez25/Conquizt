<?php
    include('conexion.php');
    
    $faccion = $_POST['faccion'];
    $color = $_POST['color'];

    $query = "";
    if ($faccion != null) {
        $query = "UPDATE jugadores SET color = '" . $color . "', idFaccion = ".$faccion.", nickname = '" . $_POST['nickname'] . "' 
        where numJugador = " . $_POST['jugador'] . " and idPartida = " . $_POST['idPartida'];
    }else{
        $query = "UPDATE jugadores SET color = '" . $color . "', nickname = '" . $_POST['nickname'] . "' 
        where numJugador = " . $_POST['jugador'] . " and idPartida = " . $_POST['idPartida'];
    }
    
    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    
?>