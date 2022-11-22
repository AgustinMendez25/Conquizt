<?php
    include('conexion.php');

    if(isset( $_POST['nombre']) && isset($_POST['email']) && isset($_POST['nombre']) ){
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];

        if (str_contains($nombre,';') OR str_contains($nombre,'<script>') OR str_contains($email,';') OR str_contains($email,'<script>') OR str_contains($pass,';') OR str_contains($pass,'<script>')) {
            echo false;
        }else{
            $query = "insert into usuarios(nombre, email, password) 
            values('" . $nombre . "', '" . $email . "', '" . $pass . "')";
        
            $result = mysqli_query($conexion, $query);
        
            if(!$result) {
                echo false;
                die ('Query Error'.mysqli_error($conexion));
            }else{
                echo true;
            }   
        }
    }else{
        echo false;
    }

    
?>