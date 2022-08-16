<?php
    
    include('conexion.php');

    $query = "SELECT idDuenioDelTerritorio,nombreTerritorio,cantSoldados,dificultadPreguntas
    from territorioporpartida tp inner join territorios t on tp.idTerritorio = t.idTerritorio
    where t.idTerritorio = ".$_POST['territorio'];
    
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idDuenioDelTerritorio' => $row['idDuenioDelTerritorio'],
            'nombreTerritorio' => $row['nombreTerritorio'],
            'cantSoldados' => $row['cantSoldados'],
            'dificultadPreguntas' => $row['dificultadPreguntas']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>