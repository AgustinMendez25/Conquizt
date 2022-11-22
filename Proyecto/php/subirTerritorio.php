<?php
    include('conexion.php');

    $idDuenio = $_POST['jugador'];
    $idTerritorio = $_POST['idTerritorio'];
    $idPartida = $_POST['idPartida'];
    $ptsSumados = $_POST['ptsSumados'];
    $modoJugador = $_POST['modoJugador'];

    $soldadosSumados = 0;
    if($modoJugador == "1"){
        //Ataque
        $soldadosSumados = random_int(10, 30);
    }else if($modoJugador == "2"){{
        //Defensa
        $soldadosSumados = random_int(30, 60);
    }}
    
    $query0 = "SELECT idJugador, idFaccion from jugadores where idPartida = " . $idPartida . " and numJugador = " . $idDuenio;

    $result0 = mysqli_query($conexion, $query0);

    if(!$result0) {
        die ('Query Error'.mysqli_error($conexion));
    }
    if ($row = mysqli_fetch_array($result0)) {
        $idJugador = $row['idJugador'];
        $idFaccion = $row['idFaccion'];
    }
    
    $query = "UPDATE territorioporpartida set idFaccion = " . $idFaccion . ", idDuenioDelTerritorio = " . $idJugador .", cantSoldados = cantSoldados + "
            . $soldadosSumados . " where idTerritorio = " . $idTerritorio . " and idPartida = " . $idPartida;

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query2 = "UPDATE jugadores set ptsAcumulados = ptsAcumulados " . "+" . $ptsSumados .
             " where idJugador = " . $idJugador;
             
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