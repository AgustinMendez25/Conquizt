<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    
    $query = "update territorioporpartida set idDuenioDelTerritorio = null where idPartida = ".$idPartida.";";

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query2 = "update partidas set ronda = 1 where idPartida = ".$idPartida;

    $result2 = mysqli_query($conexion, $query2);

    if(!$result2) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query3 = "update jugadores set ptsAcumulados = 0;";

    $result3 = mysqli_query($conexion, $query3);

    if(!$result3) {
        die ('Query Error'.mysqli_error($conexion));
    }

?>