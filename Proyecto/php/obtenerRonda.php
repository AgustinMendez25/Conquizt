<?php
    include('conexion.php');
    
    $idPartida = $_POST['idPartida'];
    
    $query = "SELECT ronda from partidas where idPartida = ".$idPartida;
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'ronda' => $row['ronda']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>