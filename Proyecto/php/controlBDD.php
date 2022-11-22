<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    
    $query = "SELECT * from jugadores where idPartida = " . $idPartida;
    $result = mysqli_query($conexion, $query);
    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'numJugador' => $row['numJugador'],
            'nickname' => $row['nickname'],
            'color' => $row['color']
        );
    }
    

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>