<?php
    include('conexion.php');

    $id = $_POST['id'];
    
    /*$query = "SELECT idDuenioDelTerritorio, nombre, ptsAcumulados, count(*) as 'terrDominados'
              from jugadores j inner join territorioporpartida tp on j.idJugador = tp.idDuenioDelTerritorio where (
                idJugador = (select idJugador1 from partidas where idPartida = ".$id.") or
                idJugador = (select idJugador2 from partidas where idPartida = ".$id.") or
                idJugador = (select idJugador3 from partidas where idPartida = ".$id.") or
                idJugador = (select idJugador4 from partidas where idPartida = ".$id.")
              ) and tp.idPartida = ".$id." group by idDuenioDelTerritorio order by terrDominados DESC;";*/
    $query = "SELECT j.idJugador, j.nickname, j.ptsAcumulados, tp.idTerritorio as 'conquistado', count(*) as
     'terrDominados' FROM territorioporpartida tp
     right join jugadores j on tp.idDuenioDelTerritorio = j.idJugador where j.idPartida = ".$id."
      group by j.idJugador order by terrDominados DESC, ptsAcumulados DESC;";

    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $terrDominados=0;
        if($row['conquistado'] != null){
            $terrDominados = $row['terrDominados'];
        }
        $json[] = array(
            'nombre' => $row['nickname'],
            'ptsAcumulados' => $row['ptsAcumulados'],
            'terrDominados' => $terrDominados
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>