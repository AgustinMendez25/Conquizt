<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    $jugador = $_POST['jugador'];
    
    $query = "select u.nombre from jugadores j inner join usuarios u on j.idUsuario = u.id 
    where j.idPartida = " . $idPartida . " and j.numJugador = " . $jugador;

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        echo false;
        die ('Query Error'.mysqli_error($conexion));
    }else{
        if(mysqli_num_rows($result) > 0){
            if ($row = mysqli_fetch_array($result)) {
                echo $row['nombre'];
            }
        }else{
            echo false;
        }
    }
?>