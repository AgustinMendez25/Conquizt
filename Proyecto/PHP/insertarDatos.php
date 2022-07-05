<?php
    
    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'conquizt'
    );

    if($conexion){
        die("conexion fallada: " . mysqli_connect_error());
    }else{
        echo "conexion exitosa";
    }

    mysqli_close($conexion);

    $nombre = $_POST['btnGuardarCJ'];

    if(isset($_POST['nombreJugador'])){
    
        $nombreJugador = $_POST['nombreJugador'];
        $guardar = $_POST['btnGuardarCJ'];

        $sql = "INSERT INTO jugadores(nombre) VALUES ($nombreJugador)";

        if($conexion->query($sql) === true){
            echo 'conexion hecha';
        }else{
            die('error al conectar: '.$conexion->mysqli_connect_error());
        }

    }

?>