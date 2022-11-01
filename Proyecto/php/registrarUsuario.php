<?php
    include('conexion.php');

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    
    $query = "insert into usuarios(nombre, email, password) 
    values('" . $nombre . "', '" . $email . "', '" . $pass . "')";

    $result = mysqli_query($conexion, $query);

    if(!$result) {
        echo false;
        die ('Query Error'.mysqli_error($conexion));
    }else{
        echo true;
    }
    
?>