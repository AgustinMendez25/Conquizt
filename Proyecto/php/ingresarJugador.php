<?php

    include('conexion.php');

    $nombre = $_POST['nombreJugador'];
    $jugador1 = $_POST["li-busqueda-1"];
    $jugador2 = $_POST["li-busqueda-2"];
    $jugador3 = $_POST["li-busqueda-3"];
    $jugador4 = $_POST["li-busqueda-4"];

    $query = "INSERT INTO jugadores('nombreJugador') VALUES ($nombre) WHERE(
                idJugador = (select idJugador1 from jugadores where idPartida = 1) or
                idJugador = (select idJugador2 from jugadores where idPartida = 2) or
                idJugador = (select idJugador3 from jugadores where idPartida = 3) or
                idJugador = (select idJugador4 from jugadores where idPartida = 4)
            );";

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result, $query)) {
        $json[] = array(
            'nombreJugador' => $row['nombreJugador'],
            'idJugador' => $row['idJugador'],
            'idJugador1' => $row['idJugador1'],
            'idJugador2' => $row['idJugador2'],
            'idJugador3' => $row['idJugador3'],
            'idJugador4' => $row['idJugador4']

        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;

?>