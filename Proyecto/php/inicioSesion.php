<?php
    include('conexion.php');

    $idPartida = $_POST['idPartida'];
    $jugador = $_POST['jugador'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    
    $query = "select * from usuarios where email='" . $email . "' and password='" . $pass . "'";

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        echo false;
        die ('Query Error'.mysqli_error($conexion));
    }else{
        if(mysqli_num_rows($result) > 0){
            if ($row = mysqli_fetch_array($result)) {
                $query = "UPDATE jugadores SET idUsuario = " . $row['id'] . " where 
                idPartida = " . $idPartida . " and numJugador = " . $jugador;

                $result = mysqli_query($conexion, $query);  
                if(!$result) {
                    echo false;
                    die ('Query Error'.mysqli_error($conexion));
                }else{
                    echo $row['nombre'];
                }
            }
        }else{
            echo false;
        }
    }
?>