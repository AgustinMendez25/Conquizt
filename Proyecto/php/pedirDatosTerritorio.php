<?php
    
    include('conexion.php');

    $query = "SELECT idDuenioDelTerritorio,nombreTerritorio,idFaccion,tipoCivilizacion,cantSoldados,dificultadPreguntas
    from territorioporpartida tp inner join territorios t on tp.idTerritorio = t.idTerritorio
    left join civilizaciones c on c.idCivilizacion = tp.idFaccion
    where t.idTerritorio = ".$_POST['territorio']." and tp.idPartida = ".$_POST['idPartida'];
    
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idDuenioDelTerritorio' => $row['idDuenioDelTerritorio'],
            'nombreTerritorio' => $row['nombreTerritorio'],
            'idFaccion' => $row['idFaccion'],
            'nombreFaccion' => $row['tipoCivilizacion'],
            'cantSoldados' => $row['cantSoldados'],
            'dificultadPreguntas' => $row['dificultadPreguntas']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>