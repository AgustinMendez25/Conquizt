<?php
    include('conexion.php');
    
    if(isset($_POST['faccion']) && isset($_POST['nickname']) && isset($_POST['color'])){
        if((strlen($_POST['nickname']) < 15) && ($_POST['nickname'] != null) && ($_POST['faccion'] != null) && ($color = $_POST['color'] != null && $color = $_POST['color'] != "")){
            $faccion = $_POST['faccion'];
            $color = $_POST['color'];
            
            $query = "UPDATE jugadores SET color = '" . $color . "', idFaccion = ".$faccion.", nickname = '" . $_POST['nickname'] . "' 
            where numJugador = " . $_POST['jugador'] . " and idPartida = " . $_POST['idPartida'];
            
            $result = mysqli_query($conexion, $query);
    
            if(!$result) {
                die ('Query Error'.mysqli_error($conexion));
            }
        }else{
            echo 2;
        }
    }else{
        echo 2;
    }

?>