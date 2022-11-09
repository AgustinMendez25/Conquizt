<?php
    include('conexion.php');
    
    $query = "INSERT into partidas(modoJuego)
    values('".$_POST['modoJuego']."')";
    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query = "select max(idPartida) as id from partidas";
    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die ('Query Error'.mysqli_error($conexion));
    }
    $json = array();
    $id = null;
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'idPartida' => $row['id']
        );
        $id = $row['id'];
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
    $query1 = "INSERT into territorioporpartida(idPartida, idTerritorio) values(".$id.",1),(".$id.",2),(".$id.",3),
    (".$id.",4),(".$id.",5),(".$id.",6),(".$id.",7),(".$id.",8),(".$id.",9),(".$id.",10),(".$id.",11),(".$id.",12),(".$id.",13),
    (".$id.",14),(".$id.",15),(".$id.",16),(".$id.",17),(".$id.",18),(".$id.",19),(".$id.",20),(".$id.",21),(".$id.",22),(".$id.",23),
    (".$id.",24),(".$id.",25),(".$id.",26),(".$id.",27),(".$id.",28),(".$id.",29),(".$id.",30),(".$id.",31),(".$id.",32),(".$id.",33),
    (".$id.",34),(".$id.",35)";
    $result1 = mysqli_query($conexion, $query1);


    if(!$result1) {
        die ('Query Error'.mysqli_error($conexion));
    }

    $query2 = "";
    if($_POST['modoJuego'] == "1vs1"){
        $query2 = "INSERT INTO jugadores(idPartida,numJugador,equipoJugador) 
        values(".$id.",1,1),(".$id.",2,2)";
    }else if($_POST['modoJuego'] == "2vs2"){
        $query2 = "INSERT INTO jugadores(idPartida,numJugador,equipoJugador) 
        values(".$id.",1,1),(".$id.",2,1),(".$id.",3,2),(".$id.",4,2)";
    }else if($_POST['modoJuego'] == "Triple"){
        $query2 = "INSERT INTO jugadores(idPartida,numJugador,equipoJugador) 
        values(".$id.",1,1),(".$id.",2,2),(".$id.",3,3)";
    }else if($_POST['modoJuego'] == "FFA"){
        $query2 = "INSERT INTO jugadores(idPartida,numJugador,equipoJugador) 
        values(".$id.",1,1),(".$id.",2,2),(".$id.",3,3),(".$id.",4,4)";
    }
    
    $result2 = mysqli_query($conexion, $query2);


    if(!$result2) {
        die ('Query Error'.mysqli_error($conexion));
    }
    
?>