<?php
    
    include('conexion.php');

    $dificultad = $_POST['dificultad'];
    $faccion = $_POST['faccion'];

    $query = "";
    if($faccion == null){
        $query = "SELECT * from preguntas where dificultad = '" . $dificultad . "'";
    }else{
        $query = "SELECT * from preguntas where idCivilizacion = " . $faccion . " and dificultad = '" . $dificultad . "'";
    }
    
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'pregunta' => $row['pregunta'],
            'respuesta1' => $row['respuesta1'],
            'respuesta2' => $row['respuesta2'],
            'respuesta3' => $row['respuesta3'],
            'respuesta4' => $row['respuesta4'],
            'respuestaCorrecta' => $row['respuestaCorrecta']
        );
    }

    $num = rand(0,count($json)-1);

    $json2 = array(
        'pregunta' => $json[$num]['pregunta'],
        'respuesta1' => $json[$num]['respuesta1'],
        'respuesta2' => $json[$num]['respuesta2'],
        'respuesta3' => $json[$num]['respuesta3'],
        'respuesta4' => $json[$num]['respuesta4'],
        'respuestaCorrecta' => $json[$num]['respuestaCorrecta']
          
    );

    $jsonstring = json_encode($json2);
    echo $jsonstring;
    
?>