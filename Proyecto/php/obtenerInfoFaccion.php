<?php
    include('conexion.php');

    $faccion = $_POST['faccion'];
    
    $query = "SELECT * from civilizaciones where idCivilizacion = " . $faccion;
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idCivilizacion' => $row['idCivilizacion'],
            'tipoCivilizacion' => $row['tipoCivilizacion'],
            'descripcionFaccion' => $row['descripcionFaccion']
        );
    }
    

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>