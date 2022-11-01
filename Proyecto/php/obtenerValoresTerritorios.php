<?php
    
    include('conexion.php');

    $query = "SELECT idTerritorio,idDuenioDelTerritorio,nickname
    from territorioporpartida tp left join jugadores j on tp.idDuenioDelTerritorio = j.idJugador;";
    
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    } 
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idTerritorio' => $row['idTerritorio'],
            'idDuenioDelTerritorio' => $row['idDuenioDelTerritorio'],
            'nombre' => $row['nickname']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>