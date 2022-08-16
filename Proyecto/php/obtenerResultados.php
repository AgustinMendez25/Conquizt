<?php
    include('conexion.php');
    
    $query = "SELECT idDuenioDelTerritorio, nombre, ptsAcumulados, count(*) as 'terrDominados'
              from jugadores j inner join territorioporpartida tp on j.idJugador = tp.idDuenioDelTerritorio where (
                idJugador = (select idJugador1 from partidas where idPartida = 1) or
                idJugador = (select idJugador2 from partidas where idPartida = 1) or
                idJugador = (select idJugador3 from partidas where idPartida = 1) or
                idJugador = (select idJugador4 from partidas where idPartida = 1)
              ) group by idDuenioDelTerritorio order by terrDominados DESC;";
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'nombre' => $row['nombre'],
            'ptsAcumulados' => $row['ptsAcumulados'],
            'terrDominados' => $row['terrDominados']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>