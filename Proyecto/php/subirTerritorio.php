<?php
    include('conexion.php');

    $idDuenio = $_POST['jugador'];
    $idTerritorio = $_POST['idTerritorio'];
    $idPartida = $_POST['idPartida'];
    $ptsSumados = $_POST['ptsSumados'];

    $soldadosSumados = random_int(10, 80);
    
    $query = "UPDATE territorioporpartida set idDuenioDelTerritorio = " . $idDuenio .", cantSoldados = cantSoldados + "
            . $soldadosSumados . " where idTerritorio = " . $idTerritorio . " and idPartida = " . $idPartida;

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query2 = "UPDATE jugadores set ptsAcumulados = ptsAcumulados " . "+" . $ptsSumados .
             " where idJugador = " . $idDuenio;
             
    $result2 = mysqli_query($conexion, $query2);

    if(!$result2) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $json = array();
    $json[] = array(
        'soldados' => $soldadosSumados
    );


    $jsonstring = json_encode($json);
    echo $jsonstring;

?>