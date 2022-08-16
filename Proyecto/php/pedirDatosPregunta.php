<?php
    
    include('conexion.php');

    $num = rand(2,5);

    $query = "SELECT * from preguntas where idPregunta = " . $num;
    
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'pregunta' => $row['pregunta'],
            'respuestaCorrecta' => $row['respuestaCorrecta'],
            'respuestaIncorrecta1' => $row['respuestaIncorrecta1'],
            'respuestaIncorrecta2' => $row['respuestaIncorrecta2'],
            'respuestaIncorrecta3' => $row['respuestaIncorrecta3']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>