<?php
    include('conexion.php');
/*
    //nombre en el HTML del input
    $nombre = $_POST['contenido'];

    if(!empty($boton)) {
        $query = "SELECT * from jugadores where nombre like '$nombre'";
        $result = mysqli_query($conexion, $query);
        if(!$result) {
            die ('Query Error'.mysqli_error($conexion));
        }
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'idJugador' => $row['idJugador'],
                'nombre' => $row['nombre'],
                'ptsAcumulados' => $row['ptsAcumulados']
            );
        }

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
    */

    
    $query = "SELECT * from jugadores where
    idJugador = (select idJugador1 from partidas where idPartida = 1) or
    idJugador = (select idJugador2 from partidas where idPartida = 1) or
    idJugador = (select idJugador3 from partidas where idPartida = 1) or
    idJugador = (select idJugador4 from partidas where idPartida = 1)
        ";
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idJugador' => $row['idJugador'],
            'nombre' => $row['nombre'],
            'color' => $row['color'],
            'ptsAcumulados' => $row['ptsAcumulados']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>