<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    
    $query = "update partidas set ronda = ronda+1 where idPartida = " . $idPartida;

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    
?>